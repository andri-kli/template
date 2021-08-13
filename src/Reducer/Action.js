

// WITH THUNK
export const login = (payload) => (dispatch) => {
    // misal di sini ada axios
    dispatch({type: 'LOGIN', payload });
}

// WITHOUT THUNK
export const logout = (payload) => {
    return {type: 'LOGOUT', payload }
}
