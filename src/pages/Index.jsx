import React from 'react'
import '../styles/index.css';
import { Link } from 'react-router-dom';
export default function Index() {
    return (
        <div className='indexpage'>
            <header className='box'>
                <span className='index-span'> M </span>
                <span className='index-span'> u </span>
                <span className='index-span'> s </span>
                <span className='index-span'> i </span>
                <span className='index-span'> x </span>
            </header>
            <Link to={'/library'}> Start </Link>
        </div>
    );
}
