import React from "react";
import { connect } from 'react-redux'

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import './index.scss'

const Layout = (WrappedComponent) =>{
    class Layout extends React.Component{
        componentDidUpdate(prevProps){
        }
        render(){
            return (<>
                <Navbar {...this.props} />
                <Sidebar {...this.props} />
                <div id="dashboard-middle-section">
                <WrappedComponent {...this.props} />
                </div>
            </>)
        }
    }
    const mapStateToProps = state => state
    return connect(mapStateToProps)(Layout)
}

export default Layout;