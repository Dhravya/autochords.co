import { getServerSession } from 'next-auth';
import React from 'react'
import Header from '~/app/components/Header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { notFound } from 'next/navigation'
import ChordProRenderer from '~/app/components/ChordsRenderer';


type Session = {
  user: {
    name: string;
    email: string;
    image: string;
  }
} | null

async function Page({ params: { songName, key } }: { params: { songName: string, key: string[] } }) {

  const session: Session = (await getServerSession()) ?? null;

  const songData = await fetch(`https://api.autochords.co/get_chords?song_name=${songName}&username=${session?.user?.email ?? 'guest'}`)

  if (songData.status === 400) {
    // Redirect to 404 page
    notFound()
  }

  const songDataJson = await songData.json()

  const songDataSVGsGuitar: any = []

  // For every chord in songDataJson[guitar_chord_diagrams] chord: { name: string; url: string }, download the svg and store it in songDataSVGs
  for (const chord in songDataJson['guitar_chord_diagrams']) {
    const chordSVG = await fetch(songDataJson['guitar_chord_diagrams'][chord]['url'])
    console.log(songDataJson['guitar_chord_diagrams'][chord]['url'])
    const texts = await chordSVG.text()
    songDataSVGsGuitar.push(texts)
  }

  const songDataSVGsUkulele: any = []
  for (const chord in songDataJson['ukulele_chord_diagrams']) {
    const chordSVG = await fetch(songDataJson['ukulele_chord_diagrams'][chord]['url'])
    console.log(songDataJson['ukulele_chord_diagrams'][chord]['url'])
    const texts = await chordSVG.text()
    songDataSVGsUkulele.push(texts)
  }


    return (
      <div>
        <Header className='p-4 mt-4' />
        <img src="/auth-illustration.svg" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 md:w-[40%] h-[40%] rotate-0 -z-10" />
        <img src="/features-illustration-02.svg" alt="" className="absolute bottom-24 left-1/3 -translate-x-1/2 md:w-[40%] h-[30%] rotate-12 -z-10" />
        <Tabs defaultValue="Guitar">
          <div className='flex'>
            <div className='w-1/3 min-h-screen p-4'>
              <div className='rounded-xl sidebar h-full'>
                <TabsContent value="Guitar"  >
                  <div className="flex flex-col h-full mt-16">
                    {/* Load the SVGS dangerously */}
                    {songDataJson['guitar_chord_diagrams'].map((chord: {name: string; url: string}, index: number) => (
                      <div
                        className='flex items-center justify-center'
                        key={chord.url}
                        style={{ flex: '2 2 auto' }}
                      >
                        <div className='flex flex-col items-center'>
                          <div
                            className='flex items-center justify-center'
                            dangerouslySetInnerHTML={{
                              // @ts-ignore
                              __html: songDataSVGsGuitar[index]?.replaceAll("#444", "#FFF").replace(/<svg[^>]*>/, (match) => {
                                return match.replace(/width="[^"]*"/, 'width="300"').replace(/height="[^"]*"/, 'height="300"');
                              }) ?? ''
                            }}
                            style={{ width: '100px', height: '100px' }}
                          />
                          <div className='text-center mt-2'>{chord.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="Ukulele">
                <div className="flex flex-col h-full mt-16">
                    {/* Load the SVGS dangerously */}
                    {songDataJson['ukulele_chord_diagrams'].map((chord: {name: string; url: string}, index: number) => (
                      <div
                        className='flex items-center justify-center'
                        key={chord.url}
                        style={{ flex: '2 2 auto' }}
                      >
                        <div className='flex flex-col items-center'>
                          <div
                            className='flex items-center justify-center'
                            dangerouslySetInnerHTML={{
                              // @ts-ignore
                              __html: songDataSVGsUkulele[index]?.replaceAll("#444", "#FFF").replace(/<svg[^>]*>/, (match) => {
                                return match.replace(/width="[^"]*"/, 'width="300"').replace(/height="[^"]*"/, 'height="300"');
                              }) ?? ''
                            }}
                            style={{ width: '100px', height: '100px' }}
                          />
                          <div className='text-center mt-2'>{chord.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </div>
            </div>
            <div className='w-full mt-16 mx-16'>
              <div className='w-full font-extrabold text-5xl'> {songDataJson['song_name']}</div>
              <div className="  font-bold text-2xl mt-5 w-[400px]">
                <TabsList className="bg-[#B2B8CB]">
                  <TabsTrigger value="Guitar" className="font-bold">GUITAR</TabsTrigger>
                  <TabsTrigger value="Ukulele" className="font-bold">UKULELE</TabsTrigger>
                </TabsList>
              </div>

              {/* <pre> */}
                <ChordProRenderer content={songDataJson['chords']} />
              {/* </pre> */}
            </div>
          </div>
        </Tabs>
      </div>
    )
  }

export default Page