import Home from './Home';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as ConsentOperations from '../../ducks/consent/operations';
import IAppState from '../../store/IAppState';

const mapStateToProps = ({ consent }: IAppState) => {
  return {
    form: consent.form,
    items: consent.items,
    loading: consent.loading,
    created: consent.created,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(ConsentOperations, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
