import { useNavigate } from "react-router";
import { ListElement } from "./LeftMenu/LeftMenu";

const NavList = ({page, content, active , activate}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(page);
        activate();
    }

    return <ListElement onClick={handleClick} $active={active}>{content}</ListElement>;
}

export default NavList