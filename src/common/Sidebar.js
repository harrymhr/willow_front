import React from "react";
import { Home, CallTalking, ComputerNetwork, ArtificialIntelligence } from '@tds/core-decorative-icon'
import Link from '@tds/core-link'
import { ChevronLeft, ChevronRight } from '@tds/core-interactive-icon'

import './index.scss'

const closeSideBar = () =>{
    let element = document.getElementById('dashboard-sidebar')
    let dashElel = document.getElementById('dashboard-middle-section')
    let iconElel = document.getElementById('slider-icon-right')
    element.style.display = 'none'
    dashElel.style.marginLeft = '0px'
    iconElel.style.display = 'block'
}
const showSideBar = () =>{
    let element = document.getElementById('dashboard-sidebar')
    let iconElel = document.getElementById('slider-icon-right')
    let dashElel = document.getElementById('dashboard-middle-section')
    element.style.display = 'block'
    iconElel.style.display = 'none'
    dashElel.style.marginLeft = '300px'
}

const Sidebar = () =>{
    return(
        <>
        <div className="dashboard-sidebar" id="dashboard-sidebar">
			<span className='direction-arrow-left'>
			    <Link href="#" icon={ChevronLeft} iconPosition="right" onClick={closeSideBar}></Link>
			</span>
            <ul>
                <li className="sidebar-link">
                <Link href="#" icon={Home} iconPosition="left" >Home</Link>
                </li>
                <li className="sidebar-link">
                <Link href="#" icon={ArtificialIntelligence} iconPosition="left" >Digital IT Services</Link>
                </li>
                <li className="sidebar-link">
                <Link href="#" icon={ComputerNetwork} iconPosition="left" >Digital CXM</Link>
                </li>
                <li className="sidebar-link active">
                <Link href="#" icon={CallTalking} iconPosition="left">Service Request</Link>
                </li>
            </ul>
		</div>
        <span className='direction-arrow-right' id="slider-icon-right">
			<Link href="#" icon={ChevronRight} iconPosition="right" onClick={showSideBar}>
                        </Link>
			</span>
        </>
    )
}

export default Sidebar;