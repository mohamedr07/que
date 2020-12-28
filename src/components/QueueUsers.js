import React, { Component } from 'react'

export class QueueUsers extends Component {

    

    render() {

        const users = ['ahmed', 'mohamed', 'ali', 'abbas', 'ahmed', 'nada', '8anem', 'gamal']

        return (
            <div className="card mt-5">
                <div className="card-body">
                    <ul className="list-group">
                        {users.map(i => (
                            <li className="list-group-item">{i}</li>
                        ))}
                    </ul>
                    
                </div>
            </div>
        )
    }
}

export default QueueUsers
