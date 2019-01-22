import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { default as HomeIcon } from '@material-ui/icons/Home';
import { default as ListIcon } from '@material-ui/icons/List';

const drawerWidth = 300;

const styles = () => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  content: {
    marginTop: 80,
    width: '100%',
    padding: 20,
  },
});

interface LayoutProps {
  children: React.ReactNode;
  classes?: any;
}

class Layout extends React.PureComponent<LayoutProps> {
  render() {
    const { children, classes } = this.props;
    return (
      <div className={classes.root}>
        <Navbar className={classes.appBar} title={'Consents'} color={'primary'} />
        <Drawer
          open={true}
          className={classes.drawer}
          anchor={'left'}
          variant={'permanent'}
        >
          <div className={classes.drawer}>
            <List>
              <Link to={'/'} >
                <ListItem button={true}>
                  <ListItemIcon><HomeIcon/></ListItemIcon>
                  <ListItemText primary={'Give consent'} />
                </ListItem>
              </Link>
              <Link to={'/users'}>
                <ListItem button={true}>
                  <ListItemIcon><ListIcon/></ListItemIcon>
                  <ListItemText primary={'Collected consent'} />
                </ListItem>
              </Link>
            </List>
          </div>
        </Drawer>
        <div className={classes.content}>
          {children}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
