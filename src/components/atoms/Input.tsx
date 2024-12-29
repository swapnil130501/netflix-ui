'use client';

interface InputProps {
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
    type: "email" | "password" | "text" | "checkbox"
}

import { useState } from "react";

export const Input: React.FC<InputProps> = ({
    placeholder,
    onChange,
    value,
    type
}) => {
    const [email, setEmail] = useState('');

    return (

        <div className="relative">
            <input 
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className="w-full p-4 rounded bg-neutral-800 bg-opacity-50 text-white text-md"
            />
        </div>
    )
}