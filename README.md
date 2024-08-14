## Instructions
1. Configure the environment
  ```
  git init
  npm init
  ```
2. Install all dependencies
  ```
  npm install
  ```
3. Configure the .env environment
  ```
  PORT=3000
  MONGODB_URL=PUT_SECRET_URL_HERE_FROM_MONGODB_CLUSTER
  MONGODB_URL_LOCAL=mongodb://localhost:27017/productsdb
  ```
4. Ensure MongoDB is running locally or on cluster
  If you have MongoDB installed then you can run it from the command line itself
  ```
  mongod
  ```
5. Run the server
  ```
  node server.js
  ```

> Note : Tools like Postman can be used to implement GET, POST, PUT and DELETE. Further, tools like MongoDB Compass can be used instead of the command line
