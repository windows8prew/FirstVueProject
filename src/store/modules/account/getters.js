/**
*
* 
* @param { AccountState } state
* @return { string }
*/
export const getters = {
    isLoggedIn : state => state.token
};