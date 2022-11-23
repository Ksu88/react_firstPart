import React from 'react';
import Header from "./components/Header"
import Users from "./components/Users"
import AddUser from './components/AddUser';



class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
        users: [
            {
                id: 1,
                firstname: 'Bob',
                lastname: 'Marley',
                bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                age: 38,
                isHappy: true
            },
            {
                id: 2,
                firstname: 'John',
                lastname: 'Doe',
                bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                age: 24,
                isHappy: false
            },
        ]
    }
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
}
  render() {
    return (<div>
      <Header title = "Список пользователей" />
      <main>
        <Users users = {this.state.users} onDelete={this.deleteUser}/>
      </main>
      <aside>
        <AddUser onAdd = {this.addUser} />
      </aside>
    </div>)
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }

  addUser(user) {
    const id = this.state.users.length + 1
    this.setState({ users: [...this.state.users, {id, ...user}]})
  }
}

export default App;
