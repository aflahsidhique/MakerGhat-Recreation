export default function EmptyState({ pageName }) {
  return (
    <section className="px-6 py-16 text-center" aria-live="polite">
      <h1 className="mb-[14px] font-display text-[40px] leading-[48px] text-mg-purple">{pageName}</h1>
      <p className="text-xl leading-[30px] text-mg-ink">No data to display</p>
    </section>
  )
}
