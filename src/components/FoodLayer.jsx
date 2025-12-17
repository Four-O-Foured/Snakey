import React from 'react';
import { useSelector } from 'react-redux';

const FoodLayer = ({ cellSize }) => {
    const food = useSelector(state => state.snake.food);

    return (
        <div
            className="absolute bg-white rounded-full animate-bounce"
            style={{
                width: cellSize.width * 0.6, 
                height: cellSize.height * 0.6,
                left: food.x * cellSize.width + (cellSize.width * 0.2), 
                top: food.y * cellSize.height + (cellSize.height * 0.2),
                transition: 'top 0.2s, left 0.2s',
                boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.5)'
            }}
        />
    );
};

export default FoodLayer;
