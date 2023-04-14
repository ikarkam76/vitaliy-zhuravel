import { NavList, NavListItem, NavContainer, MenuLink} from "./NavMenu.styled";


export const NavMenu = () => {

  function scrollTo(el) {
    const element = document.querySelector(el);
    if (window.screen.width < 768) {
      window.scroll({
        top: element.offsetTop -50,
        left: 0,
        behavior: 'smooth',
      });
    } else {
      window.scroll({
        left: element.offsetLeft,
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  return (
    <NavContainer>
      <NavList>
        <NavListItem>
          <MenuLink onClick={()=>scrollTo("#home")} >Home</MenuLink>
        </NavListItem>
        <NavListItem>
          <MenuLink onClick={()=>scrollTo("#about")} >About</MenuLink>
        </NavListItem>
        <NavListItem>
          <MenuLink onClick={()=>scrollTo("#skills")} >Skills</MenuLink>
        </NavListItem>
        <NavListItem>
          <MenuLink onClick={()=>scrollTo("#experience")} >Experience</MenuLink>
        </NavListItem>
        <NavListItem>
          <MenuLink onClick={()=>scrollTo("#education")} >Education</MenuLink>
        </NavListItem>
        <NavListItem>
          <MenuLink onClick={()=>scrollTo("#portfolio")} >Portfolio</MenuLink>
        </NavListItem>
        <NavListItem>
          <MenuLink onClick={()=>scrollTo("#contact")} >Contact</MenuLink>
        </NavListItem>
      </NavList>
    </NavContainer>
  );
}