import { useMutation } from '@tanstack/react-query'
import { updateUser as updateUserApi } from '../services/apiUser.ts'

export function useUpdateUser() {
  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateUserApi,
    onError: (error) => {
      console.error(error)
      throw new Error('User could not be inserted')
    },
  })

  return { updateUser, isUpdating }
}
