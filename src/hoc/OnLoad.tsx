import React, { useEffect } from 'react';

const OnLoad = (Component: React.FC<any>) => {
  const LoadComponent: React.FC = (props: any) => {
    const { load, loaded, loadParam } = props;

    useEffect(() => {
      if (!loaded) {
        load(loadParam);
      }
    }, []);

    return <Component {...props} />;
  };

  return LoadComponent;
};

export default OnLoad;
