/**
 * Created by Daguang Li on 11/24/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import setTitle from '../../redux/actions/layout'

function Dashboard() {
    return (
        <div>
            <ul className="list-view">
                <li>
                    <div>
                        <img style={{width: 50, height: 50}} src={require("../../images/icons8-registration-80.png")} alt="Logo"/>
                        <p>AAA</p>
                    </div>
                    <div>15</div>
                    <div></div>
                </li>
                <li>
                    <div>
                        <img style={{width: 50, height: 50}} src={require("../../images/icons8-registration-80.png")} alt="Logo"/>
                        <p>AAA</p>
                    </div>
                    <div>15</div>
                    <div></div>
                </li>
                <li>
                    <div>
                        <img style={{width: 50, height: 50}} src={require("../../images/icons8-registration-80.png")} alt="Logo"/>
                        <p>AAA</p>
                    </div>
                    <div>15</div>
                    <div>Good</div>
                </li>
                <li>
                    <div>
                        <img style={{width: 50, height: 50}} src={require("../../images/icons8-registration-80.png")} alt="Logo"/>
                        <p>AAA</p>
                    </div>
                    <div>15</div>
                    <div>Bad</div>
                </li>
            </ul>
            <div className="chatbot-view">View</div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return dispatch(setTitle("Dashboard"));
}
export default connect(null, mapDispatchToProps)(Dashboard);
