import UsersList from './UsersList'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import UserDetail from './UserDetail';

const App = () => {
    return ( 
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={UsersList} />
                <Route exact path="/profile" component={UserDetail} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
};

export default App;
