import { ReactNode } from 'react'

import { ThemeProvider as ThemeProviderStyled } from 'styled-components'

import { GlobalStyle } from './global'
import light from './theme/light'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeProviderStyled theme={light}>
      <GlobalStyle />
      {children}
    </ThemeProviderStyled>
  )
}
