import React from 'react'

const Header = React.lazy(() => import('./Header'))
const LazyImage = React.lazy(() => import('./LazyImage'))
const Modal = React.lazy(() => import('./Modal'))
const Nav = React.lazy(() => import('./Nav'))
const SideMenu = React.lazy(() => import('./SideMenu'))
const Title = React.lazy(() => import('./Title'))
const Loader = React.lazy(() => import('./Loader'))

export { Header, LazyImage, Modal, Nav, SideMenu, Title, Loader }
