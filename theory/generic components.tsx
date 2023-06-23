import { createContext, useContext } from 'react';

type TableProps<T> = {
  data: T[];
  onRowClick: (row: T) => void;
};

const Table = <T extends any>(props: TableProps<T>) => {
  return null;
};

const Parent = () => {
  return (
    <Table
      data={[{ id: 1 }]}
      onRowClick={(row) => {
        console.log(row);
      }}
    />
  );
};
