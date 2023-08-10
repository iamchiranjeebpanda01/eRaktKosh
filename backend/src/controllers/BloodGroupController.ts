import BloodGroup from "../models/BloodGroup";

const postBloodGroup = (req:any, res:any) => {
    const newBloodGp = new BloodGroup({name: req.body.name});
    newBloodGp.save();

    res.send(201).json({message: "Created Successfully!"});
}

export default postBloodGroup;