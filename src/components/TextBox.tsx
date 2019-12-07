import React from 'react'

const TextBox = ({ children }) => {
    return (
        <div style={{ 
            position: `absolute`,
            top: `50%`,
            left: `50%`,
            transform: `translate(-50%, -50%)`,
            textAlign: `center`
        }}>
            {children}
        </div>
    )
}
export default TextBox;
