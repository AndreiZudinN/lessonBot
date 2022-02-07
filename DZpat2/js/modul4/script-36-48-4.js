// Change code below this line
const getTotalFriendCount = users => {
  return users.reduce((total, user) => total + user.balance, 0); 
};
// Change code above this line