import React from 'react'
/* eslint-disable react-refresh/only-export-components */
import { ThemeProvider } from 'styled-components'
import { RenderOptions, render } from '@testing-library/react'
import { LightTheme } from './lib/styles/themes'
import { ReactElement, ReactNode } from 'react'

export function AllProviders({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>
}

function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(ui, { wrapper: AllProviders, ...options })
}

export * from '@testing-library/react'
export { customRender as render }
