import React from 'react';

interface Props {
  children?: JSX.Element[] | JSX.Element;
  flexDirection?:
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse'
    | 'initial'
    | 'inherit';
  alignItems?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit';
  rowClassName?: string | undefined;
}

const Row: React.FC<Props> = (props) => {
  const {
    alignItems,
    justifyContent,
    flexDirection,
    rowClassName = '',
    children,
  } = props;
  const styles = {
    alignItems,
    justifyContent,
    flexDirection,
    rowClassName,
  };

  return (
    <div
      className={`row ${rowClassName}`}
      style={{ display: 'flex', ...styles }}
    >
      {children}
    </div>
  );
};

export default Row;