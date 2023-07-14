import {
  GetObjectCommand,
  PutObjectCommand,
  ListObjectsV2Command,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import s3Client from "../database/awsStorage";

const BucketName = "ar-view-uploads-private";

async function getObjectURL(key) {
  const command = new GetObjectCommand({
    Bucket: BucketName,
    Key: key,
  });
  const url = await getSignedUrl(s3Client, command, { expiresIn: 20 }); //20sec
  // console.log(url,'url');
  return url;
}

async function putObject(filename, contentType) {
  const command = new PutObjectCommand({
    Bucket: BucketName,
    Key: `/uploads/user-uploads/${filename}`,
    ContentType: contentType,
  });
  const url = await getSignedUrl(s3Client, command, { expiresIn: 60 });
  return url;
}

async function listObjects() {
  const command = new ListObjectsV2Command({
    Bucket: BucketName,
    Key: "/",
  });
  const result = await s3Client.send(command);
  console.log(result);
}

async function deleteObject() {
  const cmd = new DeleteObjectCommand({
    Bucket: BucketName,
    Key: "appcode.png", //the name of the file in the bucket
  });
  await s3Client.send(cmd);
}

async function deleteInit() {
  await deleteObject();
}

console.log('delete',deleteInit());

async function getInit() {
  console.log(
    "URL for image ",
    await getObjectURL("/uploads/user-uploads/image-1688188600973.jpeg")
  );
}

async function putInit() {
  console.log(
    "URL for uploading ",
    await putObject(`image-${Date.now()}.jpeg`, "image/jpeg")
  );
}

async function ListInit() {
  await listObjects();
}
