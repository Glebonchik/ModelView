import React from "react";
import {createContext, useState, useContext } from "react"
import { avatarContextProps } from "../interfaces/avatarContextProps"

const AvatarContext = createContext<avatarContextProps>({
    avatar: null,
    setAvatar: () => {}
});

export const AvatarProvider = ({ children }: { children: React.ReactNode }) => {
    const [avatar, setAvatar] = useState<string | null>(null);

    return(
        <AvatarContext.Provider value={{avatar, setAvatar}}>
            {children}
        </AvatarContext.Provider>
    )
}

export const useAvatar = () =>{
    return useContext(AvatarContext)
}

export default AvatarContext