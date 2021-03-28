import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'


export default class Header extends Component {
    handleKeyUp = (event)=>{
        if(event.keyCode !== 13) return//the keyCode of enter is 13
        // console.log(event.target.value)
        if(event.target.value.trim() === ''){
            alert("input is empty")
            return
        }
        const todoObj = {id:nanoid(),name:event.target.value,done:false}
        console.log(todoObj)
        this.props.addTodo(todoObj)
        event.target.value = " "
    }
    render() {
        return (
            <div className = "todo-header">
                <input
                onKeyUp={this.handleKeyUp} 
                type = "text" 
                placeholder = "please input your task"></input>
                
            </div>
        )
    }
}
