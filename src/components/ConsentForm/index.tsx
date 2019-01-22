import * as React from 'react';
import {
  FormControlLabel,
  TextField,
  Checkbox,
  Button,
} from '@material-ui/core';

interface ConsentFormProps {
  onSubmit?: () => {};
  consentOptions: any[];
  onOptionChecked: (id: string, checked: boolean) => void;
}

const consentForm: React.FunctionComponent<ConsentFormProps> = (props: ConsentFormProps) => {
  const { onSubmit, consentOptions, onOptionChecked } = props;

  const onChecked = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = ev.target;
    onOptionChecked(value, checked);
  };

  const renderFields = () => {
    return (
      <>
        <TextField
          id={'userName'}
          label={'Name'}
        />
        <TextField
          id={'userEmail'}
          label={'Email'}
          type={'email'}
        />
      </>
    );
  };

  const renderConsentOptions = () => {
    return consentOptions && consentOptions.map((consent, i) => {
      return (
        <FormControlLabel
          key={i}
          control={<Checkbox value={`${consent.id}`} onChange={onChecked}/>}
          label={consent.text}
        />
      );
    });
  };

  const renderSubmitButton = () => {
    return (
      <Button variant={'contained'} color={'primary'}>{'Give consent'}</Button>
    );
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        {renderFields()}
        <p>I agree to:</p>
        <div>
          {renderConsentOptions()}
        </div>
        {renderSubmitButton()}
      </form>
    </>
  );
};

export default consentForm;
