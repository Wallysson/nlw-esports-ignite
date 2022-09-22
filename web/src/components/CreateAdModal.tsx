import { Check, GameController } from 'phosphor-react'
import { Input } from './Form/Input'
import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as Select from '@radix-ui/react-select'
import { useEffect, useState, FormEvent } from 'react'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import axios from 'axios'

interface GameProps {
  id: string
  title: string
}

export function CreateAdModal() {
  const [games, setGames] = useState<GameProps[]>([])
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setVoiceChannel] = useState(false)
  const [currentGame, setCurrentGame] = useState('')

  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
      setGames(response.data)
    })
  }, [])

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    if (!data.name) {
      return
    }

    try {
      await axios.post(`http://localhost:3333/games/${currentGame}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel
      })

      alert('Anúncio criado com sucesso!')
    } catch (err) {
      console.log(err)
      alert('Erro ao criar anúncio')
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60" />

      <Dialog.Content
        className="fixed bg-[#2A2634] py-8 px-10 text-white inset-0
              h-screen w-screen shadow-lg shadow-black/25 overflow-y-auto
              md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[480px] md:h-5/6
              "
      >
        <Dialog.Title className="text-2xl font-black text-center md:text-3xl">
          Publique um anúncio
        </Dialog.Title>
        <form className="mt-8 flex flex-col gap-4 " onSubmit={handleCreateAd}>
          <div className="flex flex-col gap-2">
            <label htmlFor="game">Qual o game?</label>
            <Select.Root
              name="game"
              value={currentGame}
              onValueChange={value => setCurrentGame(value)}
            >
              <Select.Trigger
                id="game"
                className="bg-zinc-900 py-3 px-4 rounded text-sm flex justify-between items-center"
              >
                <Select.Value
                  placeholder={
                    <span className="text-zinc-500 text-sm">
                      Selecione o game que deseja jogar
                    </span>
                  }
                />
                <Select.Icon />
              </Select.Trigger>

              <Select.Portal>
                <Select.Content>
                  <Select.Viewport className="bg-zinc-900 py-3 px-4 rounded text-sm cursor-pointer text-zinc-400">
                    {games.map(game => {
                      return (
                        <Select.Item
                          key={game.id}
                          value={game.id}
                          className="flex justify-between items-center"
                        >
                          <Select.ItemText>{game.title}</Select.ItemText>
                          {currentGame === game.id && (
                            <Select.ItemIndicator>
                              <Check />
                            </Select.ItemIndicator>
                          )}
                        </Select.Item>
                      )
                    })}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <Input
              name="name"
              id="name"
              placeholder="Como te chamam dentro do game?"
            />
          </div>

          <div className="block md:grid md:grid-cols-2 md:gap-6">
            <div className="mb-2 md:mb-0 flex flex-col gap-2">
              <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
              <Input
                name="yearsPlaying"
                id="yearsPlaying"
                type="number"
                placeholder="Tudo bem ser ZERO"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="discord">Qual seu discord?</label>
              <Input name="discord" id="discord" placeholder="Usuario#0000" />
            </div>
          </div>

          <div className="flex gap-6 ">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays">Quando costuma jogar?</label>
              <ToggleGroup.Root
                type="multiple"
                // className="grid grid-cols-4 gap-2"
                className="flex gap-2 flex-wrap"
                value={weekDays}
                onValueChange={setWeekDays}
              >
                <ToggleGroup.Item
                  value="0"
                  title="Domingo"
                  className={`w-8 h-8 rounded text-sm ${
                    weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  D
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="1"
                  title="Segunda"
                  className={`w-8 h-8 rounded text-sm ${
                    weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="2"
                  title="Terça"
                  className={`w-8 h-8 rounded text-sm ${
                    weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  T
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="3"
                  title="Quarta"
                  className={`w-8 h-8 rounded text-sm ${
                    weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="4"
                  title="Quinta"
                  className={`w-8 h-8 rounded text-sm ${
                    weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="5"
                  title="Sexta"
                  className={`w-8 h-8 rounded text-sm ${
                    weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="6"
                  title="Sábado"
                  className={`w-8 h-8 rounded text-sm ${
                    weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  S
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="hourStart">Qual horário do dia?</label>
            <div className="grid grid-cols-2 gap-2">
              <Input
                name="hourStart"
                id="hourStart"
                type="time"
                placeholder="De"
              />
              <Input
                name="hourEnd"
                id="hourEnd"
                type="time"
                placeholder="Até"
              />
            </div>
          </div>

          <label className="mt-2 flex gap-2 text-sm items-center">
            <Checkbox.Root
              checked={useVoiceChannel}
              onCheckedChange={checked => {
                if (checked === true) {
                  setVoiceChannel(true)
                } else {
                  setVoiceChannel(false)
                }
              }}
              className="w-6 h-6 p-1 rounded bg-zinc-900"
            >
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>

          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              type="button"
              className="bg-zinc-500 px-2 h-12 md:px-5 rounded-md font-semibold hover:bg-zinc-600 text-sm md:text-base md:px5"
            >
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="bg-violet-500 px-2 h-12 rounded-md font-semibold flex items-center gap-2 hover:bg-violet-600 text-sm md:gap-3 md:text-base md:px-5"
            >
              <GameController className="w-5 h-5 md:w-6 md:w-6" />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
