import { Client, Databases, ID, Query } from "appwrite";
import config from "../config/config";


const client = new Client()
    .setEndpoint(config.appwriteURL)
    .setProject(config.appwriteURL);

const databases = new Databases(client);

export const posts = {
    createPost: async ({ title, slug, content, featuredImage, status, userId }) => {
        try {
            return await databases.createDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.error("Error creating post:", error)
            return null
        }
    },

    getPosts: async (queries = [Query.equal("status", "active")]) => {
        try {
            return await databases.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                queries
            )
        } catch (error) {
            console.error("Error getting posts:", error)
            return null

        }
    },

    getPost: async (slug) => {
        try {
            return await databases.getDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            )
        } catch (error) {
            console.error("Error getting post:", error)
            return null
    }

},

    updatePost: async (slug, { title, content, featuredImage, status }) => {
        try {
            return await databases.updateDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }

            )
        } catch (error) {
            console.error("Error updating post:", error)
            return null
        }
    },

        deletePost: async (slug) => {
            try {
                return await databases.deleteDocument(
                    config.appwriteDatabaseID,
                    config.appwriteCollectionID,
                    slug
                )
            } catch (error) {

            }
        }
}