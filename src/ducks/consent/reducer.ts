import ItemEntity from 'src/core/entities/ItemEntity';
import {
  ADD_CONSENT_OPTION,
  CHANGE_CONSENT_EMAIL,
  CHANGE_CONSENT_NAME, CREATE_CONSENT, CREATE_CONSENT_FAILED, CREATE_CONSENT_SUCCESS,
  FETCH_CONSENT_ITEMS,
  FETCH_CONSENT_ITEMS_FAIL,
  FETCH_CONSENT_ITEMS_SUCCESS,
  FETCH_CONSENT_LIST, FETCH_CONSENT_LIST_FAIL,
  FETCH_CONSENT_LIST_SUCCESS,
  REMOVE_CONSENT_OPTION,
} from 'src/ducks/consent/constants';

import {
  ChangeConsentEmail,
  ChangeConsentName,
  ConsentAction,
  CreateConsentFail,
  FetchConsentItemsFail,
  FetchConsentItemsSuccess,
  FetchConsentListFail,
  FetchConsentListSuccess,
  SelectConsentOption,
} from './actions';
import { consentInitialState, IConsentState } from './state';

const onFetchingConsentItems = (state: IConsentState): IConsentState => {
  state.loading = true;
  return state;
};

const onFetchConsentItems = (state: IConsentState,
                             action: FetchConsentItemsSuccess): IConsentState => {
  state.loading = true;
  state.items = action.payload;
  return state;
};

const onFetchConsentItemsError = (state: IConsentState,
                                  action: FetchConsentItemsFail): IConsentState => {
  state.loading = false;
  state.error = action.error;
  return state;
};

const onChangeConsentEmail = (state: IConsentState,
                              action: ChangeConsentEmail): IConsentState => {
  state.form = {
    ...state.form,
    email: action.payload,
  };
  return state;
};

const onChangeConsentName = (state: IConsentState,
                             action: ChangeConsentName): IConsentState => {
  state.form = {
    ...state.form,
    name: action.payload,
  };
  return state;
};

const onAddConsentOption = (state: IConsentState,
                            action: SelectConsentOption): IConsentState => {
  const agreeTo = [...state.form.agreeTo];
  const option: ItemEntity | undefined = state.items.find(item => item.id === action.payload);
  if (option) {
    if (agreeTo.indexOf(option) === -1) { // verify that its not present
      agreeTo.push(option);
    }
    state.form = {
      ...state.form,
      agreeTo,
    };
  }
  return state;
};

const onRemoveConsentOption = (state: IConsentState,
                               action: SelectConsentOption): IConsentState => {
  const agreeTo = [...state.form.agreeTo]
    .filter((option: ItemEntity) => option.id !== action.payload);
  state.form = {
    ...state.form,
    agreeTo,
  };
  return state;
};

const onFetchingConsentList = (state: IConsentState): IConsentState => {
  state.loading = true;
  return state;
};

const onFetchConsentList = (state: IConsentState,
                            action: FetchConsentListSuccess): IConsentState => {
  state.loading = false;
  state.users = action.payload;
  return state;
};

const onFetchConsentListFail = (state: IConsentState,
                                action: FetchConsentListFail): IConsentState => {
  state.loading = false;
  state.error = action.error;
  return state;
};

const onCreatingConsent = (state: IConsentState): IConsentState => {
  state.loading = true;
  state.created = false;
  return state;
};

const onCreateConsent = (state: IConsentState): IConsentState => {
  state.created = true;
  state.form = consentInitialState.form;
  return state;
};

const onCreateConsentFail = (state: IConsentState,
                             action: CreateConsentFail): IConsentState => {
  state.error = action.error;
  return state;
};

const actionHandlers = {};
actionHandlers[FETCH_CONSENT_ITEMS] = onFetchingConsentItems;
actionHandlers[FETCH_CONSENT_ITEMS_SUCCESS] = onFetchConsentItems;
actionHandlers[FETCH_CONSENT_ITEMS_FAIL] = onFetchConsentItemsError;
actionHandlers[CHANGE_CONSENT_EMAIL] = onChangeConsentEmail;
actionHandlers[CHANGE_CONSENT_NAME] = onChangeConsentName;
actionHandlers[ADD_CONSENT_OPTION] = onAddConsentOption;
actionHandlers[REMOVE_CONSENT_OPTION] = onRemoveConsentOption;
actionHandlers[FETCH_CONSENT_LIST] = onFetchingConsentList;
actionHandlers[FETCH_CONSENT_LIST_SUCCESS] = onFetchConsentList;
actionHandlers[FETCH_CONSENT_LIST_FAIL] = onFetchConsentListFail;
actionHandlers[CREATE_CONSENT] = onCreatingConsent;
actionHandlers[CREATE_CONSENT_SUCCESS] = onCreateConsent;
actionHandlers[CREATE_CONSENT_FAILED] = onCreateConsentFail;

const reducer = (state: IConsentState = consentInitialState,
                 action: ConsentAction): IConsentState => {
  if (actionHandlers[action.type]) {
    const handler = actionHandlers[action.type];
    return {
      ...state,
      ...handler(state, action),
    };
  }
  return consentInitialState;

};

export default reducer;
