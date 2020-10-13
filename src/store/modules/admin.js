// 1.创建存储
function reducerAdmin(state = { name: 'zhangsan', age: 25 }, action) {
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

export default reducerAdmin;
