// Context API
// Steps
// 1. Context Creation
// 2. Provider
// 3. Comsumer (it was so lengthy so it is deleted and replaced by : ) useContext Hook

import { createContext } from "react";

// Context Creation
const AppContext = createContext();

// Provider
const AppProvider = ({children}) => {
     return(
        <AppContext.Provider value="Provider Delivers A message Sucessfully">
            {children}   {/*means all data of our app are comes inside provider*/}
        </AppContext.Provider>
     );
}

export {AppContext, AppProvider}

// now we can use this provider i any place like in any component using useContext Hook