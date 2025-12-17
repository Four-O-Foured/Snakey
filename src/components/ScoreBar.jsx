
import React from 'react'
import { useSelector } from 'react-redux';

const ScoreBar = () => {
    const { score, highScore, timer } = useSelector(state => state.snake);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="w-full flex justify-between border-b border-(--Accent_Color) mb-5 p-2">
            <div className="text-(--Secondary_Color) text-[2rem] font-pixel border px-6 flex items-center justify-center rounded-3xl mb-3.5 border-(--Tertiary_Color)">Score: {score}</div>
            <div className='text-(--Secondary_Color) text-[2rem] font-pixel border px-6 flex items-center justify-center rounded-3xl mb-3.5 border-(--Tertiary_Color)'>Highest Score: {highScore}</div>
            <div className='text-(--Secondary_Color) text-[2rem] font-pixel border px-6 flex items-center justify-center rounded-3xl mb-3.5 border-(--Tertiary_Color)'>Time: {formatTime(timer)}</div>
        </div>
    )
}

export default ScoreBar