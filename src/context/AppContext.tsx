import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { Lang } from '../i18n/translations'

interface AppContextType {
  lang: Lang
  setLang: (l: Lang) => void
  dark: boolean
  toggleDark: () => void
}

const AppContext = createContext<AppContextType>({
  lang: 'pt',
  setLang: () => {},
  dark: false,
  toggleDark: () => {},
})

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem('lang') as Lang) ?? 'pt'
  })
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('dark') === 'true'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('dark', String(dark))
  }, [dark])

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const toggleDark = () => setDark((d) => !d)

  return (
    <AppContext.Provider value={{ lang, setLang, dark, toggleDark }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}

export function useT() {
  const { lang } = useApp()
  return function t(obj: { pt: string; en: string }): string {
    return obj[lang]
  }
}
