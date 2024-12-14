import { IconContext } from "react-icons";
import { CiStop1 } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
import { IoLogoElectron } from "react-icons/io5";
import { FaRegWindowMaximize } from "react-icons/fa";
import { setTrone } from "../type";
import {  useEffect } from "react";


export const LeftBar = ({setTron, tron}: setTrone) => {
    
    useEffect(() => {
        const handleKey = (event: KeyboardEvent) => {
            //event.preventDefault()
            if (event.key === 'F9') {
                setTron(prev => !prev)
            }
        }
        window.addEventListener('keydown', handleKey)
        return () => {
            window.removeEventListener('keydown', handleKey)
        }
    }, [setTron])

    return (
        <>
            <div className="w-[35px] h-[100%] flex bg-[#1e2030] min-w-[35px] absolute top-0 z-0">
                <div className=" w-full mt-[42px]  flex flex-col">
                    <div className="py-[15px] hover:bg-[#2e324e] flex justify-center">
                        <IconContext.Provider value={{color: '#b4c2f0', size: '20px'}}>
                            <CiStop1 />
                        </IconContext.Provider>
                    </div>
                    <div className="py-[15px] hover:bg-[#2e324e] flex justify-center">
                        <IconContext.Provider value={{color: '#b4c2f0', size: '20px'}}>
                            <CiPlay1 />
                        </IconContext.Provider>
                    </div>
                    <div className="py-[15px] hover:bg-[#2e324e] flex justify-center" onClick={() => setTron(!tron)}>
                        <IconContext.Provider value={{color: '#b4c2f0', size: '20px'}}>
                            {tron ? <IoLogoElectron /> : <FaRegWindowMaximize />}
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </>
    )
}