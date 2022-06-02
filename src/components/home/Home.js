import React, { useState, useEffect, useCallback } from 'react';
import Tabs from '@tds/community-tabs'
import Link from '@tds/core-link'
import Text from '@tds/core-text'
import FlexGrid from '@tds/core-flex-grid'
import Button from '@tds/core-button'
import { CaretDown } from '@tds/core-interactive-icon';



import * as HomeAction from '../../store/home/home.action';
import Greeting from '../../common/Greeting';
import Dashboard from '../dashboard/Dashboard';
import MyCases from '../dashboard/Mycases';
import './home.scss'
const Homepage = (props) => {
	const [showGreeting, setShowGreeting] = useState(true)
	const { contentFullData, home, dispatch } = props

	const initFetch = useCallback(() => {
		dispatch(HomeAction.showMessage())
	})
	useEffect(() => {
		initFetch()
	}, [])
	const [open, setOpen] = useState('dashboard')

	const handleOpen = id => {
		setOpen(id)
	}

	

	return (
		<>
		
			<div className='dashboard-middle-section'>
			
				<FlexGrid limitWidth={false}>
					{showGreeting &&
						<Greeting showModal={setShowGreeting} />
					}
					<FlexGrid.Row horizontalAlign={'end'}>
						<div className='dashboard-counter-button'>
							View: <Button variant="brand">Last 24 hours&nbsp;&nbsp;&nbsp;<CaretDown /></Button>
						</div>
					</FlexGrid.Row>
					<Tabs copy="en" open={open} onOpen={handleOpen}>
						<Tabs.Panel id="dashboard" heading="DASHBOARD" />
						<Tabs.Panel id="my-cases" heading="MY CASES" />
						<Tabs.Panel id="my-requests" heading="MY REQUESTS" />
					</Tabs>
					{open === 'dashboard' &&
						<Dashboard {...props} />
					}
					{open === 'my-cases' &&
						<MyCases {...props} />
					}
					{/*home && home.title ? (
						<>
							<h1>{home.title}</h1>
							<h3>{home.description}</h3>
						</>) : <>Loading...</>*/}
				</FlexGrid>
						
			</div>
			
			<div className='dashboard-footer'>
							Copyrights reserved 2022
						</div>






		</>
	)
}

export default Homepage;