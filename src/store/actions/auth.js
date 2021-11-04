import {types} from "../types";

export const login = (uid, displayName) => ({
    type: types.login,
    payload:{uid, displayName},

})
export const logout = ()=>({
    type: types.logout,
    
})