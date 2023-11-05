import React from 'react'
import { getServerAuthSession } from '~/server/auth'

async function Library() {
  const session =await getServerAuthSession()

  const response = await fetch(`https://api.autochords.co/get_saved_songs?user_email=${session?.user?.email ?? 'guest'}`)

  const resopnseJson = await response.json()

  console.log("responseJson", resopnseJson)

  return (
    <div>
      <h1 className='text-4xl font-bold'>Library</h1>
      <div className='flex flex-wrap'>
        {resopnseJson.map((song: any) => {
          return (
            <div className='p-4'>
              <a href={`/${song.song_name}`} className='text-2xl font-bold'>{song.song_name}</a>
              <p className='text-xl'>{song.artist_name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Library
