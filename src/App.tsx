import { useState } from 'react'
import { Codi } from './coding/code'
import { Output } from './coding/codeOutput'
import { Bar } from './components/topBar'

function App() {
	const [code, setCode] = useState('')
	const [tron, setTron] = useState(true)
	return (
		<>
			<div className='bg-[#191a2a] h-screen overflow-hidden'>
				<Bar setTron = {setTron} tron = {tron}/>
				<div className='flex h-full'>
					<div className='w-1/2 pl-[80px]  mt-[30px]'>
						<Codi setCode={setCode}/>
					</div>
					<div className='pl-[100px] pt-[100px] border-l-[1px] border-[#6d7497]'>
						<Output code={code}/>
					</div>

				</div>
			</div>
		</>
	)
}

export default App
