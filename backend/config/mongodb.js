import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected',()=> console.log("Database connected"))

    await mongoose.connect(`${process.env.MONGODB_URI}/RamMandirAyodhya`)   //creating database in mongodb atlas /Ram Mandir Ayodhya
    .then(()=> console.log("MongoDB connected"))
}

export default connectDB