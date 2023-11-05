import Header from "./components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { Textarea } from "~/components/ui/textarea"




export default function HomePage() {
  return (
    <main>
      <Header />
      <img src="/auth-illustration.svg" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[40%] rotate-0"/>
      <img src="/features-illustration-02.svg" alt="" className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[40%] h-[30%] rotate-12 -z-10"/>
      <div className="flex flex-col items-center justify-center w-full min-h-screen tracking-tight ">
        <div className="w-[40%]">
          <h1 className="font-bold text-6xl text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">Get chords in your voice for any song</h1>
          <h2 className="text-[#546089] my-5 font-bold text-2xl text-center leading-5"> Autochords is a musician's best friend. You name the song, we've got the chords personalised for you.</h2>
        </div>

        <Tabs className="w-full" defaultValue="Search">
          <div className="w-full flex items-center justify-center">
            <TabsList className="bg-[#B2B8CB] ">
              <TabsTrigger value="Search">Search</TabsTrigger>
              <TabsTrigger value="Library">Library</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent className="flex items-center justify-center" value="Search">
            <input className=" px-8 font-bold self-center w-[40%] items-center rounded-full border-4 border-foreground h-10 my-2 p-2 outline-none bg-background "/> 
          </TabsContent>
          <TabsContent value="Library"></TabsContent>
        </Tabs>

      </div>
    </main>
  );
}
