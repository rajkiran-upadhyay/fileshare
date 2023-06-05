import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'

import router from './routes/routes.js';
import DBConnection from './database/db.js';
dotenv.config()
const app=express();//create a server
app.use(cors());//enable before routing

app.use('/',router)//traffic will be routed to router
// const PORT=8000;
const PORT=process.env.PORT||8000;


DBConnection();

app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)});
