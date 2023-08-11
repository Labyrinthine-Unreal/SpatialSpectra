import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll() {
  useEffect(() => {

    const scrollEl = document.querySelector(".App");

    let locoScroll = new LocomotiveScroll({
      el: scrollEl,
      // inertia: 0.8,
      smooth: true,
      getDirection: true,
      smoothMobile: true, 
      direction: "horizontal",
      smartphone: {
        breakpoint: 0,
        smooth: true,
        getDirection: true,
        direction: "horizontal",
    },
    tablet: {
      breakpoint: 0,
      smooth: true,
      getDirection: true,
      direction: "horizontal",
    }
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },

      pinType: scrollEl.style.transform ? "transform" : "fixed"
    });

    const lsUpdate = () => {
      if (locoScroll) {
        // locoScroll.update();
        setTimeout(() => {  
          locoScroll.destroy();
      }, 0);
      setTimeout(() => {  
          locoScroll.init();
      }, 50);
      setTimeout(() => {  
          locoScroll.update();
      }, 1000);
      }
    };

    ScrollTrigger.addEventListener("refresh", lsUpdate);

    ScrollTrigger.refresh();


    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
        locoScroll.destroy();
        locoScroll = null;
        console.log("Kill", locoScroll);
        
      }
    };
  });
}
