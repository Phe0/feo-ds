import { DefaultTheme } from './Default'

export const LightTheme = {
  colors: {
    background: DefaultTheme.colors.neutral.light,
    font: DefaultTheme.colors.neutral.veryDark,
    primary: DefaultTheme.colors.main.purple,
    secondary: DefaultTheme.colors.main.pink,
    ...DefaultTheme.colors,
  },
}
