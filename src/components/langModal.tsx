import { MouseEvent } from "react";
import { SetLang } from "../type";

interface PropsMenu {
    isOpen: boolean;
    setIsOpen: (prev: boolean) => void ;
    setLang: SetLang
}

export const LangMenu = ({isOpen, setIsOpen, setLang}: PropsMenu) => {
    const changeLang = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        setLang(target.id ?? 'javascript')
        setIsOpen(false)
    }

  return (
    <div className="relative ml-3">
      <div
        className={`w-52 origin-top-right rounded-xl border border-white/5 bg-[#252635] p-1 text-sm/6 text-white transition-all duration-300 ease-out ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        style={{ transformOrigin: 'top right' }}
      > 
        <div id="javascript" className="flex justify-between  rounded-lg hover:bg-white/10 px-3" onClick={changeLang}>
            <img src="/icons/javascript.svg" alt="javascript" className="pointer-events-none"/>
            <button className="w-full items-center py-1.5 pointer-events-none">
            javascript
            </button>
        </div>
        <div id="typescript" className="flex justify-between  rounded-lg hover:bg-white/10 px-3" onClick={changeLang}>
            <img src="/icons/typescript.svg" alt="typescript" className="pointer-events-none"/>
            <button className="w-full items-center py-1.5 px-3 pointer-events-none">
            typescript
            </button>
        </div>
      </div>
    </div>
  );
};
