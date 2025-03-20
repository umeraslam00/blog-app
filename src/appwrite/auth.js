import { Account, Client, ID } from "appwrite";
import config from "../config/config";

const client = new Client()
    .setProject(config.appwriteProjectID)
    .setEndpoint(config.appwriteURL)


const account = new Account(client);

export const auth = {
    signup: async (email, password) => {
        return await account.create(ID.unique(), email, password)
    },

    login: async (email, password) => {
        return await account.createEmailPasswordSession(email, password);
    },

    logout: async () => {
        return await account.deleteSession('current');
    },

    getUser: async () => {
        try {
            return await account.get();
        } catch {
            return null;
        }
    }
}