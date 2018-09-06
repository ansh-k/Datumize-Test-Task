export const REQUEST_DATA = 'REQUEST_DATA';
export const SET_PROJECTS = 'SET_PROJECTS';
export const SET_ROLES = 'SET_ROLES';
export const SET_USERS = 'SET_USERS';

export const requestData = item => ({ type: REQUEST_DATA, item });
export const setProjects = item => ({ type: SET_PROJECTS, item });
export const setRoles = item => ({ type: SET_ROLES, item });
export const setUsers = item => ({ type: SET_USERS, item });
