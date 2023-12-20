import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import '../src/index';
import user from '../src/data/user';
import data from '../src/data/data';

function App() {
  return (
    <div className="App">
      <Profile
       username={user.username}
       tag={user.tag}
       location={user.location}
       avatar={user.avatar}
       stats={user.stats}/>
      <Statistics title="Upload stats" stats={data}/>
    </div>
  );
}

export default App;
