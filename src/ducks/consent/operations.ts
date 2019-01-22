import { Dispatch } from 'redux';
import UserEntity from 'src/core/entities/UserEntity';
import {
  ChangeConsentEmail,
  ChangeConsentName, ChangePageAction, CreateConsentAction,
  FetchConsentItemsAction, FetchConsentListAction,
  SelectConsentOption,
} from './actions';
import {
  ADD_CONSENT_OPTION,
  CHANGE_CONSENT_EMAIL,
  CHANGE_CONSENT_NAME, CHANGE_PAGE, CREATE_CONSENT, CREATE_CONSENT_FAILED, CREATE_CONSENT_SUCCESS,
  FETCH_CONSENT_ITEMS,
  FETCH_CONSENT_ITEMS_SUCCESS,
  FETCH_CONSENT_LIST, FETCH_CONSENT_LIST_FAIL,
  FETCH_CONSENT_LIST_SUCCESS,
  REMOVE_CONSENT_OPTION,
} from './constants';
import MockAdapter from 'src/core/utils/MockAdapter';

export const fetchConsentItems = () => {
  return (dispatch: Dispatch<FetchConsentItemsAction>) => {
    dispatch({ type: FETCH_CONSENT_ITEMS });
    // simulate an http call
    dispatch({
      type: FETCH_CONSENT_ITEMS_SUCCESS,
      payload: [
        { id: 1, text: 'Receive newsletter' },
        { id: 2, text: 'Be shown targeted ads' },
        { id: 3, text: 'Contribute to anonymous visit statistics' },
      ],
    });
  };
};

export const changeName = (value: string) => {
  return (dispatch: Dispatch<ChangeConsentName>) => {
    dispatch({
      type: CHANGE_CONSENT_NAME,
      payload: value,
    });
  };
};

export const changeEmail = (value: string) => {
  return (dispatch: Dispatch<ChangeConsentEmail>) => {
    dispatch({
      type: CHANGE_CONSENT_EMAIL,
      payload: value,
    });
  };
};

export const selectConsentOption = (id: number, checked: boolean) => {
  return (dispatch: Dispatch<SelectConsentOption>) => {
    if (checked) {
      dispatch({
        type: ADD_CONSENT_OPTION,
        payload: id,
      });
    } else {
      dispatch({
        type: REMOVE_CONSENT_OPTION,
        payload: id,
      });
    }
  };
};

export const fetchConsents = () => {
  return (dispatch: Dispatch<FetchConsentListAction>) => {
    const onError = (err: string) => ({
      type: FETCH_CONSENT_LIST_FAIL,
      error: err,
    });
    dispatch({ type: FETCH_CONSENT_LIST });
    MockAdapter.get('/consents').then((response) => {
      const data = response.data;
      if (data && data.consents) {
        dispatch({
          type: FETCH_CONSENT_LIST_SUCCESS,
          payload: data.consents,
        });
      } else {
        onError('Error');
      }
    }).catch(err => onError(err));
  };
};

export const createConsent = (user: UserEntity) => {
  return (dispatch: Dispatch<CreateConsentAction>) => {
    dispatch({ type: CREATE_CONSENT });
    const agreeTo = user.agreeTo.map(agree => agree.id);
    MockAdapter.post('/consents', {
      body: {
        agreeTo,
        name: user.name,
        email: user.email,
      },
    }).then((response) => {
      if (response.status === 201) {
        dispatch({ type: CREATE_CONSENT_SUCCESS });
      } else {
        dispatch({ type: CREATE_CONSENT_FAILED, error: 'A meaningful error' });
      }
    }).catch((err) => {
      console.log(err);
      dispatch({ type: CREATE_CONSENT_FAILED, error: err });
    });
  };
};

export const changePage = (page: number) => {
  return (dispatch: Dispatch<ChangePageAction>) => {
    dispatch({
      type: CHANGE_PAGE,
      payload: page,
    });
  };
};
