import { Eye, EyeClosed } from 'lucide-react';
import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const TextInputField = ({
    id,
    label,
    placeholder,
    value,
    onChange,
    onBlur,
    touched,
    type,
    iconStart,
    required = false
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const isInvalid = touched && required && !value.trim();

    const isPassword = type === 'password';
    const currentType = isPassword && showPassword ? 'text' : type;

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
                {label}
            </label>
            <div className="relative">
                {iconStart && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        {iconStart}
                    </div>
                )}
                <input
                    required={required}
                    type={currentType ?? "text"}
                    id={id}
                    className={`w-full p-3 border rounded-md transition duration-150 ease-in-out bg-gray-50 ${
                        isInvalid
                            ? 'ring-1 ring-red-600/10 ring-inset bg-red-50 placeholder-red-700'
                            : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                        } ${iconStart ? 'pl-10' : ''} ${isPassword ? 'pr-10' : ''}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                {isPassword && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                        tabIndex={-1}
                    >
                        {showPassword ? <Eye /> : <EyeClosed />}
                    </button>
                )}
            </div>
            {isInvalid && <p className="text-xs text-red-700">Required</p>}
        </div>
    );
};

export default TextInputField;
