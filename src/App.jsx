import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';


function App() {
  const isAuthen = useSelector(({ auth }) => auth.isAuthen)
  return (
    <>
      <Header />
      {!isAuthen && <Auth />}
      {isAuthen && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
