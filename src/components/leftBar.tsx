//import { IconContext } from "react-icons";
//import { CiPlay1 } from "react-icons/ci";
//import { FaRegWindowMaximize } from "react-icons/fa";
import { Lang } from "../type";
import { LangMenu } from "./langModal";
import { useState, useRef, useEffect } from "react";


export const LeftBar = ({setLang, lang}: Lang) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null)

    const clickOutside = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
            setIsOpen(false)
        }
    }   
    useEffect(() => {
        document.addEventListener('click', clickOutside)
        return () => document.removeEventListener('click', clickOutside)
    })

    return (
        <>
            <div className="w-[35px] h-[100%] flex bg-[#1e2030] min-w-[35px] absolute top-0 z-[11]">
                <div className=" w-full mt-[42px]  flex flex-col">
                    <div className="py-[15px] hover:bg-[#2e324e] flex justify-center">
                        <img src="/icons/stop.svg" alt="" />
                    </div>
                    <div className="py-[15px] hover:bg-[#2e324e] flex justify-center">
                        
                        <img src="/icons/play.svg" alt="" />
                    </div>
                    <div ref={menuRef}>
                        <div className="py-[15px] hover:bg-[#2e324e] flex justify-center" onClick={() => setIsOpen(prev => !prev)}>
                            <img src={`/icons/${lang}.svg`} />
                        </div>
                    </div>
                        <LangMenu  isOpen = {isOpen} setIsOpen={setIsOpen} setLang = {setLang}/>
                </div>
            </div>
        </>
    )
}