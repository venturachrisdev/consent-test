import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import IAppState from 'src/store/IAppState';
import ConsentManagement from './ConsentManagement';
import * as ConsentActions from '../../ducks/consent/operations';

const mapStateToProps = ({ consent }: IAppState) => {
  return {
    users: consent.pagination.usersPaginated,
    loading: consent.loading,
    currentPage: consent.pagination.currentPage,
    totalPages: consent.pagination.totalPages,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(ConsentActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ConsentManagement);
