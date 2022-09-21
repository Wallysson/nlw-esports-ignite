interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner({bannerUrl, title, adsCount}: GameBannerProps) {
  return (
    <a className="relative rounded-lg overflow-hidden keen-slider__slide hover:opacity-70 transition-opacity" href="">
      <img src={bannerUrl} alt="" />

      <div className="bg-card-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">{adsCount} anúncio(s)</span>
      </div>
    </a>
  )
}