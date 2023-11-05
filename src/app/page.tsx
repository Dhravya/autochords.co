import Header from "./components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { Textarea } from "~/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/app/components/dialog"
import MicAccess from "./components/micaccess";





export default function HomePage() {
  return (
    <main>
      <Header />
      <img src="/auth-illustration.svg" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 md:w-[40%] h-[40%] rotate-0" />
      <img src="/features-illustration-02.svg" alt="" className="absolute bottom-24 left-1/2 -translate-x-1/2 md:w-[40%] h-[30%] rotate-12 -z-10" />
      <div className="flex flex-col items-center justify-center w-full min-h-screen tracking-tight ">
        <div className="md:w-[40%]">
          <h1 className="font-bold text-6xl text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">Get chords in your voice for any song</h1>
          <h2 className="text-[#546089] my-5 font-bold text-2xl text-center leading-5"> Autochords is a musician's best friend. You name the song, we've got the chords personalised just for you.</h2>
        </div>

        <Tabs className="w-full" defaultValue="Search">
          <div className="w-full flex items-center justify-center my-8 md:my-0">
            <TabsList className="bg-[#B2B8CB] font-semibold">
              <TabsTrigger value="Search" className="font-bold">SEARCH</TabsTrigger>
              <TabsTrigger value="Library " className="font-bold" >LIBRARY</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent className="flex flex-col items-center justify-center" value="Search">
            <input className=" px-8 font-bold self-center w-full mx-8 md:mx-0 md:w-[40%] items-center rounded-full border-4 border-foreground h-10 my-2 p-2 outline-none bg-background " />
            <div className="p-3">
              <Dialog>
                <DialogTrigger>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                </DialogTrigger>
                <DialogContent className="bg-[#11172A]  ">
                  <DialogHeader>
                    <h1 className="mb-12 font-semibold text-2xl">Now, we will record a 15 sec audio clip of your voice to find your key.</h1>
                    <MicAccess />
                    <DialogTitle></DialogTitle>
                    <DialogDescription>

                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </TabsContent>

          <TabsContent value="Library"></TabsContent>
        </Tabs>

        {/* record button */}

      </div>
    </main>
  );
}
