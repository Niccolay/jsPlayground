import { createContext } from "react";

interface GlobalContextType {
    codex: string
    setCodex: (value: string) => void
}

export const GlobalContext = createContext<GlobalContextType | null>(null)