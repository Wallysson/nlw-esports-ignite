import axios from 'axios'
import { ToastContainer, toast, Zoom, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { CheckCircle, X } from 'phosphor-react'

interface DuoMatchProps {
  adsId: string
}

export function DuoMatch({ adsId }: DuoMatchProps) {
  const [discordDuo, setDiscordDuo] = useState('')
  const [isCopping, setIsCopping] = useState(false)
  function handleCopyToClipboardSelectedDiscordDuo() {
    navigator.clipboard.writeText(discordDuo)
    toast.success('Usuário copiado', {
      icon: '📋',
      position: 'top-right',
      theme: 'dark',
      autoClose: 2000,
      progressStyle: {
        background: '#8B5CF6'
      }
    })
  }

  useEffect(() => {
    async function getDiscordUser() {
      await axios(`http://localhost:3333/ads/${adsId}/discord`).then(
        response => {
          setDiscordDuo(response.data.discord)
        }
      )
    }
    getDiscordUser()
  }, [])

  return (
    <Dialog.Portal>
      <ToastContainer transition={Flip} />
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white inset-0 flex flex-col overflow-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[calc(100%-32px)] md:w-[480px] h-auto justify-center items-center">
        <Dialog.Close
          type="reset"
          className="absolute top-6 right-6 text-zinc-500 px-5 h-12 rounded-md font-semibold hover:text-zinc-600"
        >
          <X size={30} />
        </Dialog.Close>

        <CheckCircle size={70} color="#34D399" weight={'bold'} />
        <Dialog.Title className="text-4xl mt-4 font-black mb-2">
          Let's Play
        </Dialog.Title>
        <span className="text-zinc-400 text-xl mb-8">
          Agora é só começar a jogar
        </span>

        <label className="label font-bold">Adicione no Discord</label>
        <button
          className="bg-zinc-700 hover:bg-zinc-900 rounded py-3 flex w-full justify-center mt-2"
          onClick={handleCopyToClipboardSelectedDiscordDuo}
          disabled={isCopping}
        >
          <div className="text-zinc-200">{discordDuo}</div>
        </button>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
