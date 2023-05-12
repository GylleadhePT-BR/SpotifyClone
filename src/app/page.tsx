
import { ChevronLeft, ChevronRight, Play} from 'lucide-react'
import Image from 'next/image'
import {Sidebar} from '../components/Sidebar'
import {Main} from '../components/Main'
import {Footer} from '../components/Footer'

export default function Home() {
  return (
    <div className="h-screen flex flex-col ease-out duration-200">
      <div className="flex flex-1">
        <Sidebar />
        <Main/>
      </div>
      <Footer />
    </div>
  )
}
