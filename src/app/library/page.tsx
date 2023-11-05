import React from "react";
import { getServerAuthSession } from "~/server/auth";
import Header from "../components/Header";

interface Song {
  song_name: string;
  artist_name: string;
  song_url: string
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

  console.log(responseJson);
  return (
      <div>
        <Header/>
            <div className="p-16">
        <h1 className="text-4xl font-bold">Library</h1>
        <div className="flex flex-wrap mt-4">
          {responseJson?.songs?.map((song: Song) => (
                <a href={"/" + song.song_url} key={song.song_name} className="w-1/3 p-2">
                  <div className="rounded-lg bg-[#B3B8C9]/50 p-4 shadow-lg">
                    <h2 className="text-lg font-bold text-white">{song.song_name.replaceAll("-", ' ').toUpperCase()}</h2>
                  </div>
                </a>
              ))}
        </div>
            </div>
      </div>
  );
}

export default Library;
