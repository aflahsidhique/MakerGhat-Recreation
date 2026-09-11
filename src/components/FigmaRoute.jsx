const routePath = 'M1231.5 5H675.5C664.454 5 655.5 13.9543 655.5 25V288.5C655.5 299.546 646.546 308.5 635.5 308.5H18.994C11.2653 308.5 5 314.765 5 322.494V458.568V608.635V858.757C5 869.803 13.9543 878.757 25 878.757H554.5C565.546 878.757 574.5 887.711 574.5 898.757V900.5C574.5 911.546 583.454 920.5 594.5 920.5H1121H1147.5C1158.55 920.5 1167.5 929.454 1167.5 940.5V1182.5C1167.5 1193.55 1158.55 1202.5 1147.5 1202.5H25C13.9543 1202.5 5 1211.45 5 1222.5V1509.5C5 1520.55 13.9543 1529.5 25 1529.5H347L723.48 1531.44C734.485 1531.5 743.376 1540.44 743.376 1551.44V1552.95C743.376 1564.03 752.39 1573 763.473 1572.95L1147.4 1571.1C1158.49 1571.04 1167.5 1580.01 1167.5 1591.1V1984.5C1167.5 1995.55 1158.55 2004.5 1147.5 2004.5H919.75H632.824C621.847 2004.5 612.922 1995.65 612.825 1984.68L612.5 1948V1751.5C612.5 1740.45 603.546 1731.5 592.5 1731.5H566C554.954 1731.5 546 1740.45 546 1751.5V1812.56C546 1823.67 536.945 1832.65 525.836 1832.56L320.653 1830.87L24.8828 1832.6C13.8831 1832.67 5 1841.6 5 1852.6V2300C5 2311.05 13.9543 2320 25 2320H586.25H1148.11C1158.91 2320 1167.77 2328.58 1168.1 2339.38L1177.36 2639.2C1177.71 2650.48 1168.66 2659.81 1157.37 2659.81H675.5C664.454 2659.81 655.5 2650.86 655.5 2639.81V2616C655.5 2604.95 646.546 2596 635.5 2596H568.75H482'

export default function FigmaRoute() {
  return (
    <div className="figma-route pointer-events-none absolute left-[55px] top-[-824px] z-[1] h-[2665px] w-[1232px] max-[900px]:hidden" aria-hidden="true">
      <svg className="timeline-route absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 1231.5 2664.81" preserveAspectRatio="none">
        <defs>
          <mask id="desktop-timeline-reveal" maskUnits="userSpaceOnUse" x="-20" y="-20" width="1272" height="2705">
            <path className="timeline-reveal" d={routePath} fill="none" stroke="white" strokeWidth="14" />
          </mask>
        </defs>
        <g mask="url(#desktop-timeline-reveal)">
          <path d={routePath} fill="none" stroke="#58AD6F" strokeWidth="10" />
          <path d={routePath} fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
        </g>
        <circle className="timeline-end-dot origin-center [transform-box:fill-box]" cx="482" cy="2596" r="12" fill="#58AD6F" opacity="0" />
      </svg>
    </div>
  )
}
