
const AuthState = {
    isAuthenticated: true
}

export const AuthReducer = (state = AuthState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true
            }
        case 'LOGOUT':            
            return {
                ...state,
                isAuthenticated: false
            }
        default:
            return state
    }
}
