import { CreateApiKey } from "../types/api-type";

export const createApiKey = async () => {
    const response = await fetch('/api/api-key/create');
    const data = (await response.json()) as CreateApiKey;

    if(data.error || !data.apiKey){
        if(data.error instanceof Array){
            throw new Error(data.error.join(' '))
        }

        throw new Error(data.error ?? 'Something went wrong');
    }

    return data.apiKey.key;
}