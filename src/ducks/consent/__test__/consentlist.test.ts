import MockAdapter from '../../../core/utils/MockAdapter';
import { FetchConsentListFail, FetchConsentListSuccess, FetchingConsentList } from '../actions';
import {
  FETCH_CONSENT_LIST,
  FETCH_CONSENT_LIST_FAIL,
  FETCH_CONSENT_LIST_SUCCESS,
} from '../constants';
import reducer from '../reducer';
import { consentInitialState, IConsentState } from '../state';

describe('User consents list reducer', () => {

  it('should set loading state', () => {
    const currentState: IConsentState = consentInitialState;
    const action: FetchingConsentList = {
      type: FETCH_CONSENT_LIST,
    };

    const state = reducer(currentState, action);

    expect(state.loading).toBeTruthy();
  });

  it('should set users list', async () => {
    const currentState: IConsentState = consentInitialState;
    // mock the response
    const { data: { consents } } = await MockAdapter.get('/consents');
    const action: FetchConsentListSuccess = {
      type: FETCH_CONSENT_LIST_SUCCESS,
      payload: consents,
    };

    const state = reducer(currentState, action);

    expect(state.loading).toBeFalsy();
    expect(state.users.length).toBeGreaterThanOrEqual(1);
  });

  it('should set an error state', () => {
    const ERR_CODE = 'NO_INTERNET_CONNECTION';
    const currentState: IConsentState = consentInitialState;
    const action: FetchConsentListFail = {
      type: FETCH_CONSENT_LIST_FAIL,
      error: ERR_CODE,
    };

    const state = reducer(currentState, action);

    expect(state.loading).toBeFalsy();
    expect(state.error).toEqual(ERR_CODE);
  });
});
