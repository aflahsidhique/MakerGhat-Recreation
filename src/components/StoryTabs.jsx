import { useRef } from 'react'

const tabStyles = [
  'z-[4] w-[231px] bg-mg-cream',
  'z-[3] -ml-8 w-[254px] bg-[#f1eef9] max-[900px]:-ml-3',
  'z-[2] ml-[-35px] w-[231px] bg-[#fff3cc] max-[900px]:-ml-3',
  'z-[1] -ml-[30px] w-[231px] bg-[#fdeae5] max-[900px]:-ml-3',
]

export default function StoryTabs({ tabs, activeTab, onTabChange, panelId }) {
  const tabRefs = useRef([])

  const handleKeyDown = (event, index) => {
    let nextIndex

    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = tabs.length - 1
    if (nextIndex === undefined) return

    event.preventDefault()
    onTabChange(tabs[nextIndex].id)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <nav className="no-scrollbar relative z-[5] flex h-14 items-end overflow-visible max-[900px]:h-12 max-[900px]:w-full max-[900px]:overflow-x-auto max-[900px]:overflow-y-hidden" role="tablist" aria-label="About MakerGhat">
      {tabs.map((tab, index) => {
        const selected = tab.id === activeTab

        return (
          <button
            key={tab.id}
            id={`page-tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls={panelId}
            tabIndex={selected ? 0 : -1}
            className={`relative grid h-14 flex-none cursor-pointer place-items-center whitespace-nowrap rounded-t-[20px] border-0 p-0 font-body text-lg font-normal leading-7 text-[#111] shadow-tab hover:brightness-[.985] max-[900px]:h-12 max-[900px]:w-auto max-[900px]:min-w-max max-[900px]:px-7 max-[900px]:text-[15px] ${tabStyles[index]} ${selected ? 'z-[6] font-semibold' : ''}`}
            onClick={() => onTabChange(tab.id)}
            onKeyDown={event => handleKeyDown(event, index)}
            ref={element => { tabRefs.current[index] = element }}
          >
            {tab.label}
          </button>
        )
      })}
    </nav>
  )
}
