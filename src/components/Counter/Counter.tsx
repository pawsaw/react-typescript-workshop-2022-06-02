import { useState } from 'react';
import { noop } from 'rxjs';

export interface OnCounterValueChanged {
    (newValue: number): void;
}

export interface CounterProps {
    value: number;
    onCounterValueChanged: OnCounterValueChanged;
}

export const Counter: React.FC<CounterProps> = ({
    value,
    onCounterValueChanged
}) => {

    const decrement = () => {
        const newValue = value - 1;
        onCounterValueChanged(newValue);
    };

    const increment = () => {
        const newValue = value + 1;
        onCounterValueChanged(newValue);
    };

   

    return <div>
        <button onClick={decrement}>-</button>
        {value}
        <button onClick={increment}>+</button>
    </div>
};