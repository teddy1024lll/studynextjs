import React from "react";
class UserData {
  name: string = "";
  id: number = 0;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const Users = () => {
  const userList: UserData[] = [];
  for (let i = 0; i < 10; i++) {
    userList.push(new UserData("用户" + i.toString(), i));
  }
  return (
    <div>
      <h1>users</h1>
      <ul className="mt-10">
        {userList.map((item) => {
          return (
            <div key={item.id}>
              <li>
                <a href={"/dashboard/users/" + item.id}>{item.name}</a>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
