import styled from "styled-components";

export const LayoutContainer = styled.div`

    display: grid;

        grid-template: ${(props) => props.$visibility ? `
            "left top top" 8rem
            "left outlet outlet" 1fr / 25% 1fr
        `:`
            "top" 8rem
            "outlet" 1fr / 1fr
        `}

    
`;