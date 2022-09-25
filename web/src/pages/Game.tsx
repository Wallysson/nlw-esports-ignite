import { useLocation, useParams } from 'react-router-dom'
import logoSvg from '../assets/logo.svg'
import '../styles/main.css'

interface GameProps {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

export function Game() {
  const { id } = useParams<{ id: string }>()
  const {
    state: { title, bannerUrl }
  } = useLocation()

  console.log(location)

  return (
    <div
      className="max-w-[1344px] w-11/12 mx-auto flex 
    flex-col items-center mt-2 md:px-20 md:mt-5 lg:mt-10"
    >
      <img
        src={logoSvg}
        alt="Logo Nlw eSports"
        className="w-[120px] md:w-auto lg:w-[135px]"
      />

      <div className="w-full">
        <img src={bannerUrl} />
        <h1>{title}</h1>
      </div>
    </div>
  )
}
