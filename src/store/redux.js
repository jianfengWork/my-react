// 引入redux
import { createStore, combineReducers } from 'redux';
import user from './modules/user';
import admin from './modules/admin';

const Store = combineReducers({
  user: user,
  admin: admin,
});

// 2.创建存储对象
export default createStore(Store);
