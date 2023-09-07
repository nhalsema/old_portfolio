import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

function NavBar() {
    return (
        <div>
            <nav className='navbar neon clickable' >
                <ul>
                    {/* <li>
                        <NavLink
                            to="https://www.nest-therapies.com"
                            title="New tab to nest-therapies.com. WIP. (password: emily)"
                            target="_blank"
                            rel="noopener noreferrer">
                            Project: NEST
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink
                            to="https://www.linkedin.com/in/nhalsema/"
                            title="New tab to linkedin.com/in/nhalsema"
                            target="_blank"
                            rel="noopener noreferrer">
                            linkedin
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="https://drive.google.com/file/d/1rR_T-8ty4A7A_39jwjdHWU_Sodq4ZnB6/view?usp=drive_link"
                            title="New tab to Google Drive copy of resume"
                            target="_blank"
                            rel="noopener noreferrer">
                            resume
                        </NavLink>
                    </li>
                    <li className="breakpoint-li">
                        <NavLink
                            to="mailto:nbhalsema@gmail.com"
                            title="Open an email drafted to nbhalsema@gmail.com"
                            target="_blank">
                            contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default NavBar;