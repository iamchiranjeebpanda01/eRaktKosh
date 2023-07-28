import BloodBank from "../models/BloodBank"

const postUpdatedBloodGroupStock = (req: any, res: any) => {
    BloodBank.findOne({_id: req.body._id})
    .then((bloodBank) => {
        bloodBank?.BloodGroups
    })
}