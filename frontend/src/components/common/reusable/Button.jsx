

import React from 'react'


const loader = () => {
    return <span className="loader"></span>
}
const Button = ({ id, disabled, loading, className, onClick, type, children }) => {
    return (
        <button id={id} disabled={disabled || loading}
            className={`custom-btn ${className || ""}`}
            onClick={onClick}
            type={type}>
            {loading ? loader() : children}
        </button>
    )
}
export default Button;



