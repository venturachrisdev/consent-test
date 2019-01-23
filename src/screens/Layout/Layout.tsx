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
import styles from './styles';

interface LayoutProps {
  children: React.ReactNode;
  classes?: any;
}

class Layout extends React.PureComponent<LayoutProps> {
  // TODO: Move the drawer to a shared component
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
