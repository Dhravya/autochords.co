import React from "react";
import { getServerAuthSession } from "~/server/auth";

interface Song {
  song_name: string;
  artist_name: string;
}

async function Library() {
  const session = await getServerAuthSession();

  const response = await fetch(
    `https://api.autochords.co/get_saved_songs?user_email=${
      session?.user?.email ?? "guest"
    }`,
  );
  const responseJson = (await response.json()) as {
    songs?: Song[];
    error?: string;
  };

  console.log(response);
  return (
    <div>
      <h1 className="text-4xl font-bold">Library</h1>
      <div className="flex flex-wrap">
        {responseJson?.error ? (
          <p>{responseJson?.error}</p>
        ) : (
          <>
            {responseJson?.songs?.map((song: Song) => (
              <div key={song.song_name} className="w-1/3 p-2">
                <div className="rounded-lg bg-white p-4 shadow-lg">
                  <h2 className="text-lg font-bold">{song.song_name}</h2>
                  <p className="text-gray-600">{song.artist_name}</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Library;
