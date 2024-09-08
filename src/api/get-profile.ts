import { api } from '../lib/axios'

export interface GetProfileResponse {
  name: string
  bio: string
  login: string
  company: string
  followers: number
}

const username = 'andresilveira1'

export async function getProfile() {
  const response = await api
    .get<GetProfileResponse>(`/users/${username}`)
    .then(({ data }) => {
      return {
        name: data.name,
        bio: data.bio,
        login: data.login,
        company: data.company,
        followers: data.followers,
      }
    })

  return response
}
