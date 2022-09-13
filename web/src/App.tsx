import './styles/main.css'
import { MagnifyingGlassPlus } from 'phosphor-react'
import logoSvg from './assets/logo.svg'

export function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoSvg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui</h1>

      <div className="mt-16 grid grid-cols-6 gap-6 ">
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/image-1.png" alt="" />

          <div className="bg-card-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/image-2.png" alt="" />

          <div className="bg-card-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Apex Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/image-3.png" alt="" />

          <div className="bg-card-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Counter Strike</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/image-4.png" alt="" />

          <div className="bg-card-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">World of Warcraft</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/image-5.png" alt="" />

          <div className="bg-card-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden" href="">
          <img src="/image-6.png" alt="" />

          <div className="bg-card-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="block text-2xl text-white font-black">Não encontrou seu duo?</strong>
            <span className="block text-zinc-400">Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className="bg-violet-500 hover:bg-violet-600 py-3 px-4 rounded text-white flex items-center gap-3">
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}
