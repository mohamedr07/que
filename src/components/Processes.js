import React, { Component } from 'react'

export class Processes extends Component {

    render() {

        let processesItems = ["bla", "blabla", "blablabla", "blablablabla"];


        return (
            <div>
                <ul className="list-group">
                    {processesItems.map(processItem => (
                        <li className="list-group-item list-group-item-primary">
                            {processItem}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Processes
