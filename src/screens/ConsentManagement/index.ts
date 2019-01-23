import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import IAppState from 'src/store/IAppState';
import ConsentManagement from './ConsentManagement';
import * as ConsentActions from 'src/ducks/consent/operations';
import { selectors } from 'src/ducks/consent';

const mapStateToProps = ({ consent }: IAppState) => {
  return {
    users: selectors.getPaginatedUsers(consent.users, consent.pagination.currentPage),
    loading: consent.loading,
    currentPage: consent.pagination.currentPage,
    totalPages: selectors.getTotalPages(consent.users),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(ConsentActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ConsentManagement);
