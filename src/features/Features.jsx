import React from 'react'

const AboutIntroduction = React.lazy(() => import('./about/AboutIntroduction'))
const AboutPersonalStatement = React.lazy(() => import('./about/AboutPersonalStatement'))
const ContactImage = React.lazy(() => import('./contact/ContactImage'))
const ContactInfo = React.lazy(() => import('./contact/ContactInfo'))
const MainContent = React.lazy(() => import('./main/MainContent'))
const MainFooter = React.lazy(() => import('./main/MainFooter'))
const ProjectItem = React.lazy(() => import('./projects/ProjectItem'))
const ProjectList = React.lazy(() => import('./projects/ProjectList'))

export {
  AboutIntroduction,
  AboutPersonalStatement,
  ContactImage,
  ContactInfo,
  MainContent,
  MainFooter,
  ProjectItem,
  ProjectList,
}
