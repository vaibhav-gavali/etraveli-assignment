import React from 'react';
import SearchComponent from '../components/SearchComponent';
import SortComponent from '../components/SortComponent';
import { Row, Col } from '../components/common';
import './HeaderComponent.scss';

const HeaderComponent: React.FC = () => {
  return (
    <Row justifyContent="space-between" rowClassName="header-wrapper">
      <Col flexBasis={'20%'} maxWidth={'20%'}>
        <SortComponent />
      </Col>
      <Col flexBasis={'76%'} maxWidth={'76%'}>
        <SearchComponent />
      </Col>
    </Row>
  );
};

export default HeaderComponent;
