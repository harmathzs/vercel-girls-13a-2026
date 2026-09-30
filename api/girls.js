/**
 * REST API endpoint:
 * /api/girls
 * 
 * 
 *  
 */
export default async function handler(req, res) {
    console.log("Someone called /api/girls endpoint :) ")
    return res.status(200).json("OK")
}