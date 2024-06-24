import React from 'react'

const Layout = React.lazy(() => import('./Layout'))
const Main = React.lazy(() => import('./Main'))
const About = React.lazy(() => import('./About'))
const Projects = React.lazy(() => import('./Projects'))
const Contact = React.lazy(() => import('./Contact'))
const ErrorPage = React.lazy(() => import('./ErrorPage'))

export { Layout, Main, About, Projects, Contact, ErrorPage }
