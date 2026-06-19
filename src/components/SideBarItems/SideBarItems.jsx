import React, { useState } from 'react'
import classes from "./SideBarItems.module.scss"
import { NavLink } from 'react-router-dom'
export default function SideBarItems() {
  return (
    <>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${classes.active} ${classes.btn}` : classes.btn
            } to="/">
            <i className="fa-solid fa-utensils"></i>
            <span> Meals</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={`${classes.btn}`} to="/">
            <i className="fa-solid fa-utensils"></i>
            <span> Ingredients</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={`${classes.btn}`} to="/">
            <i className="fa-solid fa-utensils"></i>
            <span>Area</span>
          </NavLink>
        </li>
      </ul>
    </>
  )
}
