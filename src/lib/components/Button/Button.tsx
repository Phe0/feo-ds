import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: 'primary' | 'secondary'
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ theme: { colors }, mode }) =>
    mode === 'secondary' ? colors.secondary.medium : colors.primary.medium};
  font-family: 'Noto Sans KR', sans-serif;
  padding: 8px 16px;
  border-radius: 8px;
  border-style: solid;
  border-color: ${({ theme: { colors } }) => colors.neutral.veryDark};
  border-width: 2px 2px 4px 2px;
  font-weight: bold;
  font-size: 16px;
  color: ${({ theme: { colors } }) => colors.neutral.veryDark};

  &:hover {
    background-color: ${({ theme: { colors }, mode }) =>
      mode === 'secondary' ? colors.secondary.light : colors.primary.light};
  }

  &:focus-visible {
    transform: scale(1.06);
    outline: none;
  }

  &:enabled:active {
    border-width: 2px;
    transform: translate(0px, 1px);
  }

  &:disabled {
    border-width: 2px;
    background-color: ${({ theme: { colors } }) => colors.neutral.dark};
    color: ${({ theme: { colors } }) => colors.neutral.medium};
  }
`

export default Button
