import bcryptjs from "bcryptjs";
const saltRounds = 10;

export const createPasswordHash = (password:string) => {
    return bcryptjs.hashSync(password,saltRounds);
}

export const comparePasswordHash = (password:string, passwordHash:string) => {
    return bcryptjs.compareSync(password, passwordHash)
}