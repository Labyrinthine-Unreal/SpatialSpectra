import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

// import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";
import img4 from "../assets/Images/4.webp";
import img5 from "../assets/Images/5.webp";
import img6 from "../assets/Images/6.webp";
import img7 from "../assets/Images/7.webp";
import img8 from "../assets/Images/8.webp";
import img9 from "../assets/Images/9.webp";
// import img10 from "../assets/Images/10.webp";

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  /* background-color: orange; */
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Sirin Stencil";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  /* width: 65%; */
  position: absolute;
  left: 35%;
  padding-left: 30%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  /* background-color: black; */
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Product = ({ img, title = "", description = "", architect="" }) => {
  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
      color="black"
    >
      <h1>{architect}</h1>
      <img width="400" height="600" src={img} alt={title} description={description} architect={architect} />
      <h1>{title}</h1>
      <h3>{description}</h3> 
    </Item>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = Horizontalref.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          // markers: true,
        },
        x: -pinWrapWidth,

        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="shop">
      <Title data-scroll data-scroll-speed="-1">
       
      </Title>
      <br />
      <Left>
      <br />
      <br />
        <p>
          Interests of The Week

          <br />
          <br />
          {/* Her art pieces are often inspired by her own experiences and the world around her, and she is constantly pushing the boundaries of what is possible with digital art. She is also an avid NFT collector, curating her own collection of rare and unique pieces from the Tezos and Ethereum blockchain. She is passionate about the potential of NFTs and the possibilities they bring to the art world, and is always looking for new and exciting ways to use them. */}
          <br />
          <br />
          Current Interests/ Open Editions
          {/* Truly, a force to be reckoned with. */}
        </p>
      </Left>
      <Right data-scroll ref={Horizontalref}>
        <Product architect="Zaha-Hadid" img={img3} title="Alpha Dome" description=" Ascend to discover an artfully layered tapestry of open-air verdant sanctuaries, mirroring the city's overarching strategy, where nature's embrace is paramount. In parallel, the commercial narrative interweaves with public amenities, artfully weaving a dynamic equilibrium between labor, camaraderie, cultural immersion, and repose, all within an organic setting."  />

        <Product architect="Ken Yeang" img={img2} title="Fusionopolis" description="Prepare to be captivated by the grandeur of Fusionopolis, a towering masterpiece set to grace the Singapore skyline. This extraordinary structure challenges conventional notions of skyscrapers." />
        
        <Product architect="Alberto Campo Baeza" img={img4} title="The MA: Andalucia´s Museum Memory" description="Museo de la Memoria de Andalucía (Andalusia’s Museum of Memory) in Granada is to craft an exquisite structure that captures the rich history of Andalusia. An elliptical central courtyard hosts ascending circular ramps, fostering dynamic spatial interactions."/>

        <Product architect="Mario Botta" img={img5} title="Church Of San Giovanni Battista Mogno" description="Mario Botta's Church of San Giovanni Battista in Mogno is a luminous masterpiece nestled in the Swiss landscape. Angular and contemporary, its geometric white form contrasts the verdant surroundings. Inside, a serenely lit sanctuary with wooden accents provides a contemplative space. Botta's design harmonizes modernity with spiritual solace, inviting visitors to immerse in a tranquil haven where architecture and nature unite in profound resonance."/>
        <Product architect="Taniguchi Yoshio" img={img6} title="D.T. Suzuki Museum" description="Designed by architect Taniguchi Yoshio who also designed the Heisei Chishinkan in Kyoto and the Horyuji Homotsukan in Tokyo amongst others, the architecture of the D.T. Suzuki Museum lends a hand in conveying the serenity that comes with Zen philosophy. "/>
        <Product architect="Daniel Libeskind" img={img7} title="Royal Ontario Museum" description=" Sharp angles and crystalline forms intersect, creating a visually captivating structure that seamlessly integrates the old and new. Libeskind's design reflects the museum's diverse collections, with jagged facades symbolizing the dynamic interplay of cultures. The addition not only redefines the museum's presence in the city but also challenges conventional museum architecture, inviting visitors to explore a multi-faceted journey where art, history, and architecture converge."/>
        <Product architect="Ray Kappe" img={img9} title="Steel Home" description="Built in 1980, this three-level home elegantly harmonizes with its wooded surroundings. A captivating, glass-filled atrium stretches along one side, curving to embrace the canopy of trees. A concrete-block structure cascades down the other side, interspersed with terraces on each level, fostering seamless indoor-outdoor connections."/>
        <Product architect="MVRDV" img={img8} title="KoolKiel" description="Kool Kiel stands as a captivating fusion of innovative design and urban vibrancy. This architectural marvel in the heart of Kiel harmoniously blends modern aesthetics with functional excellence. Its sleek lines and thoughtful spaces create an inviting environment that transcends boundaries. Kool Kiel embodies a new era of living, where form meets function, and where every detail is meticulously curated for the ultimate urban experience. " />
      </Right>
    </Section>
  );
};

export default Shop;
