import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import serviceRouter from './routes/serviceRouter.js'
import userRouter from './routes/userRoutes.js'



//app config
const app = express()
const port = process.env.PORT || 4000
connectDB() 
connectCloudinary()


//middlewares
app.use(express.json())
app.use(cors())            //allow to connect backend with frontend

// api endpoints
app.use('/api/admin',adminRouter)
app.use('/api/services',serviceRouter)
app.use('/api/user', userRouter)


app.get('/',(req,res)=>{
    res.send('API WORKING great')
})


app.listen(port, ()=> console.log("Server Started",port))                //START EXPRESS APP