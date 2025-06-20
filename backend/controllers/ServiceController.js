import serviceModel from "../models/serviceModel.js"


const changeAvailability = async (req, res) => {
    try {

        const { docId } = req.body

        const docData = await serviceModel.findById(docId)
        await serviceModel.findByIdAndUpdate(docId, { available: !docData.available })
        res.json({ success: true, message: 'Availablity Changed' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const serviceList = async (req,res) => {
    try {

        const service = await serviceModel.find({}).select(['-password', '-email'])

        res.json({ success: true, service })


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export { changeAvailability, serviceList }
