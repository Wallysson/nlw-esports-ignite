import { AdsInfo } from './AdsInfo'
import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react'
import { DuoMatch } from './DuoMatch'

interface AdsProps {
  id: string
  name: string
  weekDays: string[]
  useVoiceChannel: boolean
  yearsPlaying: number
  hourStart: string
  hourEnd: string
}

interface Props {
  data: AdsProps
}

export function AdsDuo({ data }: Props) {
  const weekDays =
    data.weekDays.length > 1
      ? `${data.weekDays.length} dias`
      : `${data.weekDays.length} dia`

  const hours = `${data.hourStart} - ${data.hourEnd}`

  return (
    <div className="bg-[#2A2634] rounded-lg p-5 keen-slider__slide cursor-pointer min-w-fit ">
      <AdsInfo label="Nome" value={data.name} />
      <AdsInfo
        label="Tempo de jogo"
        value={
          data.yearsPlaying > 1
            ? `${data.yearsPlaying} anos`
            : `${data.yearsPlaying} ano`
        }
      />
      <AdsInfo label="Disponibilidade" value={`${weekDays} \u2022 ${hours}`} />
      <AdsInfo
        label="Chamada de áudio?"
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
        color={data.useVoiceChannel ? '#34D399' : '#F87171'}
      />
      <Dialog.Root>
        <Dialog.Trigger className="w-full h-9 rounded-md bg-violet-500 hover:bg-violet-600 flex items-center justify-center">
          <GameController color="#FFF" size={18} />
          <span className="ml-2 font-bold text-white">Conectar</span>
        </Dialog.Trigger>

        <DuoMatch adsId={data.id} />
      </Dialog.Root>
    </div>
  )
}
