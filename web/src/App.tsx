import './styles/main.css'
import * as Dialog from '@radix-ui/react-dialog'
import logoSvg from './assets/logo.svg'
import { CreateAdBanner } from './components/CreateAdBanner'
import { GameBanner } from './components/GameBanner'
import { useEffect, useState } from 'react'

import { CreateAdModal } from './components/CreateAdModal'
import axios from 'axios'

interface GameProps {
  id: string;
  title: string;
  _count: {
    ads: number
  };
  bannerUrl: string
}

export function App() {
  const [games, setGames] = useState<GameProps[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
        setGames(response.data)
      })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoSvg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui</h1>

      <div className="mt-16 grid grid-cols-6 gap-6 ">
        {games.map(game => {
          return (
            <GameBanner 
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title} 
              adsCount={game._count.ads}/>
          )
        })}
      </div>
      
      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>

    </div>
  )
}
