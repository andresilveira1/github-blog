import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { NavLink } from 'react-router-dom'

import { Skeleton } from '@/components/ui/skeleton'

interface CardProps {
  data:
    | {
        id: number
        title: string
        createdAt: string
        description: string
        number: number
      }[]
    | undefined
}

export function Card({ data }: CardProps) {
  return (
    <>
      {data && data.length > 0 ? (
        data?.map((issue) => {
          return (
            <NavLink
              to={`details/${issue.number}`}
              key={issue.id}
              className="h-[260px] w-[416px] space-y-5 rounded-lg bg-base-post p-8 hover:bg-base-post/70"
            >
              <div className="flex items-start">
                <h2 className="w-[283px] text-xl font-bold text-base-title">
                  {issue.title}
                </h2>
                <span className="text-sm text-base-span">
                  {formatDistanceToNow(issue.createdAt, {
                    locale: ptBR,
                    addSuffix: true,
                  })}
                </span>
              </div>

              <p className="line-clamp-4 text-base-text">{issue.description}</p>
            </NavLink>
          )
        })
      ) : (
        <Skeleton className="h-[260px] w-[416px] rounded-lg" />
      )}
    </>
  )
}
