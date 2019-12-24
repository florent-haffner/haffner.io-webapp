import React from 'react'

const Container = ({ children }) => {
    return (
        <div className="container" style={{
            textAlign: `left`
        }}>
            {children}
        </div>
    )
}

const ContainerCentered = ({ children }) => {
    return (
        <div className="container" style={{
            textAlign: `center`
        }}>
            {children}
        </div>
    )
}

const TextCenter = ({ children }) => {
    return(
        <div className="text-center">
            {children}
        </div>
    )
}

export { Container, ContainerCentered, TextCenter }