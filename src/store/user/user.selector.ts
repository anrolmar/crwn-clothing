import { UserState } from './user.types';

export const selectCurrentUser = ({ user }: { user: UserState }) => user?.currentUser;
