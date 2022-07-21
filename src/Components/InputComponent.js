import React, { useState } from 'react';

// style
import styles from './styleComponent.module.css';
import OutputComponent from './OutputComponent';

const ArrayContext = React.createContext()

export const InputComponent = () => {
    const [list, setList] = useState('')
    const [state, setState] = useState({
        fname: "",
        lname: "",
        gender: ""
    })

    const handleInputs = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = () => {
        // console.log(state)
        // debugger
        if(state.fname == ""){
            alert("First Name is required")
            return
        }
        let name = ""
        if(state.gender === "male"){
            name = "Mr. "+ state.fname + " " + state.lname
        } else if(state.gender === "female"){
            name = "Mrs. "+ state.fname + state.lname
        } else {
            name = state.fname + " " + state.lname
        }
        let data = {
            name: name
        }

        setList(data)
        setState({
            fname: "",
            lname: "",
            gender: ""
        })
    }

    return (
        <>
        <div className={styles.div}>
            <h4 className={styles.heading}>Input Component</h4>
            <input placeholder="First Name" className={styles.input} name="fname" value={state.fname} onChange={handleInputs}/>
            <input placeholder="Last Name" className={styles.input} name="lname" value={state.lname} onChange={handleInputs}/>
            <select placeholder="Gender" className={styles.input} name="gender" value={state.gender} onChange={handleInputs}>
                <option value={""}>Gender</option>
                <option name="male" value={"male"}>Male</option>
                <option name="female" value={"female"}>Female</option>
            </select>
            <button className={styles.button1} onClick={onSubmit}>Submit</button>
        </div>
        <ArrayContext.Provider value={list}>
            <OutputComponent />
        </ArrayContext.Provider>
        </>
    )
}

export { ArrayContext }