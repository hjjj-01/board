import { createStore } from "vuex"

const store = createStore({

    state(){
        return{
            noweffice:'1'
        }         
    },

    mutations:{
        //state是指store中的数据，newuser是指组件传递过来的新数据
        setnow(state,newdata){
            state.noweffice  = newdata
        }
    },

})

export default store
