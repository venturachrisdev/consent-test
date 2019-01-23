import { CreateConsentFail, CreateConsentSuccess, CreatingConsent } from '../actions';
import { CREATE_CONSENT, CREATE_CONSENT_FAILED, CREATE_CONSENT_SUCCESS } from '../constants';
import reducer from '../reducer';
import { consentInitialState } from '../state';
import MockAdapter from '../../../core/utils/MockAdapter';

describe('Create consent reducer', () => {
  it('should set a loading state', () => {
    const initialState = consentInitialState;
    const action: CreatingConsent = {
      type: CREATE_CONSENT,
    };

    const state = reducer(initialState, action);
    expect(state.loading).toBeTruthy();
    expect(state.created).toBeFalsy();
  });

  it('should create a new consent', () => {
    const initialState = consentInitialState;
    const action: CreateConsentSuccess = {
      type: CREATE_CONSENT_SUCCESS,
    };

    const state = reducer(initialState, action);
    expect(state.loading).toBeFalsy();
    expect(state.created).toBeTruthy();
  });

  it('should send a new consent', async () => {
    const { status } = await MockAdapter.post('/consents', {
      body: {
        name: 'Hey',
        email: 'true@ordare.com',
        agreeTo: [1, 2, 3],
      },
    });

    expect(status).toBe(201);
  });

  it('should set an error state', () => {
    const ERR_CODE = 'BAD_REQUEST';
    const initialState = consentInitialState;
    const action: CreateConsentFail = {
      type: CREATE_CONSENT_FAILED,
      error: ERR_CODE,
    };

    const state = reducer(initialState, action);
    expect(state.loading).toBeFalsy();
    expect(state.error).toEqual(ERR_CODE);
    expect(state.created).toBeFalsy();
  });
});
