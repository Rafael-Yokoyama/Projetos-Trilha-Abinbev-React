import { CadastrarTypes } from "./types";

const initialState: any = {
  loading: false,
  error: false,
};

function reducerCadastrar(state = initialState, action: any) {
  switch (action.type) {
    case CadastrarTypes.POST_CADASTRO_REQUEST:
      return { ...state, loading: true };

    case CadastrarTypes.POST_CADASTRO_SUCCESS:
      return {
        ...state,
      };

    case CadastrarTypes.POST_CADASTRO_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

export default reducerCadastrar;
