import { createContext, useContext } from 'react';

const ParentComponent = () => {
  return <Modal type='alert'></Modal>;
};

// type ModalProps = {
//   type: 'alert' | 'confirm';
//   confirmButtonMessage?: string;
// };

// discriminated union types in props, pattern for creating dynamic types
type ModalProps =
  | {
      type: 'alert';
    }
  | {
      type: 'confirm';
      confirmButtonMessage?: string;
    };

const Modal = (props: ModalProps) => {
  return null;
};
