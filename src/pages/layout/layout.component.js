/**
 * Created by Daguang Li on 11/27/2017.
 */
import React from 'react'
import { Link } from "react-router"
import { connect } from 'react-redux'
import LogoutMenu from '../../components/LogoutMenu/LogoutMenu'
import constants from '../../common/constants'
import methods from '../../common/methods'
import { browserHistory } from 'react-router'
import { FormattedMessage} from 'react-intl';

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout(e) {
        // 模拟退出
        if(e.key === 'logout') {
            methods.removeLocalStorage(constants.localKey.userToken);
            browserHistory.push("/login");
        }
    }

    render() {
        return (
            <div>
                <div className="layout-header">
                    <div>
                        {/*{this.props.title}*/}
                        <FormattedMessage
                            id = {"MENU_" + this.props.title.toUpperCase()}
                            defaultMessage={'Home'}
                        />
                    </div>
                    <LogoutMenu logout={this.logout} loginInfo={this.props.loginInfo}></LogoutMenu>
                </div>
                <div className="layout-body">{this.props.children}</div>
                <div className="layout-footer">
                    <div className="nav-item">
                        <Link to="/home">
                            <FormattedMessage
                                id="MENU_HOME"
                                defaultMessage={'Home'}
                            />
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/dashboard">
                            <FormattedMessage
                                id="MENU_DASHBOARD"
                                defaultMessage={'Dashboard'}
                            />
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/about">
                            <FormattedMessage
                                id="MENU_ABOUT"
                                defaultMessage={'About'}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let { layout, login } = state;
    return {
        title: layout.title,
        loginInfo: login.loginInfo
    }
}

export default connect(mapStateToProps)(Layout);