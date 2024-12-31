import { useRef, useState } from "react"

export const useDrag = () => {
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

    return { leftWidth, handleMouseDown }
}
