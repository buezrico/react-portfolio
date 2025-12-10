'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext } from '@/contexts/ThemeContext'
import type { Theme, ResolvedTheme } from '@/types/theme'

const STORAGE_KEY = 'portfolio-theme'

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>('system')
  const [mounted, setMounted] = useState(false)

  // Get the resolved theme (actual light or dark, not system)
  const getResolvedTheme = (themeValue: Theme): ResolvedTheme => {
    if (themeValue === 'system') {
      if (typeof window !== 'undefined') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
      return 'dark' // Fallback for SSR
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
      setThemeState('system')
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

  // Listen for system preference changes
  useEffect(() => {
    if (theme !== 'system') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = () => {
      const resolved = getResolvedTheme('system')
      setResolvedTheme(resolved)

      const root = document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(resolved)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

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
