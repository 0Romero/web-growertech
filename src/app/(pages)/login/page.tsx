import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between p-24 relative">
      <nav className="absolute right-2 top-2 z-20">
        <ModeToggle />
      </nav>
      <div className="absolute inset-0">
        <Image
          src="/campo.jpg"
          alt="Imagem de login"
          quality={100}
          priority
          fill
          className="object-cover"
        />
      </div>
      <section className="absolute flex flex-col items-center w-full gap-4 z-10 bg-white bg-opacity-60 p-8 rounded-lg shadow-lg backdrop-blur-md max-w-md">
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="37.5" cy="37.5" r="37.5" fill="#22C55E" />
          <path
            d="M37.5 25C40 30 45 35 45 45C40 40 35 40 30 45C30 35 35 30 37.5 25Z"
            fill="white"
          />
        </svg>
        <h1 className="text-4xl font-extrabold uppercase text-gray-800">GrowerTech</h1>
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="min-w-[200px] bg-transparent text-gray-800">
            <TabsTrigger value="signin">Entrar</TabsTrigger>
            <TabsTrigger value="signup">Registrar</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <form action="" className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-gray-800">Email</Label>
                <Input id="email" className="bg-white bg-opacity-80 border-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <Label htmlFor="password" className="text-gray-800">Senha</Label>
                <Input id="password" type="password" className="bg-white bg-opacity-80 border-none focus:ring-2 focus:ring-green-500" />
              </div>
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">Entrar</Button>
            </form>
          </TabsContent>
          <TabsContent value="signup">
            <form action="" className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-gray-800">Nome</Label>
                <Input id="name" className="bg-white bg-opacity-80 border-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-800">Email</Label>
                <Input id="email" className="bg-white bg-opacity-80 border-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <Label htmlFor="password" className="text-gray-800">Senha</Label>
                <Input id="password" type="password" className="bg-white bg-opacity-80 border-none focus:ring-2 focus:ring-green-500" />
              </div>
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">Criar conta</Button>
            </form>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
