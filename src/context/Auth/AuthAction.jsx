import authFetch from "../../service/Auth";

export const LOGIN_SUCCESS = "APP/LOGIN_SUCCESS";
export const LOGIN_FAILED = "APP/LOGIN_SUCCESS";
export const LOGIN_LOADING = "APP/LOGIN_SUCCESS";

const backend = new authFetch();

export const initialAuthState = {
    user: {},
    token: undefined,
    error: undefined,
    fetching: false
};

export const doLoginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
});

export const doLoginFailed = (payload) => ({
    type: LOGIN_FAILED,
    payload
});

export const doLoginLoading = () => ({
    type: LOGIN_LOADING
});

export const doLogin = async (dispatch, {email, password}) => {
    dispatch(doLoginLoading())
    try {
        const response = await backend.getToken(email,password);
        return dispatch(doLoginSuccess(response.data));
    } catch (error) {
        return dispatch(doLoginFailed(error));
    }
}