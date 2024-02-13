import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import data from "../../data.json";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function Trending() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  const mobile = useMediaQuery(`(max-width: 767px)`);
  /*  const tablet = useMediaQuery(`(max-width: 1439px)`); */

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="mobile:pl-4 tablet:pl-0 mb-6 tablet:mb-10">
      <p className="text-white tracking-[1px] text-[1.25rem] mb-4 tablet:text-[2rem]">
        Trending
      </p>
      <motion.div ref={carousel} className="cursor-grab">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={`flex gap-4 tablet:gap-10 ${
            mobile ? "w-[1264px]" : "w-[2500px]"
          }`}
        >
          {data.map((item, index) => {
            return item.isTrending ? (
              <motion.div key={index}>
                <img
                  className="pointer-events-none rounded-lg"
                  src={
                    mobile
                      ? item.thumbnail.trending?.small
                      : item.thumbnail.trending?.large
                  }
                  alt=""
                />
              </motion.div>
            ) : null;
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
