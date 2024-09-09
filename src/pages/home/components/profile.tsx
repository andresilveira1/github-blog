import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import {
  FaArrowUpRightFromSquare,
  FaBuilding,
  FaGithub,
  FaUserGroup,
} from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

import { getProfile, GetProfileResponse } from '../../../api/get-profile'

export function Profile() {
  const [userData, setUserData] = useState<GetProfileResponse>(
    {} as GetProfileResponse,
  )

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getProfile()

        setUserData(result)
      } catch (error) {
        if (error instanceof AxiosError && error.status === 404) {
          alert('Usuário não encontrado.')
        }
      }
    }

    fetchData()
  }, [])

  return (
    <header className="flex items-center gap-8 rounded-[10px] bg-base-profile px-10 py-8">
      <img
        src={`https://github.com/${userData.login}.png`}
        alt=""
        className="h-36 w-36 rounded-lg"
      />

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-base-title">
            {userData?.name}
          </h1>

          <NavLink
            to={`https://github.com/${userData.login}`}
            target="_blank"
            className="flex items-center gap-2 text-xs font-bold text-base-blue"
          >
            GITHUB <FaArrowUpRightFromSquare />
          </NavLink>
        </div>

        <p className="line-clamp-2 text-base-text">
          {userData?.bio ? userData.bio : 'Não informado'}
        </p>

        <ul className="mt-6 flex space-x-6">
          <li className="flex items-center gap-2">
            <FaGithub className="h-5 w-5 text-base-label" />
            <span className="text-base-subtitle">{userData.login}</span>
          </li>
          <li className="flex items-center gap-2">
            <FaBuilding className="h-5 w-5 text-base-label" />
            <span className="text-base-subtitle">
              {userData.company ? userData.company : 'Não informado'}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <FaUserGroup className="h-5 w-5 text-base-label" />
            <span className="text-base-subtitle">
              {userData.followers} seguidores
            </span>
          </li>
        </ul>
      </div>
    </header>
  )
}
