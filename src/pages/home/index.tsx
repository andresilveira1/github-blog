import { AxiosError } from 'axios'
import { useCallback, useEffect, useState } from 'react'

import { getIssues } from '../../api/get-issues'
import { Card } from './components/card'
import { Profile } from './components/profile'
import { Search } from './components/search'

interface issuesResponseProps {
  id: number
  title: string
  created_at: string
  body: string
  number: number
}

interface issueProps {
  id: number
  title: string
  createdAt: string
  description: string
  number: number
}

export function Home() {
  const [repositoryIssues, setRepositoryIssues] = useState<
    issueProps[] | undefined
  >([])

  async function fetchData(title?: string) {
    try {
      const issue: issueProps[] = await getIssues(title).then(({ items }) => {
        return items.map((issue: issuesResponseProps) => {
          return {
            id: issue.id,
            title: issue.title,
            description: issue.body,
            createdAt: issue.created_at,
            number: issue.number,
          }
        })
      })

      setRepositoryIssues(issue)
    } catch (error) {
      if (error instanceof AxiosError && error.status === 422) {
        alert(
          'Nome de usuário ou repositório incorretos. Por favor, corrija as informações e tente novamente.',
        )
      }

      if (error instanceof AxiosError && error.status === 403) {
        alert(
          'Você atingiu o limite de 10 requisições por minuto. Espere um momento e atualize a página.',
        )
      }
    }
  }

  const searchByIssueName = useCallback(async (text: string) => {
    await fetchData(text)
  }, [])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="p-8 pt-0">
      <Profile />

      <Search
        searchByIssueName={searchByIssueName}
        issues={repositoryIssues?.length}
      />

      <main className="grid grid-cols-2 gap-8">
        <Card data={repositoryIssues} />
      </main>
    </div>
  )
}
