import '../styles/settings.css';
import Icon from '../config/components/Icon.jsx';
import github from '../images/github.png'
import insta from '../images/insta.png'
import gmail from '../images/gmail.png'
export default function Settings() {
   return (
      <div className='settings'>
         <header className='settings-header'>
            <h1> Settings </h1>
         </header>
         <div className='contactBox'>
            <ul className='contacts'>
               <li> <a
                  href='https://github.com/noahSnbr07'
               ><img src={github} /></a> </li>
               <li> <a
                  href='https://www.instagram.com/noah.snbr'
               ><img src={insta} /></a> </li>
               <li> <a
                  href='mailto:nur.noah.saschenbrecker@gmail.com'
               ><img src={gmail} /></a> </li>
            </ul>
         </div>
         <button
            onClick={() => { localStorage.clear(); }}
            className='clearStorage'>
            clear Storage
            <Icon icon={'database'} />
         </button>
      </div>
   );
}