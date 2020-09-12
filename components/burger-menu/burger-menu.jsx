import { BurgerMenuWrapper } from './burger-menu.styles';

const Burgermenu = ({ navbarState, handleNavbar }) => {
  return (
    <BurgerMenuWrapper onClick={handleNavbar}>
      <div className={navbarState ? "open" : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </BurgerMenuWrapper>
  );
};

export default Burgermenu;
