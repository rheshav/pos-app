import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from './SideBar';
import RightContent from './RightContent';
import Footer from './Footer';

function Pos(props) {
  return (
    <Container style={{ marginTop: 32 }} fluid>
      <Row>
        <Col sm={6} md={2}>
          <SideBar />
        </Col>
        <Col sm={6} md={10}>
          <RightContent />
        </Col>
      </Row>
      <Footer></Footer>
    </Container>
  );
}

export default Pos;
