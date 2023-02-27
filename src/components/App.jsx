import Profile from './profile/Profile';
import user from './profile/user';

import Statistics from './statistics/Statistics';
import data from './statistics/data';

import FriendList from './friendList/FriendList';
import friends from './friendList/friends';

import TransactionHistory from './transactionHistory/TransactionHistory';
import transactions from './transactionHistory/transactions';


export default function App() {
    return (
      <div>
        <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes}
            />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </div>
        
   
    );
}


