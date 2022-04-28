export interface IState {
  registration: IRegistrationState;
  posts: any;
  modal: IModal;
  groups: any;
}

export interface IRegistrationState {
  user: IUserRegistrationState;
  isFetching: boolean;
  error: false;
}

export interface IUserRegistrationState {
  _id: string;
  username: string;
  email: string;
  profilePicture: string;
  coverPicture: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  isFetching: boolean;
  error: boolean;
}

export interface IModal {
  modalType: string;
  isModalOpen: boolean;
  modalProps: {
    title: string
  };
}
