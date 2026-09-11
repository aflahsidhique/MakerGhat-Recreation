import Logo from './Logo'

const resources = ['Blueprint for our makerspaces', 'IGNITE Incubator Program', 'MakerGaon Fellowship', 'Curriculum Resources', 'Dashboard', 'Reports']
const links = ['Space', 'Curriculum', 'Training', 'Evidence']
const linkClass = 'text-sm leading-6 text-[#f1eef9] no-underline hover:text-white hover:underline'

export default function Footer({ staticLayout = false }) {
  return (
    <footer id="connect" className={`relative z-[4] bg-transparent text-white ${staticLayout ? 'mt-0' : '-mt-[282px] max-[900px]:-mt-px'}`}>
      <div className="h-[98px] bg-[url('/assets/figma/imgGroup259.svg')] bg-cover bg-bottom bg-no-repeat max-[900px]:bg-mg-cream" aria-hidden="true" />
      <div className="bg-mg-purple">
        <div className="mx-auto grid min-h-[476px] w-[min(1216px,calc(100%-48px))] grid-cols-[1.2fr_1.1fr_.8fr_1.3fr] gap-[60px] pb-[42px] pt-[68px] max-[900px]:grid-cols-2 max-[900px]:gap-[34px] max-[900px]:pt-[42px] max-[560px]:grid-cols-1">
          <div>
            <h2 className="font-display text-5xl leading-[56px] max-[900px]:text-[38px] max-[900px]:leading-[44px]">Connect<br />with Us</h2>
            <p className="text-sm leading-6 text-[#f1eef9]">About Us</p>
            <div className="mt-[34px]"><p className="text-sm leading-6 text-[#f1eef9]">● &nbsp;+91 9447756484</p><p className="text-sm leading-6 text-[#f1eef9]">● &nbsp;info@makerghat.org</p></div>
          </div>
          <div><h3 className="mb-5 mt-2 font-display text-xl">Resources</h3><ul className="m-0 list-none p-0">{resources.map(item => <li className="text-sm leading-6 text-[#f1eef9]" key={item}><a className={linkClass} href="#top">{item}</a></li>)}</ul></div>
          <div><h3 className="mb-5 mt-2 font-display text-xl">FAQs</h3><ul className="m-0 list-none p-0">{links.map(item => <li className="text-sm leading-6 text-[#f1eef9]" key={item}><a className={linkClass} href="#top">{item}</a></li>)}</ul></div>
          <div>
            <Logo inverse />
            <a href="mailto:info@makerghat.org?subject=Newsletter" className="mt-[34px] inline-flex rounded-[20px] bg-mg-coral px-6 py-[10px] text-base text-white no-underline hover:text-white hover:underline">Subscribe to our newsletter</a>
            <div className="mt-[26px] border-t border-white/45 pt-[17px] tracking-[.65em]" aria-label="Social links">● ● ● ●</div>
            <p className="mt-[30px] text-[11px] leading-6 text-[#f1eef9]">MakerGhat and its assets are licensed under CC BY-SA 4.0</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
