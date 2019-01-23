import { Button, Grid } from '@material-ui/core';
import * as React from 'react';
import { getMinMaxRange, MAX_PAGINATION_RANGE } from 'src/components/Pagination/paginationUtils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

/**
 * This component is responsible for rendering the pagination page's numbers
 * and the prev, next buttons
 * @param currentPage
 * @param totalPages
 * @param onChange
 */
const pagination: React.FunctionComponent<PaginationProps> = ({ currentPage, totalPages, onChange }
: PaginationProps) => {

  const onNext = () => {
    onChange(currentPage + 1);
  };

  const onPrev = () => {
    onChange(currentPage - 1);
  };

  const onChangePage = (page: number) => () => {
    onChange(page);
  };

  /*
   * This method render a range of pages based on the number given.
   * It also starts from a specific number if provided.
   * renderRange(5) => [1, 2, 3, 4, 5]
   * renderRange(3, 5) => [5, 6, 7]
   */
  const renderRange = (range: number, starts: number = 1) =>
    Array.from(Array(range), (v, index) => index + starts)
    .map(n => (
      <Button key={n} onClick={onChangePage(n)} disabled={currentPage === n}>{n}</Button>),
    );

  const renderDots = () => (<Button disabled={true}>{'...'}</Button>);

  const renderNumbers = () => {
    // No need to render dots
    if (totalPages <= MAX_PAGINATION_RANGE) {
      return renderRange(totalPages);
    }
    // Get the ranges of available numbers to print
    const range = getMinMaxRange(currentPage, totalPages);
    return (
      <>
        {renderDots()}
        {/* From min to current page, starting from min */}
        {renderRange(currentPage  - range[0], range[0])}
        {/* Current page */}
        {renderRange(1, currentPage)}
        {/* From currentPage + 1 to max, starting from currentPage + 1 */}
        {renderRange(range[1] - currentPage, currentPage + 1)}
        {renderDots()}
      </>
    );
  };

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
