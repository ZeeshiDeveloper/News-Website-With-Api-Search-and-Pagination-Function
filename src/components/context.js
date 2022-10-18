// Context API
// Steps
// 1. Context Creation
// 2. Provider
// 3. Comsumer (it was so lengthy so it is deleted and replaced by : ) useContext Hook

import { createContext, useReducer, useEffect } from "react";
// Reducer import from reducer.js
import reducer from "./reducer";


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
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)            
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    },[]);    


     return(
        <AppContext.Provider value="Provider Delivers A message Sucessfully">
            {children}   {/*means all data of our app are comes inside provider*/}
        </AppContext.Provider>
     );
}

export {AppContext, AppProvider}

// now we can use this provider i any place like in any component using useContext Hook