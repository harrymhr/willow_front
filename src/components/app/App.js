import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import UiRoutes from '../../routes/routes';
import Layout from "../../common/Layout";

const App = (customPageData) =>{
	return (
      <Router>
        <UiRoutes {...customPageData}/>
      </Router>
	)
}
export default Layout(App);