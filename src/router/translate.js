/**
 * Created by P0084519 on 12/1/2017.
 */
import React from "react"
import routes from './routes'
import { connect } from 'react-redux'

import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'
import zhCN from '../i18n/cn'
import enUS from '../i18n/en'

const local = {
    "en" : enUS,
    "zh" : zhCN
};

addLocaleData([...en, ...zh]);

class Translate extends React.Component{
    render() {
        return (
            <div>
                <IntlProvider locale={this.props.langKey} messages={local[this.props.langKey]}>
                    {routes}
                </IntlProvider>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let { common } = state;

    return {
        langKey: common.langKey
    }
}

export default connect(mapStateToProps)(Translate);