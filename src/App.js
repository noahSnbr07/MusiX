import { Routes, Route, Link, useResolvedPath, useMatch, Navigate } from 'react-router-dom';
import Player from './pages/Player';
import Songs from './pages/Songs';
import Icon from '../src/config/components/Icon';
import NoMatch from './pages/NoMatch';
import Settings from './pages/Settings';
import React from 'react';
import songLibrary from '../src/libs/Library.json';
import '../src/styles/responsiveDesign.css';
import '../src/styles/interface.css';
export default function App() {
  songLibrary.sort((a, b) => a.artist.toLowerCase().localeCompare(b.artist.toLowerCase()));
  // React.useEffect(() => { localStorage.setItem('songIndex', songLibrary.length) }, [])
  const CustomLink = ({ icon, to }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <li className={isActive ? 'activePage' : 'inactivePage'}>
        <Link to={to}>
          <Icon icon={icon} />
        </Link>
      </li>
    );
  }
  return (
    <React.Fragment>
      <div className="App">
        <main className='viewPort'>
          <Routes>
            <Route path="/">
              <Route path="" element={<Navigate to={"/songs"} />} />
              <Route index path="songs" element={<Songs />} />
              <Route path="player/:songID" element={<Player />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </main>
        <nav className='navBar'>
          <ul>
            <CustomLink icon={'list'} to='songs' />
            <CustomLink icon={'music_note'} to='player/:songID' />
            <CustomLink icon={'settings'} to='settings' />
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
}