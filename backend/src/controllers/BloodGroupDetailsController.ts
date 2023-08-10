import BloodGroupDetails from "../models/BloodGroupDetails";

const postBloodGroupDetails = (req: any, res: any) => {
    const bloodGpDetails = new BloodGroupDetails(req.body);
    bloodGpDetails.save();

    res.send(201).json({message: "Created Successfully!"});
}

export default postBloodGroupDetails;