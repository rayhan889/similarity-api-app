import { ButtonHTMLAttributes, FC } from 'react'
import Button from '@/ui/Button'

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string;
}

const CopyButton: FC<CopyButtonProps> = ({
    valueToCopy,
    className,
    ...props
}) => {
  return <Button {...props} onClick={() => navigator.clipboard.writeText(valueToCopy)} />
}

export default CopyButton