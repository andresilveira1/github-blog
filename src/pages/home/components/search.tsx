import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

interface SearchProps {
  searchByIssueName: (text: string) => void
  issues: number | undefined
}

export function Search({ searchByIssueName, issues }: SearchProps) {
  const { register, handleSubmit } = useForm()
  const [search, setSearch] = useState('')

  const handleSearch = useCallback(() => {
    searchByIssueName(search)
  }, [search, searchByIssueName])

  useEffect(() => {
    handleSearch()
  }, [handleSearch])

  return (
    <form
      onSubmit={handleSubmit(handleSearch)}
      className="mb-12 mt-[72px] w-full space-y-3"
    >
      <div className="flex items-center justify-between">
        <label
          htmlFor="search"
          className="text-lg font-bold text-base-subtitle"
        >
          Publicações
        </label>
        <span className="text-sm text-base-span">{issues} publicações</span>
      </div>

      <div className="rounded-md border border-base-border bg-base-input p-4 pb-3 pt-3">
        <input
          type="text"
          id="search"
          placeholder="Buscar conteúdo"
          {...register('search', {
            onChange: (event) => {
              setSearch(event.target.value)
            },
            value: search,
          })}
          autoComplete="off"
          className="w-full flex-1 bg-transparent text-base-text outline-none placeholder:text-base-label"
        />
      </div>
    </form>
  )
}
