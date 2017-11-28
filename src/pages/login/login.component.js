/**
 * Created by Daguang Li on 11/24/2017.
 */
import React from 'react'
import { connect } from "react-redux"
import WrappedNormalLoginForm from '../../components/LoginForm/LoginForm'
import { goLogin } from '../../redux/actions/login'
import loggerService from '../../common/services/logger'

class Login extends React.Component{
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(params) {
        this.props.handleSubmit(params);
    }

    render() {
        return (
            <div className="login-body">
                <div className="login-form-cont">
                    <div className="login-logo">
                        <img src={require("../../images/login-logo.png")} alt="Logo"/>
                        <span>React Boilerplate</span>
                    </div>
                    <WrappedNormalLoginForm handleSubmit={this.handleSubmit} loading={this.props.loading}></WrappedNormalLoginForm>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let { loading, login } = state;
    return {
        loading: loading.loading,
        loginInfo: login.loginInfo
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleSubmit: (params) => {
            loggerService.log("params:", params);

            dispatch(goLogin(params));
        }
    }
};
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;