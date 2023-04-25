import { CreateApiKey } from "../types/api-type";

export const createApiKey = async () => {
    const response = await fetch('/api/api-key/create');
    const data = (await response.json()) as CreateApiKey
}