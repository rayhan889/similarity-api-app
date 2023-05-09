import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { CreateApiKey } from "../../../types/api-type";
import { db } from "@/lib/db";
import { nanoid } from "nanoid";
import { z } from "zod";
import { methodsProtect } from "@/lib/api-middleware/methods-protect";

const handler = async (
    req : NextApiRequest,
    res: NextApiResponse<CreateApiKey>
) => {
    try {
        const user = await getServerSession(req, res, authOptions).then((res) => res?.user);

        if(!user){
            return res.status(400).json({
                error: 'Unaothorized',
                apiKey: null
            })
        }

        const apiStillExist = await db.apiKey.findFirst({
            where: { userId: user?.id }
        });

        if(apiStillExist){
            return res.status(400).json({
                error: 'You already have valid api key',
                apiKey: null
            })
        }

        const newApiKey = await db.apiKey.create({
            data : {
                userId: user?.id,
                key: nanoid()
            }
        })

        return res.status(200).json({error: null, apiKey: newApiKey})
    } catch (error) {
        if(error instanceof z.ZodError){
            res.status(400).json({
                error: error.issues,
                apiKey: null
            })
        }
    }
}

export default methodsProtect(['POST'], handler);