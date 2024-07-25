import supabase from './supabase'
import { getToday } from '../utils/getToday'

export async function updateUser() {
  const { data: user, selectError } = await supabase.from('user').select('*')

  if (selectError) {
    console.error(selectError)
    throw new Error('User could not be selected')
  }

  const todaysVisitor = user?.filter((item) => item.date === getToday())

  if (todaysVisitor.length > 0) {
    const { error: updateError } = await supabase
      .from('user')
      .update({ numVisitors: todaysVisitor[0].numVisitors + 1 })
      .eq('id', todaysVisitor[0].id)
      .select()

    if (updateError) {
      console.error(updateError)
      throw new Error('User could not be inserted')
    }
  } else {
    const { error: insertError } = await supabase
      .from('user')
      .insert([{ date: getToday(), numVisitors: 1 }])
      .select()

    if (insertError) {
      console.error(insertError)
      throw new Error('User could not be inserted')
    }
  }

  return user
}
