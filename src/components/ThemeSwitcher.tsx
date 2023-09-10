'use client'

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

import SunIcon from '@/components/ui/icons/Icon_Sun';
import MoonIcon from '@/components/ui/icons/Icon_Moon';



export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <div>      
      <Button isIconOnly color="warning" variant="faded" aria-label="Take a photo" onClick={toggleTheme}>
        {theme === 'light' ? 
        <SunIcon /> 
        : 
        <MoonIcon />}
      </Button>
    </div>
  )
};
