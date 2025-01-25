import { createStore } from "vuex"

const store = createStore({

    state(){
        return{
            noweffice:'1'
        }         
    },

    mutations:{
        setnow(state,newdata){
            state.noweffice  = newdata
        }
    },

})

export default store
