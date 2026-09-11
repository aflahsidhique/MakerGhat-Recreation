import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { timeline } from '../data/timeline'
import FigmaRoute from './FigmaRoute'
import YearCard from './YearCard'

gsap.registerPlugin(ScrollTrigger)

const decorations = [
  ['imgLayer2.svg', 398, 277, 58, 58],
  ['imgLayer3.svg', 826, 591, 60, 66],
  ['imgLayer4.svg', 799, 655, 31, 35],
  ['imgLayer5.svg', 781, 1597, 189, 168],
  ['imgLayer6.svg', 133, 450, 146, 196],
  ['imgVector211.svg', 279, 786, 235, 183],
  ['imgLayer7.svg', 753, 1062, 70, 64],
  ['imgLayer8.svg', 883, 914, 215, 215],
  ['imgVector212.svg', 443, 1114, 97, 97],
  ['imgLayer9.svg', 797, 269, 66, 69],
  ['imgGroup413.svg', 64, 130, 84, 143],
  ['imgLayer10.svg', 1058, 444, 146, 137],
  ['imgGroup435.svg', 1131, 1215, 77, 80],
  ['imgVector218.svg', 477, 631, 104, 70],
]

const arrows = [
  [564,77,58,26,0], [622,724,58,26,0], [458,1520,58,26,0],
  [1166,810,26,58,90], [671,398,58,26,180], [888,1200,58,26,180],
  [71,1082,26,58,90], [1166,1553,26,58,90], [1173,177,26,58,90], [68,542,26,58,90],
]

function CopyBlock({ title, children, className = '' }) {
  return (
    <section className={`absolute z-[2] max-[900px]:static max-[900px]:h-auto max-[900px]:w-full max-[900px]:max-w-[calc(100vw-48px)] ${className}`}>
      <h2 className="mb-4 font-display text-4xl font-semibold leading-[44px] text-mg-purple max-[900px]:text-[30px] max-[900px]:leading-[38px]">{title}</h2>
      <p className="text-lg leading-7 text-mg-ink max-[900px]:mt-0 max-[900px]:text-[17px] max-[900px]:leading-[27px]">{children}</p>
    </section>
  )
}

