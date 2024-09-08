import conf from "../conf/conf";
import { Client, Databases,Storage, ID, Query } from "appwrite";

export class Service{
     client=new Client();
     databases;
     bucket;

     constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId)
        this.databases=new Databases(this.client)
        this.bucket=new Storage(this.client)
     }
    async createpost({title,slug,content,featuredImage,status,userId}){
       try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId,

            }
        )
       } catch (error) {
         throw error
       }
    }

    async updatepost(slug,{title,content,featuredImage,status,userId}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                conf.appwriteCollectionId,
                slug,{
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
            
        } catch (error) {
            console.log("error")
        }
    }

    async deletepost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log("delete :", error)
        }
    }
    async getpost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
               conf.appwriteCollectionId,
               slug
            )
            
        } catch (error) {
           console.log("getpost error",error) 
        }
    }
   /// using queries to get post for active status only
    async getposts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("appwrite services::getposts:: errors",error)
        }

    }

   //upload and delete file service

   async uploadfile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique,
            file
        )
    } catch (error) {
        console.log("appwrite services::upload:: errors",error)
        return false;
    }
   }

   async deletefile(fileid){
    try {
        await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileid
        )
        return true;
    } catch (error) {
        console.log("appwrite services::delete:: errors",error)
        return false;
    }
   }

   getfilePreview(fileid){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileid
    )
   }
}
const service=new Service()
export default service