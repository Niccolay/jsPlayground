import { Dispatch, SetStateAction } from "react"
import { ArrObj } from "./App"

export type Timer = number | null

export type IsLang = boolean
export type SetLang = Dispatch<SetStateAction<string>>

export interface setVal {
    setCode: Dispatch<SetStateAction<Array<ArrObj>>>
    lang: string
}

export interface Lang {
    lang: string
    setLang: Dispatch<SetStateAction<string>>
}