export default function IntroJourney() {
  const introSection = useRef(null)
  const journeySection = useRef(null)
  
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.timeline-route').forEach(route => {
        const revealPath = route.querySelector('.timeline-reveal')
        const endDot = route.querySelector('.timeline-end-dot')
        const length = revealPath.getTotalLength()

        gsap.set(revealPath, { strokeDasharray: length, strokeDashoffset: length })
        gsap.set(endDot, { scale: 0, opacity: 0, transformOrigin: '50% 50%' })

        const routeTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: introSection.current,
            endTrigger: journeySection.current,
            start: 'top 50%',
            end: '90% 90%',
            scrub: 0.2,
          },
        })

        routeTimeline.to(revealPath, { strokeDashoffset: 0, duration: 1, ease: 'none' }, 0)
        routeTimeline.to(endDot, { scale: 1, opacity: 1, duration: 0.04, ease: 'back.out(2)' }, 0.96)
      })
    }, journeySection)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <div ref={introSection} id="story" className="relative h-[1066px] overflow-hidden max-[900px]:flex max-[900px]:h-auto max-[900px]:flex-col max-[900px]:gap-[26px] max-[900px]:px-6 max-[900px]:pb-[54px] max-[900px]:pt-16">
        <CopyBlock title="Our mission" className="left-[53px] top-[68px] w-[402px]">
          Our mission is to make hands-on, maker-centered learning accessible across India, empowering young people to think critically, build confidently, and solve real-world problems beyond traditional classrooms.
        </CopyBlock>
        <img className="absolute right-0 top-[57px] block h-[194px] w-[292px] object-fill max-[900px]:static max-[900px]:h-auto max-[900px]:w-full max-[900px]:rounded-[18px]" src="/assets/figma/imgTower1.png" alt="Students building a structure together" />
        <img className="absolute left-4 top-[249px] block h-[297px] w-[397px] object-cover max-[900px]:static max-[900px]:order-3 max-[900px]:h-auto max-[900px]:w-full max-[900px]:rounded-[18px]" src="/assets/figma/imgTn31.png" alt="Students presenting a model road" />
        <CopyBlock title="Why making?" className="left-[790px] top-[333px] w-[365px] max-[900px]:order-4">
          Making bridges the gap between knowledge and application through experiential learning. It builds 21st-century skills that empowers our youth to become confident job-seekers and entrepreneurs.
        </CopyBlock>
        <CopyBlock title="How did MG start" className="left-[138px] top-[653px] w-[365px] [&>h2]:h-[60px] [&>p]:mt-[25px] max-[900px]:order-5 max-[900px]:[&>h2]:h-auto max-[900px]:[&>p]:mt-0">
          MG origin story featuring founders, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
        </CopyBlock>
        <img className="absolute right-[67px] top-[646px] block h-[403px] w-[592px] rounded-[20px] object-cover shadow-panel max-[900px]:static max-[900px]:order-6 max-[900px]:h-auto max-[900px]:w-full max-[900px]:rounded-[18px]" src="/assets/figma/img100035279511.png" alt="The MakerGhat team" />
        <img className="pointer-events-none absolute left-[577px] top-[103px] z-[1] h-[22px] w-[25px] max-[900px]:hidden" src="/assets/figma/imgGroup6.svg" alt="" aria-hidden="true" />
        <img className="pointer-events-none absolute left-[599px] top-[131px] z-[1] h-[22px] w-[25px] max-[900px]:hidden" src="/assets/figma/imgGroup7.svg" alt="" aria-hidden="true" />
        <img className="pointer-events-none absolute left-[616px] top-[109px] z-[1] h-[22px] w-[25px] max-[900px]:hidden" src="/assets/figma/imgGroup8.svg" alt="" aria-hidden="true" />
        <img className="pointer-events-none absolute right-[22px] top-[26px] z-[1] h-[55px] w-[55px] max-[900px]:hidden" src="/assets/figma/imgGroup414.svg" alt="" aria-hidden="true" />
        <img className="pointer-events-none absolute left-[139px] top-[919px] z-[1] h-[200px] w-[480px] max-[900px]:hidden" src="/assets/figma/groups/origin-illustration.svg" alt="" aria-hidden="true" />
      </div>

      <section ref={journeySection} id="journey" className="relative h-[2362px] overflow-visible max-[900px]:h-auto max-[900px]:min-h-0 max-[900px]:pb-40 max-[900px]:pl-[60px] max-[900px]:pr-5 max-[900px]:pt-11" aria-label="MakerGhat timeline, 2018 to 2026">
        <FigmaRoute />
        <svg className="timeline-route mobile-route pointer-events-none absolute inset-0 hidden h-full w-20 max-[900px]:block" viewBox="0 0 80 2050" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <mask id="mobile-timeline-reveal" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="2050">
              <path className="timeline-reveal" d="M38 8 V2042" fill="none" stroke="white" strokeWidth="11" strokeLinecap="round" />
            </mask>
          </defs>
          <g mask="url(#mobile-timeline-reveal)">
            <path d="M38 8 V2042" fill="none" stroke="#58ad6f" strokeWidth="7" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            <path d="M38 8 V2042" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          </g>
          <circle className="timeline-end-dot origin-center [transform-box:fill-box]" cx="38" cy="2042" r="9" fill="#58ad6f" opacity="0" />
        </svg>
        <div className="pointer-events-none absolute inset-0 z-[1] max-[900px]:hidden" aria-hidden="true">
          {decorations.map(([file, left, top, width, height]) => <img key={file} className="absolute block max-w-none" src={`/assets/figma/${file}`} alt="" style={{ left, top, width, height }} />)}
          {arrows.map(([x,y,w,h,rotate], index) => (
            <img key={index} className="absolute block max-w-none animate-arrow-color-loop motion-reduce:animate-none" src="/assets/figma/imgProperty1Default.svg" alt="" style={{ left: x, top: y, width: w, height: h, transform: `rotate(${rotate}deg)`, animationDelay: `${index * -0.14}s` }} />
          ))}
        </div>
        <div className="absolute inset-0 max-[900px]:relative max-[900px]:grid max-[900px]:gap-11">{timeline.map(item => <YearCard key={item.year} item={item} />)}</div>
      </section>
    </>
  )
}
