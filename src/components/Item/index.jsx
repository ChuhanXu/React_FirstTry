import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    render() {
        return (
            <div>
                <li>
                    <label>
                        <input type = "checkbox"></input>
                        <span>xxxxxx</span>
                    </label>
                    <button className = "btn btn-danger" style = {{display:'none'}}>delete</button>
                </li>
                
            </div>
        )
    }
}
