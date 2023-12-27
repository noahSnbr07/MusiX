// Songs.jsx
import React, { useEffect, useState } from 'react';
import '../styles/songs.css';
import Icon from '../config/components/Icon';
import { Link } from 'react-router-dom';
import songLibrary from '../libs/Library.json';
import Message from '../config/functions/Message';

export default function Songs() {
  const [inputText, setInputText] = useState("");
  const [sortedSongs, setSortedSongs] = useState([...songLibrary]);
  const filters = ['title', 'artist', 'fiber_new', 'schedule'];
  const messages = ['title', 'artist', 'latest', 'longest'];
  let [message, setMessage] = useState(messages[0]);
  let [filterIndex, setFilterIndex] = useState(0);

  const inputHandler = (e) => setInputText(e.target.value.toLowerCase());
  useEffect(() => {
    const sortSongs = () => {
      let sortedArray = [];
      switch (filterIndex) {
        case 0: sortedArray = [...songLibrary].sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())); setMessage(messages[0]); break;
        case 1: sortedArray = [...songLibrary].sort((a, b) => a.artist.toLowerCase().localeCompare(b.artist.toLowerCase())); setMessage(messages[1]); break;
        case 2: sortedArray = [...songLibrary].slice().reverse(); setMessage(messages[2]); break;
        case 3: sortedArray = [...songLibrary].sort((a, b) => a.length.toLowerCase().localeCompare(b.length.toLowerCase())); setMessage(messages[3]); break;
        default:
          break;
      }

      setSortedSongs(sortedArray);
    };

    sortSongs();
  }, [filterIndex]);

  const adaptFilter = (index) => { index >= filters.length ? setFilterIndex(0) : setFilterIndex(filterIndex + 1); };

  const filteredSongs = sortedSongs.filter((song) => {
    switch (filterIndex) {
      case 0: return song.title.toLowerCase().includes(inputText);
      case 1: return song.artist.toLowerCase().includes(inputText);
      case 3: return song.length.toLowerCase().includes(inputText);
      default: return true;
    }
  });

  return (
    <React.Fragment>
      <Message message={`sorting by: ${message}`} />
      <div className='songs'>
        <div className='songs-searchbar'>
          <Icon icon={filters[filterIndex]} onClick={() => { adaptFilter(filterIndex + 1) }} />
          <Icon icon={'search'} />
          <input placeholder={filters[filterIndex]} onChange={inputHandler} type='text' />
        </div>
        <div className='songs-listed'>
          {
            filteredSongs.map((song, index) => {
              return (
                <Link
                  key={index}
                  to={`/player/${songLibrary.indexOf(song)}`}
                  onClick={() => { localStorage.setItem('songIndex', songLibrary.indexOf(song)); }}
                  className='song-in-songs'>
                  <img loading='lazy' src={song.cover} alt={`Cover for ${song.title}`} />
                  <div className='song-main'>
                    <section className='song-title-and-artist'>
                      <h1>{song.title}</h1>
                      <h4>{song.artist}</h4>
                    </section>
                    <div className='song-edit'>
                      <div className='song-length'>{song.length}</div>
                    </div>
                  </div>
                </Link>
              );
            })
          }
        </div>
      </div>
    </React.Fragment>
  );
}
