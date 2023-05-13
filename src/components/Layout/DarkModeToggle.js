import React from "react"

import SunIcon from "./SunIcon"
import MoonIcon from "./MoonIcon"
import DarkModeContext from "./DarkModeContext"

export default function DarkModeToggle() {
  const {isDarkMode, setIsDarkMode} = React.useContext(DarkModeContext)

  return (
    <div className="relative">
      <div className="absolute lg:right-28 right-44 pr-8">
        <div className="fixed top-6 flex backdrop-blur-md backdrop-opacity-60 rounded-full p-4">
          <div className="flex items-center justify-center mr-3">
            <SunIcon className="cursor-pointer w-7 h-7 dark:text-white text-gray-300 fill-current" onClick={() => setIsDarkMode(false)} />
          </div>
          <div className="flex items-center justify-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input checked={isDarkMode} type="checkbox" className="sr-only peer" />
              <div onClick={() => setIsDarkMode(!isDarkMode)} className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-center ml-3">
            <MoonIcon className="cursor-pointer w-7 h-7 dark:text-white text-gray-300 fill-current" onClick={() => setIsDarkMode(true)} />
          </div>
        </div>
      </div>
    </div>
  )
}
