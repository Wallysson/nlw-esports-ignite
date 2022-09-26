interface AdsInfoProps {
  label: string
  value: string
  color?: string
}

export function AdsInfo({ label, value, color = '#fff' }: AdsInfoProps) {
  return (
    <div className="flex flex-col mb-2">
      <strong className="text-zinc-400">{label}</strong>
      <span className="font-bold text-white" style={{ color: color }}>
        {value}
      </span>
    </div>
  )
}
