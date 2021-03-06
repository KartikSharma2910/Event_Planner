// import * as React from "react"
// import { Appearance } from "react-native"
// import { lightColors, darkColors, Colors } from "../configs/colors"

// export interface Theme {
//   isDark: boolean
//   colors: Colors
//   setScheme: (val: "dark" | "light") => void
// }

// export const ThemeContext = React.createContext<Theme>({
//   isDark: false,
//   colors: lightColors,
//   setScheme: () => {},
// })

// export const ThemeProvider: React.FC<{}> = (props) => {
//   const colorScheme = Appearance.getColorScheme()
//   const [isDark, setIsDark] = React.useState<boolean>(colorScheme === "dark")

//   React.useEffect(() => {
//     setIsDark(colorScheme === "dark")
//   }, [colorScheme])

//   const defaultTheme: Theme = {
//     isDark,
//     colors: isDark ? darkColors : lightColors,
//     setScheme: (scheme) => setIsDark(scheme === "dark"),
//   }

//   return (
//     <ThemeContext.Provider value={defaultTheme}>
//       {props.children}
//     </ThemeContext.Provider>
//   )
// }

// export const useTheme = () => React.useContext(ThemeContext)
