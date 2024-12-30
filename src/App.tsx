import { useState, useRef } from 'react'
import { Codi } from './coding/code'
import { Output } from './coding/codeOutput'
import { Bar } from './components/topBar'

function App() {
	const [code, setCode] = useState('')
	const [tron, setTron] = useState(true)

	const [leftWidth, setLeftWidth] = useState(50)
	const isDraggingRef = useRef(false)

	const handleMouseDown = (e: React.MouseEvent) => {
		e.preventDefault()
		document.body.style.cursor = 'ew-resize'
		isDraggingRef.current = true

		document.addEventListener('mousemove', handleMouseMove)
		document.addEventListener('mouseup', handleMouseUp)
	}

	const handleMouseMove = (e: MouseEvent) => {
		if (!isDraggingRef.current) return;
			
		const leftWidth = (e.clientX / window.innerWidth) * 100;

		if (leftWidth > 10 && leftWidth < 90) {
			setLeftWidth(leftWidth);
		}
	}

	const handleMouseUp = () => {
		if (isDraggingRef.current) {
			isDraggingRef.current = false
			document.body.style.cursor = 'default'
	
			document.removeEventListener('mousemove', handleMouseMove)
			document.removeEventListener('mouseup', handleMouseUp)
		}
	}

	return (
		<>
			<div className='bg-[#191a2a] h-screen overflow-hidden'>
				<Bar setTron = {setTron} tron = {tron}/>
				<div className='flex h-full'>
					<div className=' pl-[80px]  mt-[30px] pr-[30px]' style={{width: `${leftWidth}%`}}>
						<Codi setCode={setCode}/>
					</div>
					<div className='h-full w-[16px] flex  relative z-[20] hover:cursor-e-resize justify-center' onMouseDown={handleMouseDown}>
						<div className='bg-[#6d7497] w-[4px] '></div>
					</div>
					<div className='pl-[100px] mt-[30px]  overflow-auto  mb-[40px]' style={{width: `${100 - leftWidth}%`}}>
						<Output code={code}/>
					</div>

				</div>
			</div>
		</>
	)
}

export default App
