import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './Reducer/Card'


export default configureStore({

    reducer:{
        card:cardReducer,
    }

})
