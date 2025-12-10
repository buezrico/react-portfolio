'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  variant?: 'header' | 'nav'
  className?: string
}

export function ThemeToggle({ variant = 'header', className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()

  const cycleTheme = () => {
    // Toggle between light and dark
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }

  const getIcon = () => {
    return resolvedTheme === 'light'
      ? <Sun className="h-5 w-5 transition-transform duration-500 rotate-0" />
      : <Moon className="h-5 w-5 transition-transform duration-500 rotate-0" />
  }

  const getLabel = () => {
    return resolvedTheme === 'light'
      ? 'Switch to dark mode'
      : 'Switch to light mode'
  }

  if (variant === 'nav') {
    return (
      <button
        onClick={cycleTheme}
        aria-label={getLabel()}
        className={cn(
          'p-3 rounded-full transition-all duration-300',
          'text-primary',
          'hover:bg-primary/20',
          className
        )}
      >
        {getIcon()}
      </button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      aria-label={getLabel()}
      className={cn(
        'transition-all duration-300 hover:bg-primary/10',
        className
      )}
    >
      {getIcon()}
    </Button>
  )
}
