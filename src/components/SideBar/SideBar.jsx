import React, { useState } from 'react'
import classes from "./SideBar.module.scss"
import { Link } from "react-router-dom";
import img1 from "../../assets/images/logo-BfNap0Pe.png"

import SideBarItems from '../SideBarItems/SideBarItems';
export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <button onClick={() => {
        setIsOpen(true)
      }} className={` ${classes.btn} ${isOpen ? `${classes.closeBtn}` : `${classes.openBtn}`}  `}>
        <i className="fa-solid fa-bars"></i>
      </button>

      <div
        onClick={() => {
          setIsOpen(false);
        }}
        className={`${classes.showSideBar} ${isOpen ? classes.open : classes.close}`}
      >

        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`${classes.overlay} ${isOpen ? classes.openPanel : classes.closePanel}`}>


          <button onClick={() => {
            setIsOpen(false);
          }} className={`${classes.mark}`}>
            <i className="fa-solid fa-xmark"></i>
          </button>


          <div className={`${classes.logo}`}>
            <img src={img1} alt="logo" />
          </div>
          <SideBarItems />
        </div>
      </div>

      <aside className={`${classes.sideBar}`}>
        <div className={`${classes.logo}`}>
          <img src={img1} alt="logo" />
        </div>
        <SideBarItems />
      </aside>

    </>
  )
}
