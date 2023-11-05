'use client';

import { BookmarkIcon } from 'lucide-react'
import React from 'react'

function SaveSongButton({songName, session}: {songName: string, session: any}) {
  return (
    <button
    onClick={async () => {
      await fetch("https://api.autochords.co/save_song?song_url=" + songName + "&user_email=" + session?.user?.email)
      alert("Saved song!")
    }}
  >
    <BookmarkIcon size={24} />
  </button>
  )
}

export default SaveSongButton
