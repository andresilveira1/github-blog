import { api } from '../lib/axios'

const username = 'andresilveira1'
const repo = 'github-blog'

export async function getIssues(text?: string) {
  let response

  if (!text) {
    response = await api.get('/search/issues', {
      params: {
        q: `repo:${username}/${repo}`,
      },
    })

    return response.data
  }

  response = await api.get('/search/issues', {
    params: {
      q: `${text} repo:${username}/${repo}`,
    },
  })

  return response.data
}
