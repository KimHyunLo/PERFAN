import supabase from './supabase'

export async function getProjects() {
  const { data: projects, error: projectError } = await supabase.from('projects').select('*')
  const { data: techs, error: techError } = await supabase.from('techs').select('*')
  const { data: charges, error: chargeError } = await supabase.from('charges').select('*')

  if (projectError || techError || chargeError) {
    console.error(projectError, techError, chargeError)
    throw new Error('Projects could not be loaded')
  }

  // 1. 프로젝트에 사용된 기술 스텍을 연결
  const projectsWithTechList = projects.map((project) => {
    const techList = techs.filter((tech) => tech.projectId?.includes(project.id))

    project.techList = techList.length
      ? techList.map((tech) => ({ id: tech.id, name: tech.name, priority: tech.priority }))
      : []

    return project
  })

  // 2. 프로젝트에서 맡은 업무 역할을 연결
  const projectWithCharges = projectsWithTechList.map((project) => {
    const chargeList = charges.filter((charge) => charge.projectId.includes(project.id))

    project.chargeList = chargeList.length
      ? chargeList.map((charge) => ({ mainCharge: charge.mainCharge, subCharge: charge.subCharge }))
      : []

    return project
  })

  return projectWithCharges
}
