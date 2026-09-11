export default function Hero() {
  return (
    <section className="relative pt-0">
      <div className="h-[186px] px-[46px] pb-0 pt-[103px] max-[900px]:h-auto max-[900px]:px-6 max-[900px]:pb-[34px] max-[900px]:pt-[38px]">
        <h1 className="font-display text-5xl font-bold leading-[56px] tracking-[-1.2px] text-mg-purple max-[900px]:w-[calc(100vw-48px)] max-[900px]:max-w-[calc(100vw-48px)] max-[900px]:text-[clamp(34px,9.7vw,40px)] max-[900px]:leading-[1.16] max-[900px]:[overflow-wrap:break-word] max-[560px]:w-auto max-[560px]:max-w-full max-[560px]:text-[34px]">The story that built MakerGhat</h1>
      </div>
      <div className="relative h-[393px] w-full overflow-hidden max-[900px]:h-[clamp(220px,49vw,393px)]">
        <img src="/assets/figma/img00AdditiveManufacturing051.png" alt="A yellow object being made on a Bambu Lab 3D printer" className="absolute left-0 top-[-69.57%] block h-[243.04%] w-[119.2%] max-w-none object-fill" />
      </div>
    </section>
  )
}
