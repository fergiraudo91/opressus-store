import { Link } from 'react-router-dom';
import './Button.css';
import React from 'react'

export const Button = ({action, link}) => {
    return (
        <Link to={link}>
            <button className='btn btn-contact'>{action}</button>
        </Link>
    )
}
