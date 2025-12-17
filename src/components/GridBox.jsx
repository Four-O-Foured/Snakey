import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GridBlocks from './GridBlocks'
import SnakeLayer from './SnakeLayer'
import FoodLayer from './FoodLayer'
import { moveSnake, setDirection, setGridSize, restartGame } from '../store/reducers/snakeSlice'
import { Spinner } from './ui/8bit/spinner'


const GridBox = () => {
    const boxRef = useRef(null)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
    const status = useSelector(state => state.snake.status)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!boxRef.current) return

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setDimensions({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                })
            }
        })

        resizeObserver.observe(boxRef.current)

        return () => resizeObserver.disconnect()
    }, [boxRef])


    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(moveSnake())
        }, 200)

        return () => clearInterval(interval)
    }, [dispatch])

    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case 'ArrowUp':
                    dispatch(setDirection({ x: 0, y: -1 }))
                    break
                case 'ArrowDown':
                    dispatch(setDirection({ x: 0, y: 1 }))
                    break
                case 'ArrowLeft':
                    dispatch(setDirection({ x: -1, y: 0 }))
                    break
                case 'ArrowRight':
                    dispatch(setDirection({ x: 1, y: 0 }))
                    break
                default:
                    break
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [dispatch])

    let baseBlockSize = 50;
    let cols = Math.floor(dimensions.width / baseBlockSize) || 1;
    let rows = Math.floor(dimensions.height / baseBlockSize) || 1;

    useEffect(() => {
        dispatch(setGridSize({ rows, cols }))
    }, [rows, cols, dispatch])

    let cellSize = {
        width: dimensions.width / cols,
        height: dimensions.height / rows
    };

    return (
        <div ref={boxRef} className='w-full SnakeBoard grow border border-(--Tertiary_Color) relative'>
            <GridBlocks width={dimensions.width} height={dimensions.height} />
            <SnakeLayer cellSize={cellSize} />
            <FoodLayer cellSize={cellSize} />

            {/* Game Over Overlay */}
            {status === 'game_over' && (
                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-10">
                    <h2 className="text-6xl text-(--Accent_Color) font-pixel mb-4">GAME OVER</h2>
                    <button
                        onClick={() => dispatch(restartGame())}
                        className="px-6 py-3 text-2xl flex gap-4 border font-pixel hover:border-(--Accent_Color) hover:text-(--Accent_Color) hover:scale-105 animate-in duration-300 border-(--Tertiary_Color) rounded-3xl"
                    >
                        <Spinner variant="classic" className="size-8" />
                        RESTART
                    </button>
                </div>
            )}
        </div>
    )
}

export default GridBox