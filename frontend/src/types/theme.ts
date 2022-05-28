export interface RootFonts {
  fontCatagory: Fonts
  fontSizes: number[]
  fontWeights: FontWeights
  lineHeights: LineHeights
}

export interface Fonts {
  sans: string
  serif: string
  monospace: string
}

export interface FontWeights {
  light: number
  normal: number
  medium: number
  bold: number
}

export interface LineHeights {
  body: number
  heading: number
}

export interface Colors {
    primary: string
    secondary: string
    success: string
    danger: string
    warning: string
    info: string
    background: string
    text: string
    textSecondary: string
}

export interface Borders {
  primary: string
  secondary: string
}

export interface CoreTheme {
  fonts: RootFonts
  shadows: Shadows
  colors: Colors
  borders: Borders
  breakpoints: Breakpoints
  space: number[]
}

export interface Breakpoints {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}


export interface Shadows {
  small: string
  large: string
}

export interface ElementTheme {
  [key: string]: any,
}

export interface Theme {
  element: ElementTheme
  core: CoreTheme
}