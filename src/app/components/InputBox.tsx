'use client'

import React from 'react'
import { useState } from "react";

function InputBox() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{ "index": number; "artist": string; "song": string; "url": string; "id": string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  interface SongResult {
    index: number;
    artist: string;
    song: string;
    url: string;
    id: string;
  }

  const getSearchResults = async (query: string) => {
    setIsLoading(true);
    const apiUrl = '/api/getSongResults';
    const response = await fetch(`${apiUrl}?song_name=${query}`);
    const data = await response.json() as { data: { results: SongResult[] } };
    console.log('data', data)
    setIsLoading(false);
    setSearchResults(data.data.results);
    console.log(searchResults)
  }

    return (
      <div className="relative flex flex-col items-center justify-center md:mx-0 md:w-[40%]">
        <input
          className="px-8 font-bold self-center w-full mx-8 items-center rounded-full border-4 border-foreground h-10 my-2 p-2 outline-none bg-background"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={async (e) => {
            if (e.key === 'Enter') {
             await getSearchResults(searchQuery);
            }
          }}
        />
        {isLoading ? <p>Loading...</p> : null}
        {searchResults?.length > 0 ? (
          <ul className='
        absolute z-10 w-full bg-background rounded-lg shadow-lg p-2 mt-1 top-12'>
            {searchResults.map((result) => (
              <li key={result.id}>
                <a className='w-full h-full' href={"/" + result.url.split('/')[1]}>
                {result.song
                  // Remove the last word from the song name
                  .split(' ')
                  .slice(0, -1)
                  .join(' ')
                } {result.artist}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
        {searchResults?.length === 0 && !isLoading && searchQuery.trim() !== '' ? (
          <p>Type Enter to search</p>
        ) : null}
      </div>
    )
}

export default InputBox