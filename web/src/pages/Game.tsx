import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import logoSvg from '../assets/logo.svg'
import '../styles/main.css'
import axios from 'axios'
import { ArrowLeft } from 'phosphor-react'
import { AdsDuo } from '../components/AdsDuo'

interface GameProps {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

interface AdsDataProps {
  id: string
  name: string
  weekDays: string[]
  useVoiceChannel: boolean
  yearsPlaying: number
  hourStart: string
  hourEnd: string
}

export function Game() {
  const [ads, setAds] = useState<AdsDataProps[]>([])
  const { id } = useParams<{ id: string }>()
  const {
    state: { title, bannerUrl }
  } = useLocation()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef] = useKeenSlider({
    initial: 0,
    // loop: true,
    mode: 'free',
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    slides: { perView: 'auto', spacing: 16 }
  })

  useEffect(() => {
    async function getAdsById() {
      await axios(`http://localhost:3333/games/${id}/ads`).then(response => {
        setAds(response.data)
      })
    }
    getAdsById()
  }, [])

  return (
    <div className="max-w-[1344px] w-11/12 mx-auto flex flex-col items-center mt-2 md:px-20 md:mt-5 lg:mt-10">
      <div className="w-full flex items-center justify-between mb-4 md:mb-8 md:px-0">
        <Link to="/">
          <button className="flex items-center gap-2 text-white py-3 px-3">
            <ArrowLeft size={20} />
          </button>
        </Link>
        <img
          src={logoSvg}
          alt="Logo Nlw eSports"
          className="w-[100px] md:w-[120px]"
        />
      </div>

      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-16 mt-4">
        <img
          src={bannerUrl}
          className={`w-full h-[175px] md:w-[375px] md:h-[475px] object-cover border-0 rounded-md`}
        />
        <div className="flex flex-col">
          <h1 className="text-white font-black text-2xl md:text-4xl mb-2">
            {title}
          </h1>
          <span className="text-zinc-400 text-base md:text-xl">
            Conecte-se e começe a jogar!
          </span>
          {ads.length > 0 && (
            <div className="mt-4 navigation-wrapper relative">
              <div ref={sliderRef} className="mt-4 keen-slider">
                {ads.map(ad => {
                  return <AdsDuo key={ad.id} data={ad} />
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
