import { useState, useEffect } from 'react';
import { Switch, Route, useHistory,Redirect } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Login from './screens/Login';
import Register from './screens/Register';
import CategoriesTextbooks from './screens/CategoriesTextbooks';
import TextbooksList from './screens/TextbooksList'
import TextbookDetail from './screens/TextbookDetail'
import TextbookCreate from './screens/TextbookCreate';
import TextbookEdit from './screens/TextbookEdit';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import Home from './screens/Home';
import { getAllCategories } from './services/categories';



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

  const [allCategories, setAllCategories] = useState([])
  
  useEffect(() => {
    const fetchCategories = async () => {
      const allCategories = await getAllCategories()
      setAllCategories(allCategories)
    };
    fetchCategories(allCategories);
}, []);

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
          <TextbookDetail currentUser={currentUser} />
        </Route>
          <Route exact path="/categories/:id">
         <CategoriesTextbooks allCategories={allCategories} />
        </Route>
       
        <Route exact path="/textbooks/:id/edit">
        {currentUser ? <TextbookEdit currentUser={currentUser} /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/add/textbooks">
        {currentUser ? <TextbookCreate currentUser={currentUser} /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/textbooks">
          <TextbooksList currentUser={currentUser} />
        </Route>
          <Route exact path="/">
          <Home  currentUser={currentUser} allCategories={allCategories} />
        </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
