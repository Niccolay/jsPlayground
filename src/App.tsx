import { useState} from 'react'
import { Codi } from './coding/code'
import { Output } from './coding/codeOutput'
import { Bar } from './components/topBar'
import { Layout } from './layout'
import { useDrag } from './hooks/lineDrag'

function App() {
	const [code, setCode] = useState('')
	const [lang, setLang] = useState('typescript')

	const { leftWidth, handleMouseDown } = useDrag()


	return (
		<Layout>
			<div className='bg-[#191a2a] h-screen overflow-hidden'>
				<Bar setLang = {setLang} lang = {lang}/>
				<div className='flex h-full'>
					<div className=' pl-[80px]  mt-[30px] pr-[30px]' style={{width: `${leftWidth}%`}}>
						<Codi setCode={setCode} lang = {lang}/>
					</div>
					<div className='h-full w-[16px] flex  relative z-[20] hover:cursor-e-resize justify-center' onMouseDown={handleMouseDown}>
						<div className='bg-[#6d7497] w-[4px] '></div>
					</div>
					<div className='pl-[100px] mt-[30px]  overflow-auto  mb-[40px]' style={{width: `${100 - leftWidth}%`}}>
						<Output code= {code}/>
					</div>

				</div>
			</div>
		</Layout>
	)
}

export default App
