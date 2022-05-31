import {query} from "../../utils/db";
import { create_token } from "../../utils/helper";

export default async function handler(req, res) {

    // const {username,password} =  req.body;
    const results = await query({queries:"SELECT * FROM users"});



    return res.status(200).json(results);
}