import * as React from 'react';
import {
  TextField,
  Checkbox,
  Button,
  Grid,
  withStyles,
  Typography,
  ListItem,
  List,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import ItemEntity from 'src/core/entities/ItemEntity';
import styles from './styles';

interface ConsentFormProps {
  name: string;
  email: string;
  consentOptions: any[];
  selectedItems: ItemEntity[];
  onChangeName: (ev: React.ChangeEvent) => void;
  onChangeEmail: (ev: React.ChangeEvent) => void;
  onOptionChecked: (ev: React.ChangeEvent) => void;
  onSubmit?: (ev: React.FormEvent) => void;
  classes?: any;
}

const consentForm: React.FunctionComponent<ConsentFormProps> = (props: ConsentFormProps) => {

  const renderFields = () => {
    return (
      <Grid
        container={true}
        justify={'center'}
        spacing={24}
        className={props.classes.fields}
      >
        <Grid item={true}>
          <TextField
            id={'userName'}
            label={'Name'}
            value={props.name}
            onChange={props.onChangeName}
          />
        </Grid>
        <Grid item={true}>
        <TextField
          id={'userEmail'}
          label={'Email address'}
          type={'email'}
          value={props.email}
          onChange={props.onChangeEmail}
        />
        </Grid>
      </Grid>
    );
  };

  const renderConsentOptions = () => {
    return props.consentOptions && props.consentOptions.map((consent, i) => {
      // Check is marked as a selected item
      const checked = props.selectedItems.indexOf(consent) !== -1;
      const control = (
        <Checkbox
          value={`${consent.id}`}
          onChange={props.onOptionChecked}
          checked={checked}
        />
      );
      return (
        <ListItem key={i}>
          <ListItemText>{consent.text}</ListItemText>
          <ListItemSecondaryAction>{control}</ListItemSecondaryAction>
        </ListItem>
      );
    });
  };

  const shouldButtonBeDisabled = () => {
    // if there are no selected items or there's no email or name.
    return props.selectedItems.length === 0 || props.email.length === 0 || props.name.length === 0;
  };

  const renderSubmitButton = () => {
    return (
      <Button
        variant={'contained'}
        color={'primary'}
        type={'submit'}
        fullWidth={true}
        disabled={shouldButtonBeDisabled()}
        className={props.classes.btn}
      >
        {'Give consent'}
      </Button>
    );
  };

  return (
    <Grid container={true} justify={'center'}>
      <form onSubmit={props.onSubmit}>
        {renderFields()}
        <Typography align={'center'} variant={'h6'}>I agree to:</Typography>
        <List>
          {renderConsentOptions()}
        </List>
        <Grid item={true}>
          {renderSubmitButton()}
        </Grid>
      </form>
    </Grid>
  );
};

export default withStyles(styles)(consentForm);
