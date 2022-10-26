import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    const [datas, setDatas] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/catagories')
        .then(res => res.json())
        .then(data => setDatas(data))
    },[])
    return (
        <div>
        <Header></Header>
        <Container>
            <Row>
                <Col lg="8">
                    <Outlet></Outlet>
                </Col>
                <Col lg="4">
                    {
                        datas.map(e =>  <Link to={`/catagory/${e.id}`}><p className='bg-info m-3 p-3 rounded'>{e.title}</p></Link>)
                    }
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Main;