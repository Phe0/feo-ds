import { DefaultTheme } from './Default'

export const DarkTheme = {
  colors: {
    background: DefaultTheme.colors.neutral.dark,
    font: DefaultTheme.colors.neutral.light,
    primary: DefaultTheme.colors.main.purple,
    secondary: DefaultTheme.colors.main.pink,
    ...DefaultTheme.colors,
  },
}
