
import React from 'react'
import { useSelector } from 'react-redux';

const ScoreBar = () => {
    const score = useSelector(state => state.snake.score);
    return (
        <div className="w-full flex justify-between border-b border-(--Accent_Color) mb-5 p-2">
            <div className="text-(--Secondary_Color) text-[2rem] font-pixel border px-6 flex items-center justify-center rounded-3xl mb-3.5 border-(--Tertiary_Color)">Score: {score}</div>
            <div className='text-(--Secondary_Color) text-[2rem] font-pixel border px-6 flex items-center justify-center rounded-3xl mb-3.5 border-(--Tertiary_Color)'>High Score: 0</div>
            <div className='text-(--Secondary_Color) text-[2rem] font-pixel border px-6 flex items-center justify-center rounded-3xl mb-3.5 border-(--Tertiary_Color)'>Best Score: 0</div>
            <div className='text-(--Secondary_Color) text-[2rem] font-pixel border px-6 flex items-center justify-center rounded-3xl mb-3.5 border-(--Tertiary_Color)'>Time: 00:00</div>
        </div>
    )
}

export default ScoreBar