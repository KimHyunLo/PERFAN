import { Context, useContext } from 'react'

export function useCustomContext<T>(context: Context<T>) {
  const contextValue = useContext(context)
  if (contextValue === null) {
    throw new Error('SectionsContext is null')
  }
  return contextValue
}
