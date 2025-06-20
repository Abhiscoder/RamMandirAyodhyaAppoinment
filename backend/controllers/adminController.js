import validator from "validator"
import bcrypt from 'bcrypt'
import { v2 as cloudinary } from "cloudinary"
import serviceModel from "../models/serviceModel.js"
import jwt from 'jsonwebtoken'


const addService = async (req, res) => {
    try {

        const { name, email, password, speciality, experience, about, fees, address } = req.body
        const imageFile = req.file


        if (!name || !email || !password || !speciality || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: "Missing Details" })
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
        const imageUrl = imageUpload.secure_url

        const serviceData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }

        const newService = new serviceModel(serviceData)
        await newService.save()

        res.json({success:true,message:"Service Added"})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//api for the admin login

const loginAdmin = async (req,res) => {
    try {

        const {email,password} = req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){

            const token = jwt.sign(email+password, process.env.JWT_SECRET )
            res.json({success:true,token})

        } else{
            res.json({success:false,message:"Invalid credentials"})
        }
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

//API to get all service list for admin panel
const allServices = async (req ,res)=> {
    try {
        const services = await serviceModel.find({}).select('-password')
        res.json({success:true,services})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}


export { addService , loginAdmin, allServices }