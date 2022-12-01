import React from 'react';

interface Props {
  children?: JSX.Element[] | JSX.Element;
  flexBasis?: number | 'auto' | 'initial' | 'inherit' | string;
  maxWidth?: number | string;
  fullWidth?: boolean;
  colClassName?: string | undefined;
  flexGrow?: number;
}

const Col: React.FC<Props> = (props) => {
  const {
    flexBasis = 'auto',
    maxWidth = 'auto',
    fullWidth = false,
    colClassName = '',
    flexGrow = 0,
    children,
  } = props;

  const styles = {
    flexBasis,
    maxWidth,
    width: fullWidth ? '100%' : 'auto',
    colClassName,
    flexGrow,
  };

  return (
    <div className={`col ${colClassName}`} style={{ ...styles }}>
      {children}
    </div>
  );
};

export default Col;
