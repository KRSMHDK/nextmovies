import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function CastViewer({ cast }) {
  return (
    <div className="h-auto max-w-screen-xl pt-5 pl-5 mx-auto mt-2 ">
      <p className="text-xl font-bold">Cast </p>
      <ul className="flex h-auto pb-5 mt-3 overflow-x-auto ">
        {cast.cast.length === 0 ? (
          <p>We don&apos;t have any cast added to this.</p>
        ) : (
          cast.cast.map((person) => (
            <li
              key={person.name}
              className="flex-row flex-shrink-0 h-auto pb-2 mr-5 shadow-lg w-36 "
            >
              <div className="flex-shrink-0">
                <Link href={`/person/${person.id}`} passHref>
                  <a>
                    <Image
                      className="mx-auto rounded-t-xl"
                      unoptimized={true}
                      width={138}
                      height={175}
                      alt={person.name}
                      placeholder="blur"
                      blurDataURL="/images/blur.png"
                      src={
                        person.profile_path === null
                          ? 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                          : `https://image.tmdb.org/t/p/w138_and_h175_face${person.profile_path}`
                      }
                    />
                  </a>
                </Link>
              </div>
              <div>
                <Link href={`/person/${person.id}`} passHref>
                  <a>
                    <p className="pl-2 text-sm font-bold text-left hover:text-gray-500">
                      {person.name}
                    </p>
                  </a>
                </Link>
                {person.total_episode_count ? (
                  <p className="pl-2 text-sm text-left ">{`${person.total_episode_count} episodes`}</p>
                ) : (
                  <p className="pl-2 text-sm text-left ">{person.character}</p>
                )}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default CastViewer;
