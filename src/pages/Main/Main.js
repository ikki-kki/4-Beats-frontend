import React from 'react';
import { withRouter } from 'react-router-dom';
import MainFooter from '../../components/Footers/MainFooter/MainFooter'
import MainHeader from '../../components/Headers/MainHeader/MainHeader'

export class Main extends React.Component {
    render() {
        return (
            <div>
                <MainHeader/>
                <MainFooter/>
            </div>
        )
    }
}

export default withRouter(Main);