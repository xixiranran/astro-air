import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const updateTheme = () => {
    const isDark = document.documentElement.classList.contains("dark")
    localStorage.setItem("theme", isDark ? "dark" : "light")
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "material-theme-darker" : "material-theme-lighter",
    )
  }

  const handleToggleClick = () => {
    const element = document.documentElement

    // if not supported, just toggle the theme
    if (!document.startViewTransition) {
      element.classList.toggle("dark")
      updateTheme()
      return
    }

    document.startViewTransition(() => {
      element.classList.toggle("dark")
      updateTheme()
    })
  }

  return (
    <button
      onClick={handleToggleClick}
      aria-label="Toggle theme"
      title="Toggle theme"
      className="cursor-pointer"
    >
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
    </button>
  )
}
