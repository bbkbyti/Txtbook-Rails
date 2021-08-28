import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
// import MainContainer from './containers/MainContainer';
import Layout from './layouts/Layout';
import Login from './screens/Login';
import Register from './screens/Register';
import Categories from './screens/Categories';
import TextbooksList from './screens/TextbooksList'
import TextbookDetail from './screens/TextbookDetail'
import TextbookCreate from './screens/TextbookCreate';
import TextbookEdit from './screens/TextbookEdit';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();


  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/')
  }

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/register'>
            <Register handleRegister={handleRegister}/>
          </Route>
          <Route exact path="/textbooks/:id">
          <TextbookDetail />
        </Route>
          <Route exact path="/categories">
          <Categories/>
        </Route>
        <Route exact path="/textbooks/:id/edit">
          <TextbookEdit />
        </Route>
        <Route exact path="/add/textbooks">
          <TextbookCreate />
        </Route>
        <Route exact path="/textbooks">
          <TextbooksList />
        </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
