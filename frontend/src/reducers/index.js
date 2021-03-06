import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import form from './form';
import github from './github';
import groups from './groups';
import collectives from './collectives';
import users from './users';
import notification from './notification';
import transactions from './transactions';
import expenses from './expenses';
import donations from './donations';
import session from './session';
import subscriptions from './subscriptions';
import images from './images';
import homepage from './homepage';
import discover from './discover';
import app from './app';
import connectedAccounts from './connectedAccounts';

export default combineReducers({
  form,
  github,
  groups,
  notification,
  images,
  session,
  subscriptions,
  transactions,
  expenses,
  donations,
  users,
  router,
  homepage,
  discover,
  app,
  connectedAccounts,
  collectives,
});
