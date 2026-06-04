
export const handleIncomingBody = async (req, res) => {
    return new Promise((resolve, reject)=>{
        const { method } = req;
        if(method === "GET" || method === "DELETE"){
            req.body = {}
            return resolve({})
        }
        let body = ""
        req.on("data", (chunk)=>{
            body+=chunk.toString()
        })

        req.on("end", ()=>{
            body = JSON.parse(body)
            req.body = body
            resolve(body)
            return
        })

        req.on("error", ()=>{
            reject(error)
        })
    })
}