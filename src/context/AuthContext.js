import React, { createContext, useCallback, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
	const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user')));

	const login = useCallback((user, remember) => {
		if (remember) {
			localStorage.setItem('user', JSON.stringify(user));
		} else {
			sessionStorage.setItem('user', JSON.stringify(user));
		}
		setUser(user);
	}, []);

	const logout = useCallback(() => {
		localStorage.setItem('user', null);
		sessionStorage.setItem('user', null);
		setUser(null);
	}, []);

	const value = { user, login, logout };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
