import { CadastrarTypes } from "./types";

const initialState: any = {
  user: "",
  loading: false,
  error: false,
  registered: false,
  login: false
};

function reducerCadastrar(state = initialState, action: any) {
  switch (action.type) {
    case CadastrarTypes.POST_CADASTRO_REQUEST:
      return { ...state, loading: true };

    case CadastrarTypes.POST_CADASTRO_SUCCESS:
      return {
        user: action.payload.email,
        loading: false,
        error: false,
        registered: false,
        login: true
      };

    case CadastrarTypes.POST_CADASTRO_FAILURE:
      return { ...state, loading: false, error: true };

      case CadastrarTypes.  POST_LOGIN_REQUEST:
        return { ...initialState, loading: true }
      case CadastrarTypes.POST_LOGIN_SUCCESS:
        return {
          user: action.payload.email,
          loading: false,
          error: false,
          registered: true,
          login: false
        }
      case CadastrarTypes.POST_LOGIN_FAILURE:
        return { ...initialState, error: true }
    default:
      return state;
  }
}

export default reducerCadastrar;
