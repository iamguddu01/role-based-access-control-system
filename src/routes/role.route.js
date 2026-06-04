import Url from "url"
import db from "../models/index.js"
const {Role} = db;
export const handleRoleRoutes = async (req, res) => {
    const {method, url, body} = req;
    const {pathname, query} = Url.parse(url, true)

    // Create
    if(method === "POST" && pathname === "/api/role"){
        const {type, permissions = {}} = body;
        if(!type ){
            res.statusCode = 400;
            return res.end(JSON.stringify({
                message : "Role type is required"
            }))
        }

        const role = await Role.create({
            type,
            permissions,
        });

        res.statusCode = 201;
        return res.end(JSON.stringify({
            message : "Role created successfully",
            role
        }))
    }

    // Find all roles
    if(method === "GET" && pathname === "/api/role"){
        const roles = await Role.find();
        res.statusCode = 200
        return res.end(
            JSON.stringify({
                message : "Roles fetched successfully",
                roles
            })
        )
    }

    // Fetch particular role
    if(method === "POST" && pathname === "/api/role-detail"){
        const {id} = body;
        const role = await Role.findById(id)
        res.statusCode = 200
        return res.end(JSON.stringify({
            message : "Data fetched successfully",
            role
        }))
    }
}