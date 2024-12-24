import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react";


const Header = () => {
  const isDarkMode = JSON.parse(localStorage.getItem("darkmode")) || false;
  const [darkMode, setDarkMode] = useState(Boolean(isDarkMode));
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkmode", JSON.stringify(darkMode));
  }, [darkMode]);
  return (
    <header className="dark:bg-black/50 dark:text-white bg-white/50
 flex px-20 py-3 sticky top-0 items-center justify-between rounded-b-xl">
      <div className="flex items-center justify-between gap-20">
        <button className="h-30 w-20 rounded-xl overflow-hidden">
          <a href="/"><img src="\Images\just.png"  alt="logo" /></a>
        </button>
        <nav>
          <ul className="flex gap-5">
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </nav>
        <button className="" onClick={()=> {setDarkMode(!darkMode)}}>
          {
            darkMode ? <Moon /> : <Sun />
          }
        
        </button>
      </div>
      <div className="flex gap-6 items-center">
        <button className="bg-black text-white px-9 py-3 rounded-lg hover:font-semibold hover:bg-black/50"><a href="/Login">Login</a></button>
        <button className="bg-black text-white px-9 py-3 rounded-lg hover:font-semibold hover:bg-black/50"><a href="/signup">Sign up</a></button>
      </div>
    </header>
  )
}

export default Header
