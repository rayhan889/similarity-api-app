import { ButtonHTMLAttributes, FC } from 'react'
import Button from '@/ui/Button'
import { toast } from './ui/Toast'
import { cn } from '../lib/utils'
import { Copy } from 'lucide-react'

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string;
}

const CopyButton: FC<CopyButtonProps> = ({
    valueToCopy,
    className,
    ...props
}) => {
  const onCopyVal = (value: string) => {
      navigator.clipboard.writeText(value);

      toast({
          title: 'Copied!',
          message: 'API key copid to your clipboard!',
          type: 'success'
      })
  }

  return (
    <Button
        {...props} 
        onClick={() => onCopyVal(valueToCopy)} 
        variant='ghost' 
        className={className} 
    >
        <Copy className='h-5 w-5' />
    </Button>
  )
}

export default CopyButton