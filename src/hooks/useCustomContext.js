import { useContext } from 'react'

export function useCustomContext(customContext) {
  const context = useContext(customContext)
  if (context === undefined) throw new Error('SideMenuContext is undefined')
  return context
}
