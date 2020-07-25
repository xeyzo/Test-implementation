const User = {
    list: () => {
      return [
        { id: 1, username: "mul14", name: "Mulia" },
        { id: 2, username: "durjaka", name: "Arifandi" },
        { id: 3, username: "johndoe", name: "John Doe" },
        { id: 4, username: "norisa", name: "Norisa" },
        { id: 5, username: "sagara", name: "Sasuke Sagara" },
      ];
    },
  
    findByUsername: (username) => {
      return User.list().filter((user) => user.username == username)[0];
    },
  };
  
  module.exports = User
  