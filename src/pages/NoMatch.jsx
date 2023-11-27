import React from 'react'
import '../styles/nomatch.css';
import Icon from '../config/components/Icon';
import { Link } from 'react-router-dom';
export default function NoMatch() {
   return (
      <div className='nomatch'>
         <h1 className='norouteheader'> Invalid Route </h1>
         <Icon className='norouteicon' icon={'error'} />
         <Link to='/songs'> Return To Playlist </Link>
      </div>
   )
}
