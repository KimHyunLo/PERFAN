import { useQuery } from '@tanstack/react-query'
import { getProjects } from '../../services/apiProjects'

export function useProjects() {
  const { isLoading, data: projects } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  })

  return { isLoading, projects }
}
