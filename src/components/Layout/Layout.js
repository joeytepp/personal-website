
import React, { useState, useEffect, useRef } from "react"
import classNames from "classnames"

import DarkModeContext from "./DarkModeContext"
import Footer from "./Footer"
import DarkModeToggle from "./DarkModeToggle"

const DARK_MODE_LOCAL_STORAGE_KEY = "joeytepp-darkmode"

const getDarkModeFromBrowser = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const Layout = ({ children }) => {
  if (typeof window === "undefined") {
    return null
  }

  const savedDarkMode = localStorage.getItem(DARK_MODE_LOCAL_STORAGE_KEY)
  const darkModeDefault = savedDarkMode ? savedDarkMode === "true" : getDarkModeFromBrowser()
  const ref = useRef(null)
  const [isDarkMode, setIsDarkMode] = useState(darkModeDefault)

  useEffect(() => {
    document.body.classList.toggle("bg-black", isDarkMode)
    ref.current.classList.toggle("dark", isDarkMode)
    localStorage.setItem(DARK_MODE_LOCAL_STORAGE_KEY, isDarkMode)
  }, [isDarkMode])

  return (
    <>
      <DarkModeContext.Provider value={{isDarkMode, setIsDarkMode}}>
        <div ref={ref} className={classNames("w-full h-full", { dark: darkModeDefault })}>
          <div className="w-full h-full bg-white text-black dark:bg-black dark:text-white">
            <div className="container mx-auto">
              <main>{children}</main>
              <Footer />
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </DarkModeContext.Provider>
    </>
  )
}

export default Layout
