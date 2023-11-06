# Autochords

![Logo](https://autochords.co/logo.png)

## Why

My friend Sreeram has been playing the guitar since 8 years. When I played some songs with him, we realised that the songs' chords were in the singer's tune, not my tune.
This is where the idea for AutoChords sparked. "What if there was an app that listens to you and tells you the exact chords that suite your voice for any particular song?"

So, we built it this weekend, for both guitar and ukulele https://autochords.co

![Autochords](https://i.dhr.wtf/r/Clipboard_Nov_5,_2023_at_7.37 AM.png)

## What it does
Autochords utilises machine learning and math to figure out the key of your voice. Then, it searches the vast chord library for the prompted song, and transposes it to your key, which means it makes the chords such that it sounds perfect with your voice, making it ideal to sing along with Guitar and ukulele. It also gives the chord diagrams for both the instruments so that the user can figure out what to play, on the spot.
They can also save songs for later use, in their own key, so that they don't have to search it up again and again!

## Tech Stack
- NextJS for frontend
- TailwindCSS for styling
- MySQL as the database
- Python with FastAPI as the backend + API
- AWS amplify as hosting for the frontend NextJS app

The final product is available right now and can be used right away. 
