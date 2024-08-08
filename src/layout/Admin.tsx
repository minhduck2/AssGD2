import React from 'react'
import { Outlet } from 'react-router-dom'
import SlideBarAdmin from '../components/SlideBarAdmin'
type Props = {}

const Admin = (props: Props) => {
  return (
    <>
        <SlideBarAdmin/>
        <Outlet/>
        
    </>
  )
}

export default Admin