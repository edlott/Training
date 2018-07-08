import React from 'react';
import { hot } from 'react-hot-loader'
import store from '../store';
import {addOrder} from '../store/actions';

const title = 'Application as a module';

class App extends React.Component {
    render() {
        return (<div>{`${title} count: ${this.state.count}`}</div>);
    }

    constructor(props) {
        super(props);
        this.state = {count: 0};

        console.log('in constructor - initialize state');
    }

    componentDidMount() {
        console.log('dom created - start AJAX request');
        setTimeout(() => {
            this.setState({count: 1});
            store.dispatch(addOrder({id: 1, name: 'Order 1'}));
        }, 200);
    }

    componentDidUpdate() {
        console.log('Just rendered because of a property/state change - maybe start AJAX');
        if (this.state.count < 20) {
            setTimeout(() => {
                this.setState((prevState) => {
                    store.dispatch(addOrder({id: prevState.count + 1, name: `Order ${prevState.count + 1}`}));
                    return {count: prevState.count + 1}
                }); 
            }, 200);
        } else {
            console.log(JSON.stringify(store.getState().toJSON(), null, 2));
        }
    }

    componentWillUnmount() {
        console.log('unregister stuff');
    }
}

export default hot(module)(App);