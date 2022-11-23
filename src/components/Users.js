import React from "react";
import User from "./User";

class Users extends React.Component{
    
    render() {
        if(this.props.users.length > 0)
            return (
                <div>
                    {this.props.users.map((elem) => (
                        <User key={elem.id} user={elem} />
                    ))}
                </div>
            )
        else
        return (
            <div className="user">
                <h3>пользователей нет</h3>
            </div>
        )
    }
}

export default Users