import { useContext } from 'react'
import React from 'react'
import deepmerge from 'deepmerge'

const createColorScheme = theme => {
  const defaultColorScheme = {
    colors: {
      primary: 'green'
    }
  }

  const ColorSchemeContext = React.createContext(theme)
  const ColorSchemeProvider = ColorSchemeContext.Provider
  const ColorSchemeConsumer = ColorSchemeContext.Consumer

  const useTheme = localTheme => {
    return deepmerge.all([
      defaultColorScheme,
      Object.assign({}, theme),
      Object.assign({}, localTheme)
    ])
  }

  return {
    ColorSchemeContext,
    ColorSchemeProvider,
    ColorSchemeConsumer,
    useTheme
  }
}

export default createColorScheme
