import {actions} from './actions';
import {mutations} from './mutations';
import {getters} from './getters';
import state from './state';
console.log('GETTERS', getters);
export default {
    namespaced: true,
    mutations: mutations,
    actions: actions,
    state: state,
    getters: getters,
};
