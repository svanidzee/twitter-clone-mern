import {
  FC,
  PropsWithChildren,
  useState,
  MouseEventHandler,
  FormEventHandler,
  ChangeEventHandler,
} from 'react';

interface IHeadLineProps {
  data: string;
}
interface ICustomInputProps {
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: ChangeEventHandler;
  onClick: MouseEventHandler;
  // onChange: ChangeEventHandler<HTMLInputElement>;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
}

const HeadLine: FC<PropsWithChildren<IHeadLineProps>> = ({ children, data }) => {
  return (
    <div>
      {children}
      {data}
    </div>
  );
};

const CustomInput = ({ onChange, onClick }: ICustomInputProps) => {
  return (
    <div onClick={onClick}>
      <input placeholder='dddd' className='ddd' onChange={onChange} />;
    </div>
  );
};

export const App = () => {
  // when state is array
  const [users, setUsers] = useState<IUser[]>([]);

  // when state is string we can use generic
  const [user1, setUser1] = useState('');
  // or we can just omit, and ts infers types
  const [user, setUser] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUser(e.target.value);
    console.log(users);
  };

  return (
    <div>
      <HeadLine data={'dddd'}>dfgfdgfd</HeadLine>
      <CustomInput onChange={handleChange} onClick={(e) => console.log(e.target)} />
    </div>
  );
};
