import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './styles/main.css'
import * as Dialog from '@radix-ui/react-dialog'
import logoSvg from './assets/logo.svg'
import { CreateAdBanner } from './components/CreateAdBanner'
import { GameBanner } from './components/GameBanner'
import { useEffect, useState } from 'react'
import { CaretLeft, CaretRight } from 'phosphor-react'

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
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    // loop: true,
    mode: "free-snap",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2.25, spacing: 4 },
      },
      '(min-width: 600px)': {
        slides: { perView: 3.25, spacing: 16 },
      },
      '(min-width: 800px)': {
        slides: { perView: 4.25, spacing: 16 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3.25, spacing: 16 },
      },
      '(min-width: 1200px)': {
        slides: { perView: 6.25, spacing: 16 },
      },
    },
    slides: { perView: 1.25, spacing: 16, origin: 'center' },
  })

  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
        setGames(response.data)
      })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 md:px-20 md:my-20  ">
      <img src={logoSvg} alt="Logo Nlw eSports" className="w-[240px] md:w-auto lg:w-[265px]"/>
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-black mt-20 px-6  text-center">Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui</h1>

      {games.length > 0 && (
        <div className="w-full navigation-wrapper relative px-4 md:px-0">
          <div ref={sliderRef} className="mt-16 keen-slider">
            {games.map(game => {
              return (
                <GameBanner 
                  key={game.id}
                  bannerUrl={game.bannerUrl}
                  title={game.title} 
                  adsCount={game._count.ads}
                />  
              )
            })}
          </div>
          
          <button
            className="absolute top-1/2 -left-14 w-12 h-12 translate-y-1/2"
          >
            <CaretLeft 
              size={40} 
              color="rgb(161, 161, 170)"
              onClick={(e: any ) => {
                e.stopPropagation() || instanceRef.current?.prev()
              }}
            />
          </button>
          <button
            className="absolute top-1/2 -right-14 w-12 h-12 translate-y-1/2"
          >
            <CaretRight 
              size={40} 
              color="#A1A1AA"
              onClick={(e: any) => {
                e.stopPropagation() || instanceRef.current?.next()
              }}
            />
          </button>
        </div>
      )}
      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>

    </div>
  )
}
