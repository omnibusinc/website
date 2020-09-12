import { useSpring } from "react-spring";
import { CollapseWrapper, NavLinks } from './collapse-menu.styles';

const CollapseMenu = ({ navbarState, handleNavbar}) => {
  const { open } = useSpring({ open: navbarState ? 0 : 1 });

  if (navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <li>
            <a href="/" onClick={handleNavbar}>
              link n1
            </a>
          </li>
          <li>
            <a href="/" onClick={handleNavbar}>
              link n2
            </a>
          </li>
          <li>
            <a href="/" onClick={handleNavbar}>
              link n3
            </a>
          </li>
          <li>
            <a href="/" onClick={handleNavbar}>
              link n4
            </a>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;
