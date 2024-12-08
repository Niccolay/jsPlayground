import { IconContext } from "react-icons";
import { CiStop1 } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";

export const LeftBar = () => {
    return (
        <>
            <div className="w-[35px] h-[100%] flex content-start bg-[#1e2030] min-w-[35px] absolute top-0 z-0">
                <div className="mx-auto mt-[50px] gap-6 flex flex-col">
                    <IconContext.Provider value={{color: '#b4c2f0', size: '20px'}}>
                        <CiStop1 />
                    </IconContext.Provider>
                    <IconContext.Provider value={{color: '#b4c2f0', size: '20px'}}>
                        <CiPlay1 />
                    </IconContext.Provider>
                </div>
            </div>
        </>
    )
}