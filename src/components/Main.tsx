
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Repeat, Maximize2 ,Shuffle, SkipBack, SkipForward , Volume2 , Laptop2 , LayoutList , Mic2 } from 'lucide-react'

import Image from "next/image"

export function Main(){
    return (
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className=" rounded-full bg-black/40 p-3 hover:bg-zinc-100 hover:text-zinc-800 ease-out duration-300">
              <ChevronLeft />
            </button>
            <button className=' rounded-full bg-black/40 p-2 hover:bg-zinc-100 hover:text-zinc-800 ease-out duration-300'>
              <ChevronRight />
            </button>

          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a className="bg-white/10 rounded-lg group flex items-center overflow-hidden gap-4 hover:bg-white/20 transition-colors cursor-pointer">
              <Image src="/album.jpg" width={112} height={112} alt="album de phill veras" />
              <strong>A porta</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/10 rounded-lg group flex items-center overflow-hidden gap-4 hover:bg-white/20 transition-colors cursor-pointer">
              <Image src="/drake.jpg" width={112} height={112} alt="album de phill veras" />
              <strong>A porta</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/10 rounded-lg group flex items-center overflow-hidden gap-4 hover:bg-white/20 transition-colors cursor-pointer">
              <Image src="/phillveras.jpeg" width={112} height={112} alt="album de phill veras" />
              <strong>A porta</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/10 rounded-lg group flex items-center overflow-hidden gap-4 hover:bg-white/20 transition-colors cursor-pointer">
              <Image src="/album.jpg" width={112} height={112} alt="album de phill veras" />
              <strong>A porta</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/10 rounded-lg group flex items-center overflow-hidden gap-4 hover:bg-white/20 transition-colors cursor-pointer">
              <Image src="/album.jpg" width={112} height={112} alt="album de phill veras" />
              <strong>A porta</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/10 rounded-lg group flex items-center overflow-hidden gap-4 hover:bg-white/20 transition-colors cursor-pointer">
              <Image src="/album.jpg" width={112} height={112} alt="album de phill veras" />
              <strong>A porta</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>

          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Diaego Schell fernandes</h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <a className="bg-white/5 p-3 rounded-lg hover:bg-white/10 cursor-pointer flex flex-col gap-3">
              <Image src="/album.jpg" width={100} className='w-full' height={48} alt="album de phill veras" />
              <strong>Daily mix</strong>
              <span className='text-sm text-zinc-500'>Pfill veras , brunos mars , jack newman</span>
            </a>
            <a className="bg-white/5 p-3 rounded-lg hover:bg-white/10 cursor-pointer flex flex-col gap-3">
              <Image src="/album.jpg" width={100} className='w-full' height={48} alt="album de phill veras" />
              <strong>Daily mix</strong>
              <span className='text-sm text-zinc-500'>Pfill veras , brunos mars , jack newman</span>
            </a>
            <a className="bg-white/5 p-3 rounded-lg hover:bg-white/10 cursor-pointer flex flex-col gap-3">
              <Image src="/album.jpg" width={100} className='w-full' height={48} alt="album de phill veras" />
              <strong>Daily mix</strong>
              <span className='text-sm text-zinc-500'>Pfill veras , brunos mars , jack newman</span>
            </a>
            <a className="bg-white/5 p-3 rounded-lg hover:bg-white/10 cursor-pointer flex flex-col gap-3">
              <Image src="/album.jpg" width={100} className='w-full' height={48} alt="album de phill veras" />
              <strong>Daily mix</strong>
              <span className='text-sm text-zinc-500'>Pfill veras , brunos mars , jack newman</span>
            </a>
            <a className="bg-white/5 p-3 rounded-lg hover:bg-white/10 cursor-pointer flex flex-col gap-3">
              <Image src="/album.jpg" width={100} className='w-full' height={48} alt="album de phill veras" />
              <strong>Daily mix</strong>
              <span className='text-sm text-zinc-500'>Pfill veras , brunos mars , jack newman</span>
            </a>
          </div>
        </main>
    )
}