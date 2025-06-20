import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    speciality: { type: String, required: true },
    phone: { type: String, maxlength: 10},
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, metadata: { placeholder: "INR" }, required: true },
    address: { type: Object, required: true },
    date: { type: Number, required: true },
    slots_booked: { type: Object, default: {} },
}, { minimize: false })

const serviceModel = mongoose.models.service || mongoose.model('service', ServiceSchema)

export default serviceModel



