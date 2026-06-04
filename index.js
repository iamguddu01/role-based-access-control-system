import http from "http"
import { configDotenv } from "dotenv"
import { handleIncomingBody } from "./src/helper/index.js";
import { initializeDB } from "./src/config/index.js";
import { handleRoleRoutes } from "./src/routes/role.route.js";
configDotenv()
initializeDB()
const server = http.createServer(async (req, res) => {
    res.setHeader("Content-Type", "application/json")
    await handleIncomingBody(req, res)
    handleRoleRoutes(req, res)
})

server.listen(process.env.PORT, ()=>{
    console.log("Server running on http://localhost:4000/");
})