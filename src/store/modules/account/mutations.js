import { SET_ACCOUNT } from './mutation-types';

export const mutations = {
    /**
    *
    * @param { AccountState } state
    * @param { Object } account
    * @param { string } account.status
    * @param { string } account.token
    * @param { Object } account.user
    * @param { number } account.user.id
    * @param { string } account.user.login
    * @param { string } account.user.type
    */
    [SET_ACCOUNT](state, { account }) {
        state.status = account.status;
        state.token = account.token;
        state.user = account.user;
    },
};
