import { authActions } from "../constants/authConstant";
export const authReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case authActions.LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }

        case authActions.TOKEN:
            return {
                ...state,
                loading: false,
                token: payload

            }

        case authActions.LOAD_USER:
            return {
                ...state,
                loading: false,
                userDetails: payload

            }
        case authActions.ERROR:
            return {
                ...state,
                loading: false,
                userDetails: null,
                error: payload
            }
        case authActions.LOGOUT:
            return {
                ...state,
                token: null,
                userDetails: null,
            }
    }


}


