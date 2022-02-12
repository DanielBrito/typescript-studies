import * as React from 'react';

interface IProps {
  message: string;
  children?: React.ReactChild;
}

const Loading: React.FunctionComponent<IProps> = ({
  message = 'Loading...',
  children,
}) => (
  <h1>
    {message}...
    {children}
  </h1>
);
export default Loading;
