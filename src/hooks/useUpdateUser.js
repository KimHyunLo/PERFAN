import { useQuery } from '@tanstack/react-query'
import { updateUser } from '../services/apiUser'

export function useUpdateUser() {
  const { data: user, isLoading: isUpdateting } = useQuery({
    queryKey: ['user'],
    queryFn: updateUser,
  })

  return { user, isUpdateting }
}
