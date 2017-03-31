 const env = process.env

 export const nodeEnv = env.NODE_ENV || 'development'

 export default {
   mongodbUri: env.MONGODB_URI,
   port: env.PORT || 8080,
   host: env.HOST || "localhost",
   get serverUrl( ) {
     return `http://${this.host}:${this.port}`
   }
 }
