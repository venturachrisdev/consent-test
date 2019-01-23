import { ChangePageAction } from '../actions';
import { CHANGE_PAGE } from '../constants';
import reducer from '../reducer';
import { consentInitialState, IConsentState } from '../state';

describe('Pagination component', () => {
  it('should change the current page', () => {
    const currentState: IConsentState = consentInitialState;
    currentState.users = [
      { name: '', email: '', agreeTo: [] },
      { name: '', email: '', agreeTo: [] },
      { name: '', email: '', agreeTo: [] },
      { name: '', email: '', agreeTo: [] },
      { name: '', email: '', agreeTo: [] },
    ];
    const newPage = 3;
    const action: ChangePageAction = {
      type: CHANGE_PAGE,
      payload: newPage,
    };
    const state: IConsentState = reducer(currentState, action);

    expect(state.pagination.currentPage).toEqual(newPage);
  });
});
