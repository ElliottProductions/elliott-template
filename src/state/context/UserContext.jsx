import { createContext, useEffect, useMemo, useState } from 'react';
import {
  getUser,
  onAuthChange,
} from '../services/user-service.js';

export const UserStateContext = createContext();
export const UserActionContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(getUser());




  useEffect(() => {

    const { data } = onAuthChange((event) => {
      if (event == 'SIGNED_IN');
      if (event == 'SIGNED_OUT') {
        setUser(null);
      }
    });
    return () => {
      data.unsubscribe();
    };
  }, []);

  const stateValue = {
    user,
  };

  const actionValue = useMemo(
    () => ({
      setUser,

    }),
    [setUser]
  );

  return (
    <UserStateContext.Provider value={stateValue}>
      <UserActionContext.Provider value={actionValue}>
        {children}
      </UserActionContext.Provider>
    </UserStateContext.Provider>
  );
}
