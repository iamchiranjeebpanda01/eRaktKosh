import District from "../models/District";

const postDistrict = (req: any, res: any) => {
    const newDistrict = new District({name: req.body.name});
    newDistrict.save();
    res.statusCode(201).json({message: "Created Successfully!"});
}

export default postDistrict;