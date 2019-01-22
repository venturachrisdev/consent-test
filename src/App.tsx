import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Screens
import Layout from './screens/Layout';
import Home from './screens/Home';
import ConsentManagement from './screens/ConsentManagement';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Layout>
              <Route path={'/'} exact={true} component={Home} />
              <Route path={'/users'} exact={true} component={ConsentManagement} />
            </Layout>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
