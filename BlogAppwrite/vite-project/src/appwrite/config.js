import conf from "../conf/conf.js";
import { Client, Databases, Storage, ID, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createpost({ title, slug, content, featuredimage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.error("Service :: createpost :: error", error);
            throw error;
        }
    }

    async updatepost(slug, { title, content, featuredimage, status, userId }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.error("Service :: updatepost :: error", error);
            throw error;
        }
    }

    async deletepost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.error("Service :: deletepost :: error", error);
            throw error;
        }
    }

    async getpost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.error("Service :: getpost :: error", error);
            throw error;
        }
    }

    async getposts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.error("Service :: getposts :: error", error);
            throw error;
        }
    }

    async uploadfile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.error("Service :: uploadfile :: error", error);
            throw error;
        }
    }

    async deletefile(fileid) {
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId, fileid);
            return true;
        } catch (error) {
            console.error("Service :: deletefile :: error", error);
            throw error;
        }
    }

    getfilePreview(fileid) {
        try {
            return this.bucket.getFilePreview(conf.appwriteBucketId, fileid);
        } catch (error) {
            console.error("Service :: getfilePreview :: error", error);
            throw error;
        }
    }
}

const service = new Service();
export default service;
