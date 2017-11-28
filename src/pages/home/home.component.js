/**
 * Created by Daguang Li on 11/27/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import fetchService from '../../common/services/fetch'
import loggerService from '../../common/services/logger'
import setTitle from '../../redux/actions/layout'

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
            loggerService.log("response:", response);

            this.setState({
                data: response
            })
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
                {/*<h1>posts data:</h1>*/}
                <ul>
                    {elements}
                </ul>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return dispatch(setTitle("Home"));
}
export default connect(null, mapDispatchToProps)(Home);
