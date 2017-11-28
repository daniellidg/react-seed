/**
 * Created by Daguang Li on 11/28/2017.
 */
import React from "react"
import loggerService from '../../common/services/logger'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class Logout extends React.Component {
    render() {
        let loginInfo = this.props.loginInfo;
        loggerService.log("loginInfo:", loginInfo);

        return (
            <Menu mode="horizontal" onClick={this.props.logout} className="layout-header-menu menu-cadetblue">
                <SubMenu title={<span><Icon type="user" />{loginInfo.userName}</span>}>
                    <Menu.Item key="logout">注销</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}
