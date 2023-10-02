import { styled } from 'styled-components'
import { ButtonProps } from './Button.types'

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme: { colors }, mode }) =>
    mode === 'primary' ? colors.primary.medium : colors.secondary.medium};
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
      mode === 'primary' ? colors.primary.light : colors.secondary.light};
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

export default StyledButton
