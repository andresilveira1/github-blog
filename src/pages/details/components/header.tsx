import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
  FaAngleLeft,
  FaArrowUpRightFromSquare,
  FaCalendarDay,
  FaComment,
  FaGithub,
} from 'react-icons/fa6'
import { NavLink, useParams } from 'react-router-dom'

import { Skeleton } from '@/components/ui/skeleton'

import { repositoryName, username } from '../../../api/get-issue-details'

interface HeaderProps {
  data: {
    title: string
    comments: number
    created_at?: string
    user: {
      login: string
    }
  }
}

export function Header({ data }: HeaderProps) {
  const { id } = useParams()

  return (
    <header className="rounded-[10px] bg-base-profile px-10 py-8">
      <nav className="mb-5 flex items-center justify-between text-xs font-bold uppercase text-base-blue">
        <NavLink
          to="/"
          className="flex items-center gap-2 hover:text-base-blue/60"
        >
          <FaAngleLeft />
          voltar
        </NavLink>

        <NavLink
          to={`https://github.com/${username}/${repositoryName}/issues/${id}`}
          target="_blank"
          className="flex items-center gap-2 hover:text-base-blue/60"
        >
          ver no github <FaArrowUpRightFromSquare />
        </NavLink>
      </nav>

      {data.title ? (
        <h1 className="text-2xl font-bold text-base-title">{data.title}</h1>
      ) : (
        <Skeleton className="h-8 w-72 flex-1 rounded-lg" />
      )}

      <ul className="mt-2 flex space-x-6">
        <li className="flex items-center gap-2">
          <FaGithub className="h-5 w-5 text-base-label" />
          {data.user?.login ? (
            <span className="text-base-subtitle">{data.user.login}</span>
          ) : (
            <Skeleton className="h-5 w-32 flex-1 rounded-lg" />
          )}
        </li>
        <li className="flex items-center gap-2">
          <FaCalendarDay className="h-5 w-5 text-base-label" />
          {data.created_at ? (
            <span className="text-base-subtitle">
              {data.created_at &&
                formatDistanceToNow(data.created_at, {
                  locale: ptBR,
                  addSuffix: true,
                })}
            </span>
          ) : (
            <Skeleton className="h-5 w-32 flex-1 rounded-lg" />
          )}
        </li>
        <li className="flex items-center gap-2">
          <FaComment className="h-5 w-5 text-base-label" />
          {data.comments?.toFixed() ? (
            <span className="text-base-subtitle">
              {data.comments} comentário(s)
            </span>
          ) : (
            <Skeleton className="h-5 w-32 flex-1 rounded-lg" />
          )}
        </li>
      </ul>
    </header>
  )
}
