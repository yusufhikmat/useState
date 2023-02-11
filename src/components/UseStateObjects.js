import React, {useState} from 'react'

const UseStateObjects = () => {
    const [name, setName] = useState({firstName:"",lastName:""})

    const firstNameHandler = (e)=>{
        setName((prevState)=>{
            return{
                ...prevState, firstName:e.target.value
            }
        })
    }
    const lastNameHandler = (e)=>{
        setName((prevState)=>{
            return{
                ...prevState, lastName:e.target.value
            }
        })
    }
  return (
    <form>
        <input 
            type="text"
             placeholder='first name'
             value={name.firstName}
             onChange={firstNameHandler} />
        <input 
            type="text" 
            placeholder='last name'
            value={name.lastName}
            onChange={lastNameHandler} />

            <h2>firstname : {name.firstName}</h2>
            <h2>lastname : {name.lastName}</h2>
    </form>
  )
}

export default UseStateObjects