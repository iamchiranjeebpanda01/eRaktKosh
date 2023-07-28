import jwt from "jsonwebtoken";
const secretKey = "eRaktKosh-secret-key";

//* Middleware to protect routes
const authenticateToken = (req: any, res: any, next: any) => {
    const token = req.header("Authorization");

    if(!token){
        return res.status(401).json({message: "No token provided."});
    }

    jwt.verify(token, secretKey, (err: any, user: any) => {
        if(err){
            return res.status(403).json({message:"Invalid token."});
        }
        
        req.user = user;
        next();
    })
}

export default authenticateToken;