import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert('please add a task')
            return
        }
        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)

    }
    // value = {text} the text is from the useState
    // when you start to type in the input,that is going to fire off this onChange
    return (
        <form className = 'add-form' onSubmit = {onSubmit}>
            <div className = 'form-control' >
                <label>Task</label>
                <input type = 'text' placeholder = 'AddTask'
                value = {text} onChange = {(e)=>setText(e.target.value)}/>
        
            </div>

            <div className = 'form-control' >
                <label>Day & Time</label>
                <input type = 'text' placeholder = 'Add Day & Time' value = {day} 
                onChange = {(e) => setDay(e.target.value)}/>
            </div>

            <div className = 'form-control form-control-check' >
                <label>Set reminder</label>
                <input type = 'checkbox' value = {reminder} onChange = {(e)=>setReminder(e.currentTarget.checked)} />
            </div>

            <input type = 'submit' value = 'Save Task' className = 'btn btn-block'/> 
        </form>
    )
}
export default AddTask