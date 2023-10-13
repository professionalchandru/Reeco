import {
  CartIcon,
  DownArrow,
  Logo,
  NavBarContainer,
  NavBarLeft,
  NavBarRight,
  NavItem,
  NavList,
  Row,
} from "./navbar.style";
import logo from "../../assets/images/svg/logo.svg";
import cart from "../../assets/images/png/asset_cart_png.png";
import downArrow from "../../assets/images/png/asset_down_arrow_png.png";
import Text from "../uielements/text";

const Navbar = () => {
  return (
    <NavBarContainer>
      <NavBarLeft>
        <Logo src={logo} alt="logo.svg" />
        <NavList>
          <NavItem>
            <Text size="tiny">Store</Text>
          </NavItem>
          <NavItem>
            <Text size="tiny">Orders</Text>
          </NavItem>
          <NavItem>
            <Text size="tiny">Analytics</Text>
          </NavItem>
        </NavList>
      </NavBarLeft>
      <NavBarRight>
        <NavList>
          <NavItem>
            <CartIcon src={cart} alt="cart-icon.png"></CartIcon>
          </NavItem>
          <NavItem>
            <Row>
              <Text size="tiny">Hello, James </Text>
              <DownArrow src={downArrow} alt="down-arrow.png" />
            </Row>
          </NavItem>
        </NavList>
      </NavBarRight>
    </NavBarContainer>
  );
};

export default Navbar;
