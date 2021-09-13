import { FC, Fragment, FunctionComponent } from "react";
import tw from "twin.macro";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { useMediaQuery } from "react-responsive";
import { slide as Menu } from "react-burger-menu";
import { styles } from "./style";
import styled, { css } from "styled-components";

interface IProps {
  children: any;
}

interface IMobileProp {
  mobile?: string;
  desktop?: string;
}

const Desktop: FunctionComponent<IProps> = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: "975px" });
  return isDesktop ? children : null;
};

const Mobile: FC<IProps> = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: "976px" });
  return isMobile ? children : null;
};

const navDekstopStyle = css`
  ${tw`
      mx-auto
      lg:p-5
   `}
`;

const navMobileStyles = css`
  ${tw`
    pt-4
    font-semibold
    text-xl
  `}
`;

const MenuWrapper = styled(Menu)<{ styles: any }>`
  width: 250px !important;
  font-size: 16px !important;
  ${tw`
        fixed
        top-0
      `}
`;

const NavbWrapper = styled.div<IMobileProp>`
  min-height: 50px;
  ${tw`
      flex
      justify-between
      max-w-screen-2xl
  `}
  ${(props) => props.desktop && navDekstopStyle}
  ${(props) => props.mobile && navMobileStyles}
`;

const Navbar: FC = () => {
  return (
    <Fragment>
      <Desktop>
        <NavbWrapper desktop="desktop">
          <Logo />
          <NavLinks />
        </NavbWrapper>
      </Desktop>
      <Mobile>
        <NavbWrapper mobile="mobile">
          <Logo mobile="mobile" />
          <MenuWrapper styles={styles} right>
            <NavLinks />
          </MenuWrapper>
        </NavbWrapper>
      </Mobile>
    </Fragment>
  );
};

export default Navbar;
