import { useEffect, useState } from 'react'

const GridBlocks = ({ width, height }) => {
    const [rows, setRows] = useState(0)
    const [cols, setCols] = useState(0)

    useEffect(() => {
        if (width && height) {
            const blockSize = 50;
            setCols(Math.floor(width / blockSize));
            setRows(Math.floor(height / blockSize));
        }
    }, [width, height])

    const grid = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid.push(
                <div
                    key={`${i}-${j}`}
                    className="border border-(--Tertiary_Color)"
                ></div>
            )
        }
    }



    return (
        <>
            {grid}
        </>
    )
}

export default GridBlocks