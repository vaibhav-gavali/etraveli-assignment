import React from 'react';

interface Props {
  children?: JSX.Element[] | JSX.Element;
  flexBasis?: number | 'auto' | 'initial' | 'inherit' | string;
  maxWidth?: number | string;
  fullWidth?: boolean;
  colClassName?: string | undefined;
}

const Col: React.FC<Props> = (props) => {
  const {
    flexBasis = 'auto',
    maxWidth = 'auto',
    fullWidth = false,
    colClassName = '',
    children,
  } = props;

  const styles = {
    flexBasis,
    maxWidth,
    width: fullWidth ? '100%' : 'auto',
    colClassName,
  };

  return (
    <div className={`col ${colClassName}`} style={{ flexGrow: 0, ...styles }}>
      {children}
    </div>
  );
};

export default Col;
