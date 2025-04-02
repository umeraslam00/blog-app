import { Client, Storage, ID } from "appwrite";
import config from "../config/config";

const client = new Client()
    .setEndpoint(config.appwriteURL)
    .setProject(config.appwriteProjectID);

const storage = new Storage(client);

const file = {
    upload: async (file) => {
        try {
            return await storage.createFile(
                config.appwriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.error("Error uploading file:", error)
            return null

        }
    },

    delete: async (fileId) => {
        try {
            return await storage.deleteFile(
                config.appwriteBucketID,
                fileId
            )
        } catch (error) {
            console.error("Error deleting file:", error)
            return null

        }
    },

    getFilePreview: async (fileId) => {
        try {
            return this.bucket.getFilePreview(
                config.appwriteBucketID,
                fileId
            )
        } catch (error) {
            console.error("Error getting file preview:", error)
            return null

        }
    }
}