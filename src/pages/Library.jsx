import React, { useEffect, useState } from 'react';
import '../styles/songs.css';
import Icon from '../config/components/Icon';
import { Link } from 'react-router-dom';
import songLibrary from '../libs/Library.json';

export default function Songs() {
  const [inputText, setInputText] = useState("");
  const [sortedSongs, setSortedSongs] = useState([...songLibrary]);
  const filters = ['title', 'artist', 'fiber_new', 'schedule'];
  let [filterIndex, setFilterIndex] = useState(0);

  const inputHandler = (e) => setInputText(e.target.value.toLowerCase());

  useEffect(() => {
    const sortSongs = () => {
      switch (filterIndex) {
        case 0: setSortedSongs([...sortedSongs].sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))); break;
        case 1: setSortedSongs([...sortedSongs].sort((a, b) => a.artist.toLowerCase().localeCompare(b.artist.toLowerCase()))); break;
        case 2: setSortedSongs(songLibrary.reverse()); break;
        case 3: setSortedSongs([...sortedSongs].sort((a, b) => a.length.toLowerCase().localeCompare(b.length.toLowerCase()))); break;
        default: break;
      }
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
