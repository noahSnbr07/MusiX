import { Routes, Route, Link, useResolvedPath, useMatch, Navigate } from 'react-router-dom';
import Player from './pages/Player';
import Library from './pages/Library';
import Icon from '../src/config/components/Icon';
import NoMatch from './pages/NoMatch';
import Settings from './pages/Settings';
import React from 'react';
import '../src/styles/responsiveDesign.css';
import '../src/styles/interface.css';
import Index from './pages/Index';
export default function App() {
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
            <Route index element={<Index />} />
            <Route path='index' element={<Index />} />
            <Route path="library" element={<Library />} />
            <Route path="player">
              <Route path=':songID' element={<Player />} />
            </Route>
            <Route path="settings" element={<Settings />} />
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </main>
        <nav className='navBar'>
          <ul>
            <CustomLink icon={'list'} to='library' />
            <CustomLink icon={'music_note'} to='player/:songID' />
            <CustomLink icon={'settings'} to='settings' />
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
}