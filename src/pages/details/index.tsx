import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { useNavigate, useParams } from 'react-router-dom'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

import { getIssueDetails } from '../../api/get-issue-details'
import { Header } from './components/header'

interface ResponseProps {
  title: string
  body: string
  comments: number
  created_at: string
  user: {
    login: string
  }
}

export function Details() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [issueDetails, setIssueDetails] = useState<ResponseProps>(
    {} as ResponseProps,
  )

  useEffect(() => {
    async function fetchData() {
      try {
        const response: ResponseProps = await getIssueDetails(String(id))

        setIssueDetails(response)
      } catch (error) {
        if (error instanceof AxiosError && error.status === 404) {
          alert('Issue não encontrada.')
          navigate('/')
        }
      }
    }

    fetchData()
  }, [id, navigate])

  return (
    <div className="p-8 pt-0">
      <Header data={issueDetails} />

      <main className="p-10 pl-8 pr-8 text-base-text">
        <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {issueDetails.body}
        </Markdown>
      </main>
    </div>
  )
}
