export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const SIGN_OFF_AUTHED_USER = 'SIGN_OFF_AUTHED_USER'

export function setAuthedUser(id) {
    return {
        type : SET_AUTHED_USER,
        id
    }
}

export function signOffAuthedUser(){
    return {
        type : SIGN_OFF_AUTHED_USER
    }
}