import { useState } from 'react'

export default function YearCard({ item }) {
  const [open, setOpen] = useState(false)
  const details = item.details ?? [item.text]
  const { x, y, w, h, lx, ly } = item.position
  const style = {
    '--item-x': `${x}px`, '--item-y': `${y}px`, '--item-w': `${w}px`, '--item-h': `${h}px`,
    '--label-x': `${lx}px`, '--label-y': `${ly}px`,
  }
  const imageStyle = item.crop ? {
    width: `${item.crop.width}%`, height: `${item.crop.height}%`, left: `${item.crop.left}%`, top: `${item.crop.top}%`,
  } : undefined
  const activeImage = open ? 'saturate-[1.08] -translate-y-1' : ''
  const activeCopy = open ? 'opacity-100 translate-y-0 max-[900px]:mb-[18px] max-[900px]:max-h-[420px] max-[900px]:px-[22px] max-[900px]:py-5' : ''

  return (
    <article className={`group/year absolute z-[2] flex-none left-[var(--item-x)] top-[var(--item-y)] h-[var(--item-h)] w-[var(--item-w)] hover:z-20 focus-within:z-20 max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:flex max-[900px]:h-auto max-[900px]:w-full max-[900px]:flex-col ${open ? 'z-20' : ''}`} style={style} id={`year-${item.year}`}>
      <span className="pointer-events-none absolute inset-0 block overflow-hidden max-[900px]:relative max-[900px]:order-2 max-[900px]:w-full max-[900px]:aspect-[1.35]">
        <img src={item.image} alt="" className={`absolute inset-0 block h-full w-full max-w-none object-cover transition duration-200 group-hover/year:-translate-y-1 group-hover/year:saturate-[1.08] group-focus-within/year:-translate-y-1 group-focus-within/year:saturate-[1.08] max-[900px]:!left-0 max-[900px]:!top-0 max-[900px]:!h-full max-[900px]:!w-full ${activeImage}`} style={imageStyle} />
      </span>
      <button type="button" className="absolute left-[calc(var(--label-x)-var(--item-x))] top-[calc(var(--label-y)-var(--item-y))] z-[8] flex cursor-pointer items-center gap-[14px] whitespace-nowrap rounded-[20px] border-0 bg-mg-panel p-5 font-display text-5xl font-bold leading-[56px] text-mg-purple shadow-year max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:order-none max-[900px]:mb-[14px] max-[900px]:ml-[-8px] max-[900px]:self-start max-[900px]:rounded-[14px] max-[900px]:px-[15px] max-[900px]:py-[10px] max-[900px]:text-[30px] max-[900px]:leading-[38px]" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls={`year-copy-${item.year}`}>
        {item.year}<span className={`font-body text-[25px] leading-none text-mg-purple transition duration-200 max-[900px]:text-[17px] ${open ? 'rotate-180' : ''}`} aria-hidden="true">▼</span>
      </button>
      <div id={`year-copy-${item.year}`} className={`pointer-events-none absolute left-[calc(var(--label-x)-var(--item-x))] top-[calc(var(--label-y)-var(--item-y)+104px)] z-[7] w-[500px] translate-y-[10px] rounded-[20px] bg-mg-sand px-8 py-6 text-mg-purple opacity-0 transition duration-200 group-hover/year:translate-y-0 group-hover/year:opacity-100 group-focus-within/year:translate-y-0 group-focus-within/year:opacity-100 max-[900px]:relative max-[900px]:left-auto max-[900px]:top-auto max-[900px]:order-1 max-[900px]:mb-0 max-[900px]:max-h-0 max-[900px]:w-full max-[900px]:-translate-y-2 max-[900px]:overflow-hidden max-[900px]:px-[22px] max-[900px]:py-0 ${activeCopy}`}>
        <ul className="m-0 list-none p-0">{details.map((detail, index) => <li className={`relative pl-[18px] text-xl leading-[1.42] before:absolute before:left-0 before:content-['•'] max-[900px]:text-[17px] max-[900px]:leading-normal ${index ? 'mt-[15px]' : ''}`} key={detail}>{detail}</li>)}</ul>
      </div>
    </article>
  )
}
