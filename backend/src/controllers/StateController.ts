import State from "../models/State";

const postState = (req: any, res:any): void => {
    const newState = new State({name: req.body.name});
    newState.save();
    res.statusCode(201).json({message: "Created Successfully"});
};

export default postState;