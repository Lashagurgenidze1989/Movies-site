import bookmarkFull from "/assets/icon-bookmark-full.svg";
import bookmarkEmpty from "/assets/icon-bookmark-empty.svg";
import { useMediaQuery } from "@uidotdev/usehooks";

export default function Movies({
  filteredMovies,
  searchText,
}: {
  filteredMovies: Movie[] | null;
  searchText: string;
}) {
  const mobile = useMediaQuery(`(max-width: 767px)`);
  const tablet = useMediaQuery(`(max-width: 1439px)`);
  return (
    <section
      style={mobile ? {} : tablet ? {} : { width: "calc(100vw - 13rem)" }}
      className={`mobile:px-4 tablet:px-0`}
    >
      {searchText ? (
        <>
          {" "}
          <p className="text-white mb-5 text-[1.2rem] tracking-[0.8px]">{`Found result for "${searchText}"`}</p>
          <div className="grid grid-cols-2 tablet:grid-cols-3 tabletMd:grid-cols-4 gap-4">
            {filteredMovies &&
              filteredMovies
                .filter((mov) => mov.title.includes(searchText))
                .map((e: Movie) => {
                  return (
                    <div className=" text-white relative" key={e.title}>
                      <img
                        src={
                          mobile
                            ? e.thumbnail.regular.small
                            : tablet
                            ? e.thumbnail.regular.medium
                            : e.thumbnail.regular.large
                        }
                        alt=""
                        className={`rounded-md `}
                      />
                      <div className="flex gap-2 text-[0.7rem] tablet:text-[0.8rem] mt-2 text-[#ada8a8]">
                        <span>{e.year}</span>•<span>{e.category}</span>•
                        <span>{e.rating}</span>
                      </div>
                      <p
                        className={`text-[0.8rem] tracking-[1px] tablet:text-[1.12rem]`}
                      >
                        {e.title}
                      </p>
                      <div
                        className="flex items-center justify-center bg-black opacity-35 rounded-full w-10 h-10 absolute top-[10px] right-[10px] 
                    tablet:top-[30px] tablet:right-[30px]
                    desktop:top-[22px] desktop:right-[25px] "
                      >
                        <img
                          className={`w-4 h-5`}
                          src={e.isBookmarked ? bookmarkFull : bookmarkEmpty}
                          alt=""
                        />
                      </div>
                    </div>
                  );
                })}
          </div>{" "}
        </>
      ) : (
        <>
          <p className="text-white mb-5 text-[1.25rem] tracking-[1.3px]  tablet:text-[2rem]">
            Recomended for you
          </p>
          <div className="grid grid-cols-2 tablet:grid-cols-3 gap-4 desktop:grid-cols-4">
            {filteredMovies &&
              filteredMovies.map((e: Movie) => {
                return (
                  <div className=" text-white  relative" key={e.title}>
                    <img
                      src={
                        mobile
                          ? e.thumbnail.regular.small
                          : tablet
                          ? e.thumbnail.regular.medium
                          : e.thumbnail.regular.large
                      }
                      alt=""
                      className={`rounded-md `}
                    />
                    <div className="flex gap-2 text-[0.7rem] tablet:text-[0.8rem] mt-2 text-[#ada8a8]">
                      <span>{e.year}</span>•<span>{e.category}</span>•
                      <span>{e.rating}</span>
                    </div>
                    <p
                      className={`text-[0.8rem] tracking-[1px] tablet:text-[1.12rem]`}
                    >
                      {e.title}
                    </p>
                    <div
                      className="flex items-center justify-center bg-black opacity-35 rounded-full w-8 h-8 desktop:w-10 desktop:h-10 absolute top-[10px] right-[10px] 
                    tablet:top-[30px] tablet:right-[30px]
                    desktop:top-[22px] desktop:right-[25px]"
                    >
                      {e.isBookmarked ? (
                        <svg
                          width="12"
                          height="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
                            fill="#FFF"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="12"
                          height="14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                            stroke="#FFF"
                            strokeWidth="1.5"
                            fill=""
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </section>
  );
}
