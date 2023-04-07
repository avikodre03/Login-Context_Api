import { createContext, useState } from "react";

export  const mainContext =createContext();


function MainProvider({children}){
    const [isloggedIn, setisloggedIn] = useState(false)
    const [userName, setuserName] = useState("")
    return(
        <mainContext.Provider value={{isloggedIn , setisloggedIn,userName,setuserName}}>
            {children}
            </mainContext.Provider>
    ); 
}

export default MainProvider;
