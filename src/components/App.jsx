import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import FriendList from "./friends/FriendList/FriendList";
import TransactionHistory from "./transactions/TransactionHistory";
import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};