import {query} from "../../../utils/db";

export default async function handler(req, res) {
    
    let sql = `SELECT * FROM products where slug='${req.query.slug}'`; 
    const results = await query({queries: sql});
    return res.status(200).json(results[0]);
    // return res.status(200).json(false);
}