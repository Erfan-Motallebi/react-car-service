import LogoLamboImg from "../../../../assets/images/lambo-logo.png";
import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";

const LogoWrapper = styled.div`
  ${tw`
     flex
     justify-center
     items-center
    `}
`;

const imageMobileStyle = css`
  img {
    width: 50px;
    height: 50px;
  }
`;

const Image = styled.div<{ mobile?: string }>`
  img {
    width: 50px;
    height: 50px;
  }
  ${(props) => (props.mobile ? imageMobileStyle : null)}
`;

export const LogoMotto = styled.div`
  ${tw`
    lg:( transition duration-500 hover:(text-link letter-spacing[1px]) font-semibold text-3xl )
    `}
`;

const Logo: FunctionComponent<{ mobile?: string }> = () => {
  return (
    <LogoWrapper>
      <Image mobile="mobile">
        <img src={LogoLamboImg} alt="lambo car sports" />
      </Image>
      <LogoMotto>CarSports.</LogoMotto>
    </LogoWrapper>
  );
};

export default Logo;
