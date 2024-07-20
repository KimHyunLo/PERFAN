import React from 'react'

const MainContent = React.lazy(() => import('./main/MainContent'))
const MainFooter = React.lazy(() => import('./main/MainFooter'))

const AboutIntroduction = React.lazy(() => import('./about/AboutIntroduction'))
const AboutExperience = React.lazy(() => import('./about/AboutExperience'))

const ProjectList = React.lazy(() => import('./projects/ProjectList'))

const ContactInfo = React.lazy(() => import('./contact/ContactInfo'))
const ContactImage = React.lazy(() => import('./contact/ContactImage'))

export {
  AboutIntroduction,
  AboutExperience,
  ContactImage,
  ContactInfo,
  MainContent,
  MainFooter,
  ProjectList,
}
