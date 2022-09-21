import { MagnifyingGlassPlus } from "phosphor-react"
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner() {
  return (
    <div className="pt-1 mt-8 bg-nlw-gradient w-[90%] md:w-full rounded-lg overflow-hidden">
    <div className="bg-[#2a2634] px-8 py-6 rounded-t-3xl md:rounded-t-lg flex flex-col md:flex-row md:justify-between text-center md:text-left items-center gap-10">
      <div>
        <strong 
          className="block text-2xl text-white font-black"
        >
          Não encontrou seu duo?
        </strong>
        <span 
          className="block text-zinc-400 mt-0 text-lg md:text-sm"
        >
          Publique um anúncio para encontrar novos players!
        </span>
      </div>
      <Dialog.Trigger 
        className="bg-violet-500 hover:bg-violet-600 py-2 px-3 rounded text-sm text-white flex items-center gap-2 
        md:py-3 md-px-4 md-gap-3 md-text-base"
      >
        <MagnifyingGlassPlus size={24}/>
        Publicar anúncio
      </Dialog.Trigger>
    </div>
  </div>
  )
}