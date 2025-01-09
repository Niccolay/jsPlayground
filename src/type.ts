import { Dispatch, SetStateAction } from "react"

export type Timer = number | null

export type IsLang = boolean
export type SetLang = Dispatch<SetStateAction<string>>

export interface setVal {
    setCode: Dispatch<SetStateAction<Array<object>>>
    lang: string
}

export interface Lang {
    lang: string
    setLang: Dispatch<SetStateAction<string>>
}