import { TodoItem, TypesTodo } from './types'
const initialStateTodo: TodoItem = {

  title: '',
  price:''
}
function reducerCar (state = initialStateTodo, action: any) {
    switch(action.type) {
      case TypesTodo.GET_CARRINHO:
        return {
        id: action.payload.id,
        title: action.payload.id,
        price: action.payload.price,
        }
      default: 
        return state
    }
}

export default reducerCar

/* case TypesTodo.ADICIONAR_NO_CARRINHO:
  return {
    carrinho: state.carrinho + 1
  };
case TypesTodo.DIMINUIR_DO_CARRINHO:
  return {
    carrinho: state.carrinho > 0 ? state.carrinho - 1 : state.carrinho,
  }; */