import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfully
        console.log("File is uploaded on cloudinary!", response.url);
        fs.unlinkSync(localFilePath);
        return response
    } catch (error) {
        // to remove half-uploaded files or like any corrupted files or files which can't be read from the server
        fs.unlinkSync(localFilePath) // also to remove locally saved temp files
        return null;
    }
}

export {uploadOnCloudinary};

// this file is really reusable