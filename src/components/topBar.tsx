import { VscClose } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeMinimize } from "react-icons/vsc";
import { PiRectangle } from "react-icons/pi";
import { IconContext } from "react-icons";
import { LeftBar } from "./leftBar";
import { handleWindowAction } from "./elctronBridge";
import { Lang } from "../type";


export const TopBar = () => {

    const { closeFunc, minimFunc, maximFunc } = handleWindowAction()
        
    return (
        <>
            <div className="dragab h-[40px] min-h-[40px] w-full bg-[#1e2030] flex justify-between border-b-[1px] border-[#828bb8] relative z-[12]">
                <div className="pt-[10px] pl-3 pr-3  hover:bg-[#2e324e] nodrag" style={{animationName: 'delay', transition: 'background-color 0.23s ease-in-out'}}>
                    <IconContext.Provider value={{ color: '#b4c2f0', size: '20px' }}>
                        <RxHamburgerMenu />
                    </IconContext.Provider>
                </div>

                <div className="  flex  items-center">
                    <div className="hover:bg-[#2e324e] pr-[17px] pl-[17px] flex h-full items-center nodrag" style={{ animationName: 'delay', transition: 'background-color 0.23s ease-in-out' }} onClick={minimFunc}>
                        <IconContext.Provider value={{ color: '#b4c2f0', className: 'minimizar' }}>
                            <VscChromeMinimize />
                        </IconContext.Provider>
                    </div>
                    <div className="hover:bg-[#2e324e] pr-[19px] pl-[19px] h-full items-center flex nodrag" style={{ animationName: 'delay', transition: 'background-color 0.23s ease-in-out' }} onClick={maximFunc}>
                        <IconContext.Provider value={{ color: '#b4c2f0', size: '14px' }}>
                            <PiRectangle />
                        </IconContext.Provider>
                    </div>
                    <div className="hover:bg-[#2e324e] pr-3 pl-[15px] h-full flex items-center nodrag" style={{ animationName: 'delay', transition: 'background-color 0.23s ease-in-out' }} onClick={closeFunc}>
                        <IconContext.Provider value={{ color: '#b4c2f0', size: '18px' }}>
                            <VscClose />
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </>
    )
}

export const Bar = ({setLang, lang}: Lang) => {

    return (
        <>
            <TopBar />
            <LeftBar setLang={setLang} lang = {lang}/>
        </>
    )
}
