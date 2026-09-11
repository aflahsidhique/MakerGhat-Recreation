export default function Logo({ inverse = false }) {
  if (inverse) {
    return (
      <a href="#top" className="flex h-[79px] w-[170px] items-center max-[900px]:h-[51px] max-[900px]:w-[108px]" aria-label="MakerGhat home">
        <img className="h-[79px] w-20 object-fill" src="/assets/footer-hand.svg" alt="" aria-hidden="true" />
        <img className="-ml-[15px] h-[57px] w-[105px] object-fill brightness-0 invert" src="/assets/footer-wordmark.svg" alt="" aria-hidden="true" />
      </a>
    )
  }
  return (
    <a href="#top" className="block h-[60px] w-32 max-[900px]:h-[51px] max-[900px]:w-[108px]" aria-label="MakerGhat home">
      <img className="block h-[60px] w-32 object-fill max-[900px]:h-[51px] max-[900px]:w-[108px]" src="/assets/makerghat-logo.svg" alt="" aria-hidden="true" />
    </a>
  )
}
