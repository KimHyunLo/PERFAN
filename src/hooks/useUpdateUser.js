import { useMutation } from '@tanstack/react-query'
import { updateUser as updateUserApi } from '../services/apiUser'

export function useUpdateUser() {
  const { mutate: updateUser, isLoading: isUpdateting } = useMutation({
    mutationFn: updateUserApi,
    onError: (error) => {
      console.error(error)
      throw new Error('User could not be inserted')
    },
  })

  return { updateUser, isUpdateting }
}
