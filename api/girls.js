/**
 * REST API endpoint:
 * /api/girls
 * 
 * 
 *  
 */
export default async function handler(req, res) {
    console.log("Someone called /api/girls endpoint :) ")

    switch (req.method) {
        case "GET":
            return res.status(200).json("OK")
            
    
        default:
            return res.status(405).json({error: "Method Not Allowed"})
    }

    
}