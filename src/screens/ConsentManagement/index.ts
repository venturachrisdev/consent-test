import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import IAppState from 'src/store/IAppState';
import ConsentManagement from './ConsentManagement';
import * as ConsentActions from '../../ducks/consent/operations';

const mapStateToProps = ({ consent }: IAppState) => {
  return {
    users: consent.users,
    loading: consent.loading,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(ConsentActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ConsentManagement);
