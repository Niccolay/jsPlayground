import { Dispatch, SetStateAction } from "react"

export type Timer = number | null

export interface setVal {
    setCode: Dispatch<SetStateAction<string>>
}

export interface setTrone {
    tron: boolean
    setTron: Dispatch<SetStateAction<boolean>>
}