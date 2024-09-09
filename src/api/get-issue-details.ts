import { api } from '../lib/axios'

// On github issues api a issue is returned by a param called number, which we can consider that by created order.

export const username = 'andresilveira1'
export const repositoryName = 'github-blog'

export async function getIssueDetails(number: string) {
  const response = await api.get(
    `/repos/${username}/${repositoryName}/issues/${number}`,
  )

  return response.data
}
