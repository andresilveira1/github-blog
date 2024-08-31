export default function Search() {
  return (
    <div className="mb-12 mt-[72px] w-full space-y-3">
      <div className="flex items-center justify-between">
        <label
          htmlFor="search"
          className="text-lg font-bold text-base-subtitle"
        >
          Publicações
        </label>
        <span className="text-sm text-base-span">6 publicações</span>
      </div>

      <div className="rounded-md border border-base-border bg-base-input p-4 pb-3 pt-3">
        <input
          type="text"
          id="search"
          placeholder="Buscar conteúdo"
          className="w-full flex-1 bg-transparent text-base-text outline-none placeholder:text-base-label"
        />
      </div>
    </div>
  )
}
