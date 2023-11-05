import React from 'react'
import Header from '~/app/components/Header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"


function Page({ params: { songName, key } }: { params: { songName: string, key: string[] } }) {
  return (
    <div>
      <Header className='p-4 mt-4' />
      <img src="/auth-illustration.svg" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 md:w-[40%] h-[40%] rotate-0 -z-10" />
      <img src="/features-illustration-02.svg" alt="" className="absolute bottom-24 left-1/3 -translate-x-1/2 md:w-[40%] h-[30%] rotate-12 -z-10" />
      <Tabs defaultValue="Guitar">
        <div className='flex'>
          <div className='w-1/3 min-h-screen p-4'>
            <div className='rounded-xl sidebar h-full'>
            <TabsContent  value="Guitar"  ></TabsContent>
              <TabsContent value="Ukulele"></TabsContent>
            </div>
          </div>
          <div className='w-full mt-16 mx-16'>
            <div className='w-full font-extrabold text-5xl'> {songName}</div>
            <div className="  font-bold text-2xl mt-4 w-[400px]">
              <TabsList className="bg-[#B2B8CB]">
                <TabsTrigger value="Guitar" className="font-bold">GUITAR</TabsTrigger>
                <TabsTrigger value="Ukulele" className="font-bold">UKULELE</TabsTrigger>
              </TabsList>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  )
}

export default Page
