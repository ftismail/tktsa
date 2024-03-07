import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap'
const Searchbar = () => {
    const [searchTerm,setSearchTerm] = useState('')
    const handelChange = (e)=>{
        setSearchTerm(e.target.value)
        console.log(searchTerm)
    }
    return (
        <>
            <Form className="d-flex">
                <Form.Control
                type="بحث"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={handelChange}
                />
            <Button className='mx-3' variant="outline-success">بحث</Button>
          </Form>
        </>
    );
}

export default Searchbar;
