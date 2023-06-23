import {
  FC,
  PropsWithChildren,
  MouseEventHandler,
  FormEventHandler,
  ChangeEventHandler,
  ReactNode,
} from 'react';

interface ICustomInputProps {
  onChange: ChangeEventHandler;
  onClick: MouseEventHandler;

  // you can pass exact type, but actually we dont need it
  // onChange: ChangeEventHandler<HTMLInputElement>;
}

interface IHeadLineProps {
  children: ReactNode;
}

// const HeadLine = ({ children }: IHeadLineProps) => {
// const HeadLine = (props: {children: ReactNode}) => {
const HeadLine = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const CustomInput = ({ onChange, onClick }: ICustomInputProps) => {
  return (
    <div onClick={onClick}>
      <input placeholder='dddd' className='ddd' onChange={onChange} />;
    </div>
  );
};

export const App = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target);
  };

  return (
    <div>
      <HeadLine>dfgfdgfd</HeadLine>
      <CustomInput onChange={handleChange} onClick={(e) => console.log(e.target)} />
    </div>
  );
};
