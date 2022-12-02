import React from 'react';
import './Loader.scss';

interface Props {
  size?: 'small' | 'medium' | 'large';
}

const Loader: React.FC<Props> = (props) => {
  const { size = 'medium' } = props;

  return <div className={`loader ${size}`}></div>;
};

export default Loader;
