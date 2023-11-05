import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"

import React from 'react'

function SwitchIcon() {
  return (
    <Tabs defaultValue="Guitar" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="Guitar">Guitar</TabsTrigger>
        <TabsTrigger value="Ukulele">Ukulele</TabsTrigger>
      </TabsList>
      <TabsContent value="account"></TabsContent>
      <TabsContent value="Ukulele"></TabsContent>
    </Tabs>


  )
}

export default SwitchIcon
