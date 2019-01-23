import ItemEntity from '../../../core/entities/ItemEntity';
import { ChangeConsentEmail, ChangeConsentName, SelectConsentOption } from '../actions';
import {
  ADD_CONSENT_OPTION,
  CHANGE_CONSENT_EMAIL,
  CHANGE_CONSENT_NAME,
  REMOVE_CONSENT_OPTION,
} from '../constants';
import { consentInitialState, IConsentState } from '../state';
import reducer from '../reducer';

describe('Consent form reducer', () => {
  it('should change the email form', () => {
    const inputEmail = 'cventura@hurrabit.com';

    const currentState: IConsentState = consentInitialState;
    const action: ChangeConsentEmail = {
      type: CHANGE_CONSENT_EMAIL,
      payload: inputEmail,
    };

    const state: IConsentState = reducer(currentState, action);
    expect(state.form.email).toEqual(inputEmail);
  });

  it('should change the name form', () => {
    const inputName = 'Christopher Ventura';

    const currentState: IConsentState = consentInitialState;
    const action: ChangeConsentName = {
      type: CHANGE_CONSENT_NAME,
      payload: inputName,
    };

    const state: IConsentState = reducer(currentState, action);
    expect(state.form.name).toEqual(inputName);
  });

  it('should add an item to the form', () => {
    const consentItem: ItemEntity = { id: 1, text: 'Hey' };

    const currentState: IConsentState = consentInitialState;
    const action: SelectConsentOption = {
      type: ADD_CONSENT_OPTION,
      payload: consentItem.id,
    };

    const state: IConsentState = reducer(currentState, action);
    expect(state.form.agreeTo).toHaveLength(1);
  });

  it('should remove an item from the form', () => {
    const consentItem: ItemEntity = { id: 1, text: 'Hey' };
    const consentItem2: ItemEntity = { id: 2, text: 'Hey 2' };

    const currentState: IConsentState = consentInitialState;
    currentState.form.agreeTo = [consentItem, consentItem2];
    const action: SelectConsentOption = {
      type: REMOVE_CONSENT_OPTION,
      payload: consentItem.id,
    };

    const state: IConsentState = reducer(currentState, action);
    expect(state.form.agreeTo).toHaveLength(1);
    expect(state.form.agreeTo[0].id).toBe(2);
  });
});
