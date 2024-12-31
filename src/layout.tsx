import { useState, ReactNode } from 'react'
import { GlobalContext } from './hooks/globalContext'

export const Layout = ({ children }: { children: ReactNode }) => {
    const [codex, setCodex] = useState<string>('')

    const value = { codex, setCodex }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}
