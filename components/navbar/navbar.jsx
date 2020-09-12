import { NavBar, FlexContainer, NavLinks, BurgerWrapper } from './navbar.styles';
import Brand from '../brand/brand';
import BurgerMenu from '../burger-menu/burger-menu';
import CollapseMenu from '../collapse-menu/collapse-menu';
import { useSpring, config } from "react-spring";
import Link from '../link/link.component';

const Navbar = ({ navbarState, handleNavbar }) => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
            <Link href="/about"><a>about us</a></Link>
            <Link href="/clients"><a>clients</a></Link>
            <Link href="/technologies"><a>technologies</a></Link>
            <Link href="/working"><a>working with us</a></Link>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={navbarState}
              handleNavbar={handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={navbarState}
        handleNavbar={handleNavbar}
      />
    </>
  );
};

export default Navbar;