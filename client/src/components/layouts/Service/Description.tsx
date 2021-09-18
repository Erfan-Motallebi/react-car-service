import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import LamboImageService from "../../../assets/images/lambo-service-pic.jpg";

const DescWrapper = styled.div`
  ${tw`
        max-lg:(grid-cols-1)
        grid
        grid-cols-2
        place-items-center       
        shadow-2xl
        mt-14
    `}
`;

const DescImage = styled.div`
  img {
    ${tw`
      width[700px]
    `}
  }
`;

const DescText = styled.div`
  h1 {
    ${tw`
        2xl:(text-6xl)
        lg:(text-5xl)
        font-extrabold
        max-lg:(text-3xl text-center p-5)
      `}
  }
  p {
    ${tw`
      pt-8
      text-base
      lg:(p-4)
      max-lg:(p-10 text-justify)

    `}
  }
`;

const Description: FC = () => {
  return (
    <DescWrapper>
      <DescImage>
        <img src={LamboImageService} alt="Lambo Service Car" />
      </DescImage>
      <DescText>
        <h1>feel a better experience with our car services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam
          commodi culpa repellat itaque praesentium quia, reprehenderit facere
          ad aliquid suscipit reiciendis omnis accusantium quas repellendus
          iusto provident! Quia voluptatem amet commodi modi labore quaerat
          consequatur id, omnis molestiae incidunt, dicta molestias sint hic
          aliquid et sit nobis earum! Consectetur quibusdam exercitationem
          mollitia ullam ratione distinctio excepturi soluta aspernatur? Veniam
          consectetur nihil, voluptatum porro ea exercitationem dicta officiis
          fuga doloremque eligendi distinctio. Nostrum, blanditiis. Porro
          consequuntur veritatis, quibusdam nemo iste ad neque corporis sed
          voluptatibus molestias alias cumque dignissimos ut eius sunt qui,
          atque ex rerum tenetur. Aperiam, minima earum!
        </p>
      </DescText>
    </DescWrapper>
  );
};

export default Description;
