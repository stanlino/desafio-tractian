import React from 'react'

export default function Button({ children, textColor="white" }) {
    return (
        <button className={`mr-6 text-${textColor} flex items-center`}>
            {children}
        </button>
    )
}
