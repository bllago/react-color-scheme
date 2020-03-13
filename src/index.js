import { useContext } from 'react'
import React from 'react'
import deepmerge from 'deepmerge'
import defaultColorScheme from './defaultColorScheme'

export const ColorSchemeContext = React.createContext()
export const ColorSchemeProvider = ColorSchemeContext.Provider
export const ColorSchemeConsumer = ColorSchemeContext.Consumer
export const useTheme = () =>
  deepmerge(defaultColorScheme, useContext(ColorSchemeContext))
