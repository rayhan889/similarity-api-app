import { type ZodIssue } from "zod";
import { ApiKey } from "@prisma/client";

export interface CreateApiKey {
    error: string | ZodIssue[] | null
    apiKey: ApiKey | null
}

export interface RevokeApiKey {
    error: string | ZodIssue[] | null
    isSuccess: boolean
}