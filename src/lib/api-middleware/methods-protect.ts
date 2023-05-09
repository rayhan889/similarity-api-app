import { NextApiRequest, NextApiHandler, NextApiResponse } from "next";

export function methodsProtect (
    methods: string[],
    handler: NextApiHandler
){
    return function (req: NextApiRequest, res: NextApiResponse) {
        if(!req.method || !methods.includes(req.method)){
            res.status(405).end();
        }

        return handler(req, res);
    }
}