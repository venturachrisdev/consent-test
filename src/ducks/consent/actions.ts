import UserEntity from 'src/core/entities/UserEntity';
import {
  FETCH_CONSENT_ITEMS,
  FETCH_CONSENT_ITEMS_SUCCESS,
  FETCH_CONSENT_ITEMS_FAIL,
  CHANGE_CONSENT_EMAIL,
  CHANGE_CONSENT_NAME,
  ADD_CONSENT_OPTION,
  REMOVE_CONSENT_OPTION,
  FETCH_CONSENT_LIST,
  FETCH_CONSENT_LIST_SUCCESS,
  FETCH_CONSENT_LIST_FAIL, CREATE_CONSENT_SUCCESS, CREATE_CONSENT, CREATE_CONSENT_FAILED,
} from './constants';
import ItemEntity from '../../core/entities/ItemEntity';

// Fetch Consent Items
export interface FetchingConsentItems {
  type: FETCH_CONSENT_ITEMS;
}

export interface FetchConsentItemsSuccess {
  type: FETCH_CONSENT_ITEMS_SUCCESS;
  payload: ItemEntity[];
}

export interface FetchConsentItemsFail {
  type: FETCH_CONSENT_ITEMS_FAIL;
  error: string;
}

export type FetchConsentItemsAction = FetchConsentItemsSuccess
  | FetchConsentItemsFail
  | FetchingConsentItems;

// Change variables
export interface ChangeConsentEmail {
  type: CHANGE_CONSENT_EMAIL;
  payload: string;
}

export interface ChangeConsentName {
  type: CHANGE_CONSENT_NAME;
  payload: string;
}

export interface SelectConsentOption {
  type: ADD_CONSENT_OPTION | REMOVE_CONSENT_OPTION;
  payload: number;
}

export type ChangeConsentFormAction = ChangeConsentEmail
  | ChangeConsentName
  | SelectConsentOption;

// Fetch consent list
export interface FetchingConsentList {
  type: FETCH_CONSENT_LIST;
}

export interface FetchConsentListSuccess {
  type: FETCH_CONSENT_LIST_SUCCESS;
  payload: UserEntity[];
}

export interface FetchConsentListFail {
  type: FETCH_CONSENT_LIST_FAIL;
  error: string;
}

export type FetchConsentListAction  = FetchingConsentList
  | FetchConsentListSuccess
  | FetchConsentListFail;

// Create consent
export interface CreatingConsent {
  type: CREATE_CONSENT;
}

export interface CreateConsentSuccess {
  type: CREATE_CONSENT_SUCCESS;
}

export interface CreateConsentFail {
  type: CREATE_CONSENT_FAILED;
  error: string;
}

export type CreateConsentAction = CreatingConsent
  | CreateConsentSuccess
  | CreateConsentFail;

// Global

export type ConsentAction = FetchConsentItemsAction
  | ChangeConsentFormAction
  | FetchConsentListAction
  | CreateConsentAction;
