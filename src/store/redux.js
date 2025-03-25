// 引入redux
import { configureStore } from '@reduxjs/toolkit';
import user from './modules/user';
import admin from './modules/admin';

const Store = configureStore({
  reducer: {
    user: user,
    admin: admin,
  }
});

// 2.创建存储对象
export default Store;
