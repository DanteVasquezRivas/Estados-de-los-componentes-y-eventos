import React from 'react'
import Badge from 'react-bootstrap/Badge'

const Alert = ({ message, color }) => {
    return (
        <Badge bg={color} className="d-flex align-items-center justify-content-center">
            {message}
        </Badge>
    );
}

export default Alert;