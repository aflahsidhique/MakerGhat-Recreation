import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import StoryTabs from './components/StoryTabs'
import EmptyState from './components/EmptyState'
import MakerGhatStoryPage from './pages/MakerGhatStoryPage'

const pages = [
  { id: 'story', label: 'MakerGhat story' },
  { id: 'team', label: 'MakerGhat team' },
  { id: 'support', label: 'Support system' },
  { id: 'volunteers', label: 'Volunteers & Alumni' },
]

export default function App() {
  const [activePage, setActivePage] = useState('story')
  const selectedPage = pages.find(page => page.id === activePage)
  const hasContent = activePage === 'story'

  return (
    <>
      <Header />
      <div className="relative mx-auto mt-10 w-[min(1281px,calc(100%-32px))] max-[900px]:mt-14 max-[900px]:w-[calc(100%-24px)] max-[560px]:w-full">
        <StoryTabs tabs={pages} activeTab={activePage} onTabChange={setActivePage} panelId="page-panel" />
        <main
          id="page-panel"
          className={`relative m-0 w-full rounded-tr-[20px] bg-mg-cream shadow-panel max-[900px]:rounded-tr-[18px] ${hasContent ? '' : 'grid min-h-[620px] place-items-center'}`}
          role="tabpanel"
          aria-labelledby={`page-tab-${activePage}`}
          tabIndex="0"
        >
          {hasContent ? <MakerGhatStoryPage /> : <EmptyState pageName={selectedPage.label} />}
        </main>
      </div>
      <Footer staticLayout={!hasContent} />
    </>
  )
}
