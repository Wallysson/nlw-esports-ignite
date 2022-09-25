import { Link } from 'react-router-dom'

interface GameBannerProps {
  id: string
  bannerUrl: string
  title: string
  adsCount: number
}

export function GameBanner({
  id,
  bannerUrl,
  title,
  adsCount
}: GameBannerProps) {
  return (
    <Link
      to={`game/${id}`}
      state={{ title, bannerUrl }}
      className="relative rounded-lg overflow-hidden keen-slider__slide hover:opacity-70 transition-opacity"
    >
      <img src={bannerUrl} alt="" />

      <div className="bg-card-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block truncate">{title}</strong>
        <span className="text-zinc-300 text-sm block">
          {adsCount} anúncio(s)
        </span>
      </div>
    </Link>
  )
}
