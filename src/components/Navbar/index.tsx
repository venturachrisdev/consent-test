import { AppBar, Toolbar, Typography } from '@material-ui/core';
import * as React from 'react';

interface INavbarProps {
  title: string;
  color: 'inherit' | 'primary' | 'secondary' | 'default' | undefined;
  className?: string;
}

const navBar: React.FunctionComponent<INavbarProps> = ({ color, title, className }
: INavbarProps) => {
  return (
    <>
      <AppBar position={'fixed'} color={color} className={className}>
        <Toolbar>
          <Typography variant="h6" color="inherit">{title}</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default navBar;
