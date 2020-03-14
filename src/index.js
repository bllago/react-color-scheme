import { useContext } from 'react'
import React from 'react'
import deepmerge from 'deepmerge'

const defaultColorScheme = {
  colors: {
    primary: 'green'
  }
}

export const ColorSchemeContext = React.createContext()
export const ColorSchemeProvider = ColorSchemeContext.Provider
export const ColorSchemeConsumer = ColorSchemeContext.Consumer
export const useTheme = () =>
  deepmerge(defaultColorScheme, useContext(ColorSchemeContext))
