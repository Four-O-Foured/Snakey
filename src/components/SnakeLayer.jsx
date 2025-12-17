
import { useSelector } from 'react-redux';

const SnakeLayer = ({ cellSize }) => {
    const snake = useSelector(state => state.snake.snake);

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none animate-pulse">
            {snake.map((segment, index) => (
                <div
                    key={index}
                    className="absolute bg-(--Accent_Color) border border-(--Tertiary_Color) rounded-sm"
                    style={{
                        width: cellSize.width,
                        height: cellSize.height,
                        left: segment.x * cellSize.width,
                        top: segment.y * cellSize.height,
                        transition: 'all 0.1s linear'
                    }}
                />
            ))}
        </div>
    );
};

export default SnakeLayer;
