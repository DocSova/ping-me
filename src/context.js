import { createContext } from 'react';

const UserContext = createContext({
    userEmail: "Null",
    updateUserEmail: () => {},
    userPassword: "Null",
    updateUserPassword: () => {}
});

export { UserContext }