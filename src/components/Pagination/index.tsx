import { Button, Grid } from '@material-ui/core';
import * as React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

const pagination: React.FunctionComponent<PaginationProps> = ({ currentPage, totalPages, onChange }
: PaginationProps) => {

  const onNext = () => {
    onChange(currentPage + 1);
  };

  const onPrev = () => {
    onChange(currentPage - 1);
  };

  const onChangePage = (page: number) => (ev: React.MouseEvent) => {
    onChange(page);
  };

  const renderNumbers = () => Array.from(Array(5), (v, index) => index + 1)
    .map(n => (<Button key={n} onClick={onChangePage(n)} disabled={currentPage === n}>{n}</Button>),
    );

  return (
    <Grid container={true} justify={'space-between'} className={'mt-5'}>
      <Button onClick={onPrev} disabled={currentPage === 1}>Previous</Button>
      <Grid item={true} justify={'center'}>
        {renderNumbers()}
      </Grid>
      <Button onClick={onNext} disabled={currentPage === totalPages}>Next</Button>
    </Grid>
  );
};

export default pagination;
