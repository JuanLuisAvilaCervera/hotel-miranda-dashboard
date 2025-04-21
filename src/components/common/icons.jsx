import styled from "styled-components";
import { IconContext } from "react-icons";

const Provider = ({className,children}) => 
    <IconContext.Provider
       value={{className}} 
    >
      {children}
    </IconContext.Provider>;
    
    export const StyledIcon= styled(Provider)`
        width: 2rem;
        height: 2rem;
        border-radius: 5px;
        padding: 0.4rem;
        &:hover{
            background-color: #ccc;
        }
    `