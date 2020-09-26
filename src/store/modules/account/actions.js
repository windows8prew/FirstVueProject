import { SET_ACCOUNT } from './mutation-types';
import axios from "axios";

/**
 *
 * @param function commit
 * @param { Object } account
 * @param { string } account.status
 * @param { string } account.token
 * @param { Object } account.user
 * @param { number } account.user.id
 * @param { string } account.user.login
 * @param { string } account.user.type
 *
 */


export const actions = {
    setAccount : ({commit}, {account}) => commit(SET_ACCOUNT, {account}),
    login : ({commit}, user) => {
        return new Promise((resolve, reject) => {
            commit('auth_request');
            axios({url: 'http://localhost:8081/login', data: user, method: 'POST' })
                .then(resp => {
                    const account = resp.data.account;
                    localStorage.setItem('token', account.token);
                    axios.defaults.headers.common['Authorization'] = account.token;
                    commit(SET_ACCOUNT, account);
                    resolve(resp)
                })
                .catch(err => {
                    commit('auth_error');
                    localStorage.removeItem('token');
                    reject(err)
                })
        })
    }
};
