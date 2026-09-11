import { useState } from 'react'
import Logo from './Logo'

const nav = [
  ['About us', '#story', true],
  ['Space', '#journey'],
  ['Curriculum', '#mission', true],
  ['Training', '#journey', true],
  ['Evidence', '#journey'],
  ['Programs', '#journey', true],
  ['Get involved', '#connect'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header id="top" className="relative z-50 h-[109px] bg-white max-[900px]:h-[84px]">
      <div className="flex h-[109px] w-full items-center justify-between px-10 py-5 max-[900px]:h-[84px] max-[900px]:px-5 max-[900px]:py-3">
        <Logo />
        <nav className="flex items-center justify-end max-[900px]:hidden" aria-label="Primary navigation">
          {nav.map(([label, href, plain], index) => (
            <a className={`-ml-3 whitespace-nowrap rounded-[10px] px-5 py-[10px] text-lg leading-7 text-[#111] no-underline hover:bg-mg-cream hover:text-mg-purple ${index === 0 ? 'px-7' : ''}`} key={label} href={href}>
              {label}{!plain && <span className="ml-[5px] text-[13px]" aria-hidden="true">⌄</span>}
            </a>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="absolute right-5 top-[22px] hidden gap-[5px] rounded-[10px] border-0 bg-[#f1eef9] p-[10px] max-[900px]:grid" aria-expanded={open} aria-label="Toggle navigation">
          <span className="block h-0.5 w-[25px] bg-mg-purple" /><span className="block h-0.5 w-[25px] bg-mg-purple" /><span className="block h-0.5 w-[25px] bg-mg-purple" />
        </button>
      </div>
      {open && (
        <nav className="absolute right-4 top-[72px] grid w-[min(280px,calc(100vw-32px))] rounded-2xl bg-white p-3 shadow-[0_14px_40px_rgba(54,44,95,.2)]" aria-label="Mobile navigation">
          {nav.map(([label, href]) => <a className="px-[14px] py-[10px] text-mg-purple no-underline" key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
      )}
    </header>
  )
}
