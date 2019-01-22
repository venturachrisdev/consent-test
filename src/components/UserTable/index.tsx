import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import * as React from 'react';
import ItemEntity from 'src/core/entities/ItemEntity';
import UserEntity from 'src/core/entities/UserEntity';

interface UserTableProps {
  users: UserEntity[];
}

const userTable: React.FunctionComponent<UserTableProps> = (props: UserTableProps) => {

  const renderConsents = (consents: ItemEntity[]) => {
    const texts = consents.map(consent => consent.text);
    return texts.join(', ');
  };

  const renderUser = (user: UserEntity, index: number) => (
    <TableRow key={index}>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{renderConsents(user.agreeTo)}</TableCell>
    </TableRow>
  );

  const renderList = (users: UserEntity[]) => users.map(renderUser);

  return (
    <>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Consent given for</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderList(props.users)}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

export default userTable;
