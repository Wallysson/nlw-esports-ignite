import './styles/main.css'
import * as Dialog from '@radix-ui/react-dialog'
import logoSvg from './assets/logo.svg'
import { CreateAdBanner } from './components/CreateAdBanner'
import { GameBanner } from './components/GameBanner'
import { useEffect, useState } from 'react'

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
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
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

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60"/>

            <Dialog.Content 
              className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25"
            >
              <Dialog.Title className="text-3xl font-black">
                Publique um anúncio
              </Dialog.Title>

              <Dialog.Content>
                <form></form>
              </Dialog.Content>
            </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

    </div>
  )
}
