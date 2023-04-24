import { FC, FormEvent } from 'react'
import { useState } from 'react'
import { toast } from './ui/Toast';

const ApiRequest:FC = ({}) => {
    const [isCreating, setIsCreating] = useState<boolean>(false);
    const [apiStr, setApiStr] = useState<string | null>(null);

    const createNewApiKey = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsCreating(true);
        try {
            const generatedApiStr = await createApiKey();
            setApiStr(generatedApiStr);
        } catch (error) {
            if(error instanceof Error){
                toast({
                    title: 'Error',
                    message: error.message,
                    type: 'error'
                })

                return
            }

            toast({
                title: 'Error',
                message: 'Something went wrong',
                type: 'error'
            })
        } finally {
            setIsCreating(false);
        }
    }

  return <div>ApiRequest</div>
}

export default ApiRequest