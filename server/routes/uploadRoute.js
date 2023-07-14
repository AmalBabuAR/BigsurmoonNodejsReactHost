import express from "express";
// import multer from "multer";
// import multerS3 from "multer-s3";
// import s3Client from "../database/awsStorage.js";
import fs from "fs";
import * as dotenv from "dotenv";
dotenv.config();
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import {
  GetObjectCommand,
  PutObjectCommand,
  ListObjectsV2Command,
  DeleteObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  forcePathStyle: false,
  credentials: {
    accessKeyId: process.env.AWS_ACCESSKEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESSKEY_ID,
  },
});

const routerUpload = express.Router();

routerUpload.post("/file", async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ error: "No files were uploaded" });
    }
    console.log(req.files.file);
    // Access the uploaded file information
    const glbFile = req.files.file;

    // Read the file content
    const fileContent = fs.readFileSync(glbFile.tempFilePath);

    // Set the S3 bucket and key
    const bucketName = "ar-view-uploads-private";
    const key = `/${Date.now().toString()}-${glbFile.name}`;
    console.log(bucketName, typeof bucketName, "+++++", key);
    // Create the PutObject command
    const uploadCommand = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: fileContent,
      ContentType: glbFile.mimetype,
      // ContentType: "model/gltf-binary", // Set the appropriate content type for .glb file
      ACL: "private", // Adjust permissions as needed
    });

    // Upload the file to S3
    await s3Client.send(uploadCommand);

    const url = await getSignedUrl(
      s3Client,
      new GetObjectCommand({
        Bucket: bucketName,
        Key: key,
      })
    );

    console.log(url);
    // Generate a URL for accessing the uploaded file
    const fileUrl = `https://${bucketName}.s3.amazonaws.com/${key}`;
    console.log(fileUrl);

    // Optionally, you can save the fileUrl or perform additional operations with the file

    res.status(200).json({ url });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to upload file" });
  }
});

routerUpload.post("/publicFile", async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ error: "No files were uploaded" });
    }
    console.log(req.files.file);
    // Access the uploaded file information
    const glbFile = req.files.file;

    // Read the file content
    const fileContent = fs.readFileSync(glbFile.tempFilePath);

    // Set the S3 bucket and key
    const bucketName = "mindar-public";
    const key = `/${Date.now().toString()}-${glbFile.name}`;
    console.log(bucketName, typeof bucketName, "+++++", key);
    // Create the PutObject command
    const uploadCommand = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: fileContent,
      ContentType: glbFile.mimetype,
      // ContentType: "model/gltf-binary", // Set the appropriate content type for .glb file
      ACL: "public-read", // Adjust permissions as needed
    });

    // Upload the file to S3
    await s3Client.send(uploadCommand);

    const url = await getSignedUrl(
      s3Client,
      new GetObjectCommand({
        Bucket: bucketName,
        Key: key,
      })
    );

    console.log(url);
    // Generate a URL for accessing the uploaded file
    const fileUrl = `https://${bucketName}.s3.amazonaws.com/${key}`;
    console.log(fileUrl);

    // Optionally, you can save the fileUrl or perform additional operations with the file

    res.status(200).json({ url });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to upload file" });
  }
});

export default routerUpload;
