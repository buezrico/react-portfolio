'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext } from '@/contexts/ThemeContext'
import type { Theme, ResolvedTheme } from '@/types/theme'

const STORAGE_KEY = 'portfolio-theme'

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  // Get the resolved theme (actual light or dark, not system)
  const getResolvedTheme = (themeValue: Theme): ResolvedTheme => {
    if (themeValue === 'system') {
      return 'dark' // Default to dark regardless of system preference
    }
    return themeValue
  }

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => getResolvedTheme(theme))

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null
    if (storedTheme && ['light', 'dark', 'system'].includes(storedTheme)) {
      setThemeState(storedTheme)
    } else {
      setThemeState('dark')
    }
    setMounted(true)
  }, [])

  // Apply theme to html element and update resolvedTheme
  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    const resolved = getResolvedTheme(theme)
    setResolvedTheme(resolved)

    // Remove existing theme classes
    root.classList.remove('light', 'dark')

    // Add the resolved theme class
    root.classList.add(resolved)

    // Store theme preference
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme, mounted])


  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  // Always provide context, but only apply theme changes when mounted
  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
