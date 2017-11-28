/**
 * Created by Daguang Li on 11/24/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import setTitle from '../../redux/actions/layout'

function Dashboard() {
    return (
        <div>Dashboard</div>
    )
}

function mapDispatchToProps(dispatch) {
    return dispatch(setTitle("Dashboard"));
}
export default connect(null, mapDispatchToProps)(Dashboard);
