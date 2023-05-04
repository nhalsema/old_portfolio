import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'
import Modal from "./Modal.jsx";

function NavBar() {
    const [showPopUp, setShowPopUp] = useState(false); // create a state variable

    const clickPopUp = () => {
        setShowPopUp(true); // set the state to true when the NavLink is clicked
    };

    const closePopUp = () => {
        setShowPopUp(false); // set the state to flase when the NavLink is closed
    };

    // event listener for closing the popup
    // useEffect(() => {
    //     const handleOutsideClick = (event) => {
    //         const popUp = document.querySelector('.popBox');
    //         if (popUp && !popUp.contains(event.target)) {
    //             setShowPopUp(false);
    //         }
    //     };

    //     document.addEventListener('click', handleOutsideClick);

    //     return () => {
    //         document.removeEventListener('click', handleOutsideClick);
    //     };
    // }, []);

    return (
        <div>
            <nav className='navbar neon clickable' >
                <ul>
                    {/* <ul className='popped'> */}
                    {/* <li>
                        <NavLink
                            to="/bio"
                            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}
                            onClick={clickPopUp}  // add onClick event to the NavLink 
                        >
                            bio
                        </NavLink>
                    </li> */}
                    {/* <li>
                        <NavLink
                            to="/stack"
                            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                            stack
                        </NavLink>
                    </li> */}
                    {/* <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                            projects
                        </NavLink>
                    </li> */}
                    {/* <li>
                        <NavLink
                            to="/readme"
                            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                            readme
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink
                            to="https://www.nest-therapies.com"
                            title="New tab to nest-therapies.com. WIP. (password: emily)"
                            target="_blank"
                            rel="noopener noreferrer">
                            Project: NEST
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="https://www.linkedin.com/in/nicolettehalsema/"
                            title="New tab to Linkedin.com/in/NicoletteHalsema"
                            target="_blank"
                            rel="noopener noreferrer">
                            linkedin
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="https://1drv.ms/b/s!AqOM54YtUds1nGExugz8REUMfraF?e=0dFg3o"
                            title="New tab to OneDrive copy of resume"
                            target="_blank"
                            rel="noopener noreferrer">
                            resume
                        </NavLink>
                    </li>
                    <li className="breakpoint-li">
                        <NavLink
                            to="mailto:Nicolettehalsema@gmail.com"
                            title="Open an email drafted to nicolettehalsema@gmail.com"
                            target="_blank">
                            contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            {/* {showPopUp && <Modal />} render the PopUp component when the state is true */}
            {/* {showPopUp && (
                <div className="popBox">
                    <button onClick={closePopUp}>Close</button>
                    <p>This is the pop-up content.</p>
                </div>
            )} */}
        </div>
    )
};

export default NavBar;