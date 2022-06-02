import React from 'react';
import Link from '@tds/core-link'
import FlexGrid from '@tds/core-flex-grid'
import { CaretDown, Search, ProfileBold, NotifyBold } from '@tds/core-interactive-icon'
import { Call } from '@tds/core-decorative-icon';

import "./navbar.scss";

const renderIcon = (key) => {
	switch (key) {
		case 'search':
			return <Search />
		case 'Call':
			return <Call copy="en"/>
		case 'NotifyBold':
			return <NotifyBold size="48" copy="en"/>
		case 'ProfileBold':
			return <ProfileBold size="48" copy="en"/>
	}
}
const Navbar = (props) => {
	const {navbar_header} = props.customPageData
	return (
		<>
			<div className='navbar-container'>
				
					{/*<ul>
				{navbar_header && navbar_header.navbar_header_link && navbar_header.navbar_header_link.data &&
                  navbar_header.navbar_header_link.data.map((nav) => {
                    return (
                      <li
                        key={nav.href}
                        className={'active'}
                      >
                        {nav.href ?
                          <>
							<Link href={nav.href} to={nav.href} >
                            {nav.title}
							
                          </Link> </>:
                          <a href="#" onClick={()=>{console.log('hi')}}>{nav.title}</a>}
                      </li>
                    )
                  })}
				</ul>*/}
			<ul className='navbar-container_lang'>
				{navbar_header && navbar_header.navbar_header_option && navbar_header.navbar_header_option.data &&
					navbar_header.navbar_header_option.data.map((option, index) => {
						return(
							<li key={index}>
								<Link href={'#'} >
									{renderIcon(option.icon)}
									{option.title}
									{option.isDropdown && 
										(<CaretDown variant="inverted" />)
									}
								</Link> 
							</li>
						)
					})
				}
			</ul>
					
		
      
			
			</div>
		</>
	)
}

export default Navbar;
