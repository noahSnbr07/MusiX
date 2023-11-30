import React, { useEffect, useRef, useState } from 'react';
import '../styles/songs.css';
import Icon from '../config/components/Icon';
import { Link, useParams } from 'react-router-dom';
import songLibrary from '../libs/Library.json';

export default function Songs() {
  const { filter } = useParams();
  console.info(filter);
  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => setInputText(e.target.value.toLowerCase());

  const filteredSongs = songLibrary.filter((song) => {
    return song.title.toLowerCase().includes(inputText);
  });
  return (
    <React.Fragment>
      <div className='songs'>
        <div className='songs-searchbar'>
          <Icon icon={'search'} />
          <input onChange={inputHandler} type='text' />
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
