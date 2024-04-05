import fs from "fs";
import {
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import s3Client from "../database/awsStorage.js";

const bucketName = process.env.S3_BUCKET_NAME;

function findText(string, searchText) {
  // Convert both the string and searchText to lowercase for case-insensitive search
  const lowerString = string.toLowerCase();
  const lowerSearchText = searchText.toLowerCase();

  // Check if searchText appears in the string
  if (lowerString.indexOf(lowerSearchText) !== -1) {
    return true;
  } else {
    return false;
  }
}

async function postS3BucketUploads(files, id) {
  try {
    console.log("postS3BucketUploads files", files);
    const fileContent = fs.readFileSync(files.tempFilePath);

    const checkString = findText(files.name, id);
    console.log("result of check string", checkString);

    let key;
    checkString ? (key = `${files.name}`) : (key = `${id}-${files.name}`);

    const uploadCommand = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: fileContent,
      ContentType: files.mimetype,
      // ContentType: "model/gltf-binary", // Set the appropriate content type for .glb file
      // Adjust permissions as needed
    });

    const up = await s3Client.send(uploadCommand);
    // console.log("file response", up);
    const fileUrl = `https://${bucketName}.s3.ap-south-1.amazonaws.com/${key}`;
    const resData = {
      url: fileUrl,
      key: key,
    };
    return resData;
  } catch (error) {
    console.log("postS3BucketUploads Error:", error);
  }
}

async function getFileUrl(key) {
  try {
    const url = await getSignedUrl(
      s3Client,
      new GetObjectCommand({
        Bucket: bucketName,
        Key: key,
      })
    );

    return url;
  } catch (error) {
    console.log(error);
  }
}

async function deleteS3BucketUploads(key) {
  try {
    console.log("req in delete s3", key);

    const result = new DeleteObjectCommand({
      Bucket: bucketName,
      Key: key,
    });
    const res = await s3Client.send(result);
    console.log("response in s3 delete", res);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export { postS3BucketUploads, getFileUrl, deleteS3BucketUploads };
