import React from 'react';
import '../styles/settings.css';
import Icon from '../config/components/Icon.jsx';
import github from '../images/github.png';
import insta from '../images/insta.png';
import gmail from '../images/gmail.png';
import Library from '../libs/Library.json';

export default function Settings() {
   const getTotalLength = () => {
      const totalLengthInSeconds = Library.reduce((accumulator, song) => {
         const [minutes, seconds] = song.length.split(':').map(Number);
         return accumulator + minutes * 60 + seconds;
      }, 0);
      const minutes = Math.floor(totalLengthInSeconds / 60);
      const seconds = totalLengthInSeconds % 60;

      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
   };
   return (
      <div className='settings'>
         <header className='settings-header'>
            <h1> Settings </h1>
         </header>
         <div className='contactBox'>
            <ul className='contacts'>
               <li>
                  <a href='https://github.com/noahSnbr07'>
                     <img alt='github link' src={github} />
                  </a>
               </li>
               <li>
                  <a href='https://www.instagram.com/noah.snbr'>
                     <img alt='instagram link' src={insta} />
                  </a>
               </li>
               <li>
                  <a href='mailto:nur.noah.saschenbrecker@gmail.com'>
                     <img alt='gmail link' src={gmail} />
                  </a>
               </li>
            </ul>
         </div>
         <button
            onClick={() => {
               localStorage.clear();
            }}
            className='clearStorage'>
            clear Storage
            <Icon icon={'database'} />
         </button>
         <button className='clearStorage'>
            Spielzeit: {getTotalLength()} h
            <Icon icon={'alarm'} />
         </button>
         <button className='clearStorage'>
            Songs: {(Library.length - 1)}
         </button>
      </div >
   );
}