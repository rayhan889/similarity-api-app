import { ButtonHTMLAttributes, FC } from 'react'
import Button from '@/ui/Button'
import { toast } from './ui/Toast'

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

  return <Button {...props} onClick={() => onCopyVal(valueToCopy)} />
}

export default CopyButton