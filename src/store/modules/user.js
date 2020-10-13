// 1.创建存储
function reducerUser(state = { name: 'blue', age: 18 }, action) {
  switch (action.type) {
    case 'R_SET_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'R_ADD_AGE':
      return {
        ...state,
        age: state.age + action.n
      };
    default:
      return state;
  }
}

export default reducerUser;
