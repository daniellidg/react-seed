/**
 * Created by Daguang Li on 11/27/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import fetchService from '../../common/services/fetch'
import loggerService from '../../common/services/logger'
import setTitle from '../../redux/actions/layout'
import { Spin } from 'antd';

class Home extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let url = 'http://jsonplaceholder.typicode.com/posts';
        fetchService.get(url).then((response) => {
            loggerService.log("posts response:", response);

            this.setState({
                data: response
            });
        });
    }

    render() {
        let elements = this.state.data.map((item, index) => (
            <li key={index}>
                <h2>{item.title}</h2>
                <div>{item.body}</div>
            </li>
        ));

        return (
            <div>
                <Spin tip="载入中..." spinning={(this.state.data.length === 0)}>
                    <ul>
                        {elements}
                    </ul>
                </Spin>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return dispatch(setTitle("Home"));
}
export default connect(null, mapDispatchToProps)(Home);
