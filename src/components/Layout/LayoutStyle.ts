import styled from "styled-components";

export const LayoutContainer = styled.div<{$visibility : boolean}>`

    display: grid;

        grid-template: ${(props) => props.$visibility ? `
            "left top top" 4rem
            "left outlet outlet" 1fr / 20% 1fr
        `:`
            "top" 4rem
            "outlet" 1fr / 1fr
        `}

    
`;