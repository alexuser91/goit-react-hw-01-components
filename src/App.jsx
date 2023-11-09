import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import Friend from './components/Friend/FriendList';
import Transactions from './components/Transactions/Transactions';

import user from './components/Data/user.json';
import data from './components/Data/data.json';
import friends from './components/Data/friends.json';
import transactions from './components/Data/transactions.json';

import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.app}>
      {' '}
      <h1 className={styles.title}>React Homework 1 - Components</h1>
      <div className={styles.components}>
        <Profile user={user} />
        <Statistics stats={data} />
        <Friend friends={friends} />
        <Transactions items={transactions} />
      </div>
    </div>
  );
}

export default App;
