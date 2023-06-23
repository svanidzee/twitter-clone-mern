import { useState, ChangeEventHandler, ReactNode } from 'react';

interface ICustomInputProps {
  onChange: ChangeEventHandler;
}

export interface IUser {
  id: number;
}

const HeadLine = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const CustomInput = ({ onChange }: ICustomInputProps) => {
  return (
    <div>
      <input placeholder='dddd' className='ddd' onChange={onChange} />;
    </div>
  );
};

export const App = () => {
  // when state is array
  const [users, setUsers] = useState<IUser>({} as IUser);
  console.log(users);

  // when state is string we can use generic
  const [user1, setUser1] = useState<string>('');
  // or we can just omit, and ts infers types
  const [user, setUser] = useState('');

  return (
    <div>
      <HeadLine>dfgfdgfd</HeadLine>
      <CustomInput
        onChange={() => {
          setUsers({ id: 2 });
        }}
      />
    </div>
  );
};
