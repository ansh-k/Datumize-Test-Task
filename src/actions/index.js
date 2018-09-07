export const REQUEST_DATA = 'REQUEST_DATA';
export const REQUEST_CURRENT_USER = 'REQUEST_CURRENT_USER';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_PROJECTS = 'SET_PROJECTS';
export const SET_ROLES = 'SET_ROLES';
export const SET_USERS = 'SET_USERS';

export const requestData = item => ({ type: REQUEST_DATA, item });
export const requestCurrentUser = item => ({ type: REQUEST_CURRENT_USER, item });
export const setCurrentUser = item => ({ type: SET_CURRENT_USER, item });
export const setProjects = item => ({ type: SET_PROJECTS, item });
export const setRoles = item => ({ type: SET_ROLES, item });
export const setUsers = item => ({ type: SET_USERS, item });
