import React from 'react'

const MainContent = React.lazy(() => import('./main/MainContent'))
const MainFooter = React.lazy(() => import('./main/MainFooter'))

const AboutIntroduction = React.lazy(() => import('./about/AboutIntroduction'))
const AboutSkills = React.lazy(() => import('./about/AboutSkills'))
const AboutPersonalStatement = React.lazy(() => import('./about/AboutPersonalStatement'))

const ProjectList = React.lazy(() => import('./projects/ProjectList'))
const ProjectItem = React.lazy(() => import('./projects/ProjectItem'))
const ProjectModal = React.lazy(() => import('./projects/ProjectModal'))

const ContactInfo = React.lazy(() => import('./contact/ContactInfo'))
const ContactImage = React.lazy(() => import('./contact/ContactImage'))

export {
  AboutIntroduction,
  AboutSkills,
  AboutPersonalStatement,
  ContactImage,
  ContactInfo,
  MainContent,
  MainFooter,
  ProjectItem,
  ProjectList,
  ProjectModal,
}
