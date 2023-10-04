import React from 'react'
import { GlobalStyles, LightTheme } from '../src/lib/styles'
import { ThemeProvider } from 'styled-components'

export const withTheme = (storyFn) => {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyles />
      {storyFn()}
    </ThemeProvider>
  )
}
