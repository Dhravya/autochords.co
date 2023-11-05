'use client';

import React, { useState } from 'react'
import { useSession } from 'next-auth/react';

function MicAccess() {

  const {data: session} = useSession();

  const [isRecording, setIsRecording] = useState(false);
  const [counter, setCounter] = useState(15);

  const startRecording = () => {
    setIsRecording(true);
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      const audioChunks: BlobPart[] | undefined = [];
      mediaRecorder.addEventListener("dataavailable", (event) => {
        audioChunks.push(event.data);
      });
      mediaRecorder.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks);
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
        setIsRecording(false);
        setCounter(15);

        // Send audio to API endpoint
        const formData = new FormData();
        formData.append('file', audioBlob, 'recording.wav');
        fetch('/api/user_recording?user_email=' + session?.user?.email ?? 'guest' , {
          method: 'POST',
          body: formData
        })
          .then(response => {
            console.log(response.json())
            console.log('Audio sent to API endpoint');
          })
          .catch(error => {
            console.error('Error sending audio to API endpoint:', error);
          });
      });
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
      setTimeout(() => {
        clearInterval(interval);
        mediaRecorder.stop();
      }, 15000);
    });
  };


  return (
    <div className={`flex items-center justify-center font-bold`}>
      <button
        onClick={startRecording}
        disabled={isRecording}
        className={`w-1/4 h-8 rounded-full ${isRecording ? 'bg-red-500 text-white' : 'bg-white border border-red-500 text-red-500 hover:bg-red-500 hover:text-white'}`}
      >
        {isRecording ? `Recording... ${counter}` : 'Record'}
      </button>
    </div>
  );

}

export default MicAccess
