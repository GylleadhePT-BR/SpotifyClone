
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Repeat, Maximize2 ,Shuffle, SkipBack, SkipForward , Volume2 , Laptop2 , LayoutList , Mic2 } from 'lucide-react'

export function Sidebar () {
    return (
        <aside className="w-72 bg-zinc-950 p-6">
        <nav className='space-y-5'>
          <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'> <Library /> Your Library</a>
          <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'> <Search /> Search</a>
          <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'> <HomeIcon />  home</a>

        </nav>

        <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>First</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Lo fi brasil</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Focus at night</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Vibe and relax</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>peace of mind</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Daily mix</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Tech podcats</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>The night dance</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>For coding vibes</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Play and chill</a>
          <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Morning</a>


        </nav>

      </aside>
    )
  }
  