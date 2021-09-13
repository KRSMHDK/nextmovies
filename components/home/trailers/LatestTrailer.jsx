import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ReactPlayer from 'react-player';
function PopularTrailer({ latestTrailer }) {
  const [movies] = useState(latestTrailer);
  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState('');
  const [bg, setBg] = useState('/4N6zEMfZ57zNEQcM8gWeERFupMv.jpg');
  const onOpenModal = (video) => {
    setVideo(video);
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={onCloseModal}
        styles={{
          modal: {
            maxWidth: 'unset',
            width: '80%',
            padding: 'unset',
          },
          overlay: {
            background: 'rgba(0, 0, 0, 0.8)',
          },
          closeButton: {
            background: 'white',
          },
        }}
        center
      >
        <div className="bg-black h-9"></div>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${video}`}
          width="100%"
          height="calc(80vh - 100px)"
          playing={true}
          controls={true}
        />
      </Modal>
      <div
        className="max-w-screen-xl mx-auto bg-no-repeat "
        style={{
          backgroundImage: `url('https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces_filter(duotone,032541,01b4e4)${bg}')`,
          transition: '1s',
        }}
      >
        <div className="flex-none ">
          <p className="pt-5 pb-3 pl-5 text-2xl font-bold text-white">Latest Trailers</p>
          <ul className="flex overflow-x-scroll h-72 ">
            {movies.map(
              (movie) =>
                movie.videos.results[0] !== undefined && (
                  <li
                    key={movie.id}
                    onMouseOver={() => setBg(movie.backdrop_path)}
                    onClick={() => setBg(movie.backdrop_path)}
                    className="flex-none h-48 ml-5 w-72"
                  >
                    <div
                      onClick={() => onOpenModal(movie.videos.results[0].key)}
                      className="relative duration-300 cursor-pointer hover:scale-105"
                    >
                      <Image
                        className="rounded-lg "
                        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                        alt=""
                        height={192}
                        unoptimized={true}
                        width={288}
                        placeholder="blur"
                        blurDataURL="/images/blur.png"
                      />
                      <svg
                        className="absolute h-16 text-white fill-current left-28 top-16 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path d="M24.817 16.864 9.503 25.777A1 1 0 0 1 8 24.912V7.088a1 1 0 0 1 1.503-.865l15.314 8.913a1 1 0 0 1 0 1.728Z" />
                      </svg>
                    </div>

                    <Link href={`/movie/${movie.id}`} passHref>
                      <a>
                        <p className="font-semibold text-center text-white ">{movie.title}</p>
                      </a>
                    </Link>
                  </li>
                ),
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PopularTrailer;
