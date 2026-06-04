import Url from "url"
import db from "../models/index.js"
const {Role, User} = db;
export const handleUserRoutes = async (req, res) => {
    const {method, url, body} = req;
    const {pathname, query} = Url.parse(url, true)

    // Create
    if(method === "POST" && pathname === "/api/users"){
        const {email, role} = body;
        if(!email || !role){
            res.statusCode = 400;
            return res.end(JSON.stringify({
                message : "email and role is required"
            }))
        }

        const requiresRole = await Role.findOne({
            type : role,
        })

        if(!requiresRole){
            res.statusCode = 400;
            return res.end(JSON.stringify({
                message : "role does not exist"
            }))
        }

        const user = await User.create({
            email,
            role : requiresRole._id,
        })

        res.statusCode = 201;
        return res.end(JSON.stringify({
            message : "User created successfully",
            user
        }))
    }

    // Find all roles
    if(method === "GET" && pathname === "/api/users"){
        const users = await User.find();
        res.statusCode = 200
        return res.end(
            JSON.stringify({
                message : "users fetched successfully",
                users
            })
        )
    }

    // Fetch particular role
    if(method === "POST" && pathname === "/api/user-detail"){
        const {id} = body;
        const user = await User.findById(id)
        res.statusCode = 200
        return res.end(JSON.stringify({
            message : "user fetched successfully",
            user
        }))
    }
}