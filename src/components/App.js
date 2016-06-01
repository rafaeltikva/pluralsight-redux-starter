// This component handles the App template used on every page
import React, {PropTypes} from 'react';
import Header from './common/Header';

class App extends React.Component {
    render() {
        // children will be passed by React Router //
        return (
            <div className="container-fluid">
                <Header />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;