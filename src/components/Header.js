import { useEffect, useState } from "react"
import logo from "../assets/logo.png"

import "./Header.css"

export const Header = () => {
  const [theme,setTheme] = useState(JSON.parse(localStorage.getItem("theme")) ||"light")
  document.documentElement.classList.add(theme)

  useEffect(() => {
    localStorage.setItem("theme",JSON.stringify(theme))
    document.documentElement.removeAttribute("class")
    document.documentElement.classList.add(theme)
  },[theme])

  return (
    <header>
        <div className="logo">
           <img src={logo} alt="" id="logo1"/>
           <span>TaskMate</span>
        </div>
        <div className="themeSelector">
            <span onClick={() => setTheme("light")} className={theme === "light" ? "light activeTheme" : "light"}></span>
            <span onClick={() => setTheme("dark")} className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
            <span onClick={() => setTheme("blue")} className={theme === "blue" ? "blue activeTheme" : "blue"}></span>
            <span onClick={() => setTheme("red")} className={theme === "red" ? "light activeTheme" : "red"}></span>
            <span onClick={() => setTheme("bg1")} className={theme === "bg1" ? "bg1 activeTheme" : "bg1"}></span>
            <span onClick={() => setTheme("bg2")} className={theme === "bg2" ? "bg2 activeTheme" : "bg2"}></span>
        </div>
    </header>
  )
}
