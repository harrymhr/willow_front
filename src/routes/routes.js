import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types'
// import MyCases from '../components/dashboard/Mycases';

const Home = lazy(() => import('../components/home/Home'))
const Dashboard = lazy(() => import('../components/dashboard/Dashboard'))
// const Case = lazy(() => import('../components/case/Case'))
const Cases = lazy(() => import('../components/dashboard/Cases')) //AWS page
const Scase = lazy(() => import('../components/dashboard/Scase')) //Submit case

const ComingSoon = lazy(() => import('../common/ComingSoon'))



const UiRoutes = (props) => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route exact path="/" element={<Home {...props}/>} />
				{/* <Route exact path="/login" element={<Login {...props}/>} /> */}
				{/* <Route exact path="/case" element={<Case {...props}/>} /> */}

				<Route exact path="/cases" element={<Cases {...props}/>} />
				<Route exact path="/scase" element={<Scase {...props}/>} />


				<Route exact path="/coming-soon" element={<ComingSoon {...props}/>} />
				<Route exact path="/dashboard" element={<Dashboard {...props}/>} />
			</Routes>
		</Suspense>
	)
}

UiRoutes.propTypes = {
	props : PropTypes.object
}

export default UiRoutes;