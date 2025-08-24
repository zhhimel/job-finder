import { response } from "express";
import prisma from "../config/prisma";
import { comparePassword, generateToken, hashPassword } from "../utils/auth.utils";
export class UserService {
    async register(email: string, password: string, role: string) {
        try {
            
            const hashed = await hashPassword(password);
            console.log(email);
            return prisma.user.create({
                data: { email, password: hashed, role: role || "user" },
            });
        }
        catch(err){
            response.status(404).json({});
        }
        
    }
    async login(email: string, password: string) {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            throw new Error("Invalid credentials");
        }
        const isValid: Boolean = await comparePassword(password, user.password);
        if (!isValid) {
            throw new Error("Invalid credentials");
        }
        const token = generateToken({ id: user.id, role: user.role, email: user.email });
        return { email:user.email, token };
    }
}