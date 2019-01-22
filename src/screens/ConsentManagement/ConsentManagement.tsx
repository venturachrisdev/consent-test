import { Grid } from '@material-ui/core';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import UserEntity from 'src/core/entities/UserEntity';
import UserTable from '../../components/UserTable';

interface ConsentManagementProps extends RouteComponentProps {
  loading: boolean;
  users: UserEntity[];
  fetchConsents: () => void;
}
export default class ConsentManagement extends React.PureComponent<ConsentManagementProps> {
  componentDidMount(): void {
    const { fetchConsents } = this.props;
    fetchConsents();
  }

  renderUserTable = () => {
    const { users } = this.props;
    return (
      <UserTable users={users}/>
    );
  }

  renderLoading = () => (
    <p>Loading users...</p>
  )

  renderContent = () => {
    const { loading } = this.props;
    return loading ? this.renderLoading() : this.renderUserTable();
  }

  render() {
    return (
      <Grid container={true} justify={'center'}>
        <Grid lg={6} item={true}>
          {this.renderContent()}
        </Grid>
      </Grid>
    );
  }
}
