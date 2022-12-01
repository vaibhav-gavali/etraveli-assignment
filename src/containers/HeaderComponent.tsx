import React from 'react';
import SearchComponent from '../components/SearchComponent';
import SortComponent from '../components/SortComponent';
import { Row, Col } from '../components/common';
import './HeaderComponent.scss';

const HeaderComponent: React.FC = () => {
  return (
    <Row justifyContent="space-between">
      <Col flexBasis={'49%'} maxWidth={'49%'}>
        <SortComponent />
      </Col>
      <Col flexBasis={'49%'} maxWidth={'49%'}>
        <SearchComponent />
      </Col>
    </Row>
  );
};

export default HeaderComponent;
