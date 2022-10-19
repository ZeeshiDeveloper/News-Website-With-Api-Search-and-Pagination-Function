// Context API
// Steps
// 1. Context Creation
// 2. Provider
// 3. Comsumer (it was so lengthy so it is deleted and replaced by : ) useContext Hook

import { createContext, useReducer, useEffect } from "react";
// Reducer import from reducer.js
import reducer from "./reducer";

// this API comes from real time API
// hn.algolia.com/api
let API = "http://hn.algolia.com/api/v1/search?";

// initialState
 const initialState = {
        isLoading:true,
        hits:[],
        nbPages:0,
        page:0,
        query:"HTML",
    }

// Context Creation
const AppContext = createContext();

// Provider
const AppProvider = ({children}) => {

    // useReducer Hook(Changing in state)
    const [state, dispatch] = useReducer(reducer, initialState)

    
    const fetchApiData = async (url) => {
        dispatch({type: "SET_LOADING"})

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type:"GET_STORIES",
                payload:{
                    hits:data.hits,    //now are data array updated in hits
                    nbPages:data.nbPages
                }
            })            //now go to reducer
        } catch (error) {
            console.log(error)
        }
    }

    // to remove the post
    const removeItem = (id) => {
        dispatch({type : "REMOVE_POST",payload: id})
    }

    // search
    const searchPost = (searchVal) =>{
        dispatch({type:"SEARCH_POST", payload:searchVal})
    }

    // Pagination
    const getPrevPage = () => {
        dispatch({type:"PREV_PAGE"})
    }
    const getNextPage = () => {
        dispatch({type:"NEXT_PAGE"})
    }
    
    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    },[state.query,state.page]);    


     return(
        <AppContext.Provider value={{...state, removeItem, searchPost, getPrevPage, getNextPage}}>
            {children}   {/*means all data of our app are comes inside provider*/}
        </AppContext.Provider>
     );
}

export {AppContext, AppProvider}

// now we can use this provider i any place like in any component using useContext Hook