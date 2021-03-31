import { Link } from 'react-router-dom';
import './Button.css';
import React from 'react'

export const Button = () => {
    return (
        <Link to='sign-up'>
            <button className='btn'>Sign Up</button>
        </Link>
    )
}
