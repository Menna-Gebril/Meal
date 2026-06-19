import React, { useState } from 'react'
import classes from "./LayOut.module.scss"
import SideBar from '../SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
export default function LayOut() {


  return (
    <>
      <SideBar />
      <Outlet />
      <Footer/>
    </>
  )
}
