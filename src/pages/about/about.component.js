/**
 * Created by Daguang Li on 11/24/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import setTitle from '../../redux/actions/layout'

function About() {
    return (
        <div>About</div>
    )
}

function mapDispatchToProps(dispatch) {
    return dispatch(setTitle("About"));
}
export default connect(null, mapDispatchToProps)(About);