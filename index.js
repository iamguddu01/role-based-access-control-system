import http from "http"
import { configDotenv } from "dotenv"
import { handleIncomingBody } from "./src/helper/index.js";
import { initializeDB } from "./src/config/index.js";
configDotenv()
initializeDB()
const server = http.createServer(async (req, res) => {
    res.setHeader("Content-Type", "application/json")
    await handleIncomingBody(req, res)
})

server.listen(process.env.PORT, ()=>{
    console.log("Server running on http://localhost:4000/");
})