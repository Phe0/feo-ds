import { ButtonProps } from './Button.types'
import StyledButton from './Button.style'

export default function Button({
  mode = 'primary',
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton mode={mode} {...props}>
      {children}
    </StyledButton>
  )
}
