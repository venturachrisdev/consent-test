import { Grid } from '@material-ui/core';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import UserEntity from '../../core/entities/UserEntity';
import UserTable from '../../components/UserTable';
import Pagination from '../../components/Pagination';

interface ConsentManagementProps extends RouteComponentProps {
  loading: boolean;
  currentPage: number;
  totalPages: number;
  users: UserEntity[];
  fetchConsents: () => void;
  changePage: (page: number) => void;
}
export default class ConsentManagement extends React.PureComponent<ConsentManagementProps> {
  componentDidMount(): void {
    const { fetchConsents } = this.props;
    fetchConsents();
  }

  renderUserTable = () => {
    const { users, currentPage, totalPages, changePage } = this.props;
    return (
      <>
        <UserTable
          users={users}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChange={changePage}
        />
      </>
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
