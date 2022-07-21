import React, { useState, useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// style
import styles from './styleComponent.module.css';
import { ArrayContext } from './InputComponent'
import image from './image.png';
import 'bootstrap/dist/css/bootstrap.min.css';



const OutputComponent = () => {
    const arr = useContext(ArrayContext.Consumer)
    const [show, setShow] = useState(false);
    const [sname, setSname] = useState('');
    const [array, setArray] = useState([])

    useEffect(() => {
        if(arr){
            let b = array? array: []
            setArray([...b, arr])
        }
    }, [arr])

    const handleClose = () => setShow(false);
    const handleShow = () => {
        const arr1 = array.filter(e => e.name !== sname)
        debugger
        setArray(arr1)
        setShow(false)
        setSname('')
    };

    // const handleInputs = (e) => {
    //     setArray({
    //         ...arr,
    //         [e.target.name]: [e.taget.value]
    //     })
    // }
    
    // var arr = useContext(ArrayContext.Consumer)
    // debugger
    // console.log(arr)

    const handleSubmit = (name) => {
        setSname(name)
        setShow(true)
    }

    return (
        <>
        <div className={styles.div2}>
            <h4 className={styles.heading}>Output Component</h4>
            {array.map((data, index) => (<ul>
                <li key={index} style={{textAlign: 'left'}}>
                    {data.name}
                    <button className={styles.btn} style={{ marginLeft: 5 }} onClick={() => handleSubmit(data.name)}>
                        <img src={image} style={{width: '10px'}}/>
                    </button>
                </li>
            </ul>))}
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete this Name</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleShow}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default OutputComponent