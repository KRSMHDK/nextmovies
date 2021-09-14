import React from 'react';
import Image from 'next/image';

import differenceInYears from 'date-fns/differenceInYears';
import Link from 'next/link';

function PersonViewer({ person }) {
  const sortedPopularity = person.combined_credits.cast.sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="container px-20 py-10 mx-auto">
      <div className="flex">
        <div className="flex-shrink-0 ">
          <section>
            <Image
              className="rounded-lg"
              unoptimized={true}
              width={300}
              height={450}
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${person.profile_path}`}
            />
          </section>
          <section>
            <h2 className="mt-2 mb-3 text-xl font-bold">Personal Info</h2>
            <p className="font-bold">Known For</p>
            <p>{person.known_for_department}</p>
            <p className="mt-2 font-bold">Known Credits</p>
            <p>{person.combined_credits.cast.length}</p>
            <p className="mt-2 font-bold">Gender</p>
            <p>{person.gender === 1 ? 'Female' : 'Male'}</p>
            <p className="mt-2 font-bold">Birthday</p>
            <p>
              {person.birthday}{' '}
              {person.deathday == null ? (
                <span>({differenceInYears(new Date(), new Date(person.birthday))} years old)</span>
              ) : (
                <span></span>
              )}
            </p>
            {person.deathday && (
              <div>
                <p className="mt-2 font-bold">Day of death</p>
                <p>
                  {person.deathday} (
                  {differenceInYears(new Date(person.deathday), new Date(person.birthday))} years
                  old)
                </p>
              </div>
            )}
            <p className="mt-2 font-bold">Place of Birth</p>
            <p>{person.place_of_birth}</p>
          </section>
        </div>
        <div className="pl-7">
          <section>
            <h1 className="text-3xl font-semibold ">{person.name} </h1>
          </section>
          <section className="mt-6">
            <h2 className="mb-3 text-xl font-semibold">Biography</h2>
            <p className="line-clamp-15">{person.biography}</p>
          </section>
          <section className="mt-6">
            <h2 className="mb-3 text-xl font-semibold">Known For</h2>
          </section>
          <section className="max-w-screen-lg mx-auto mt-5">
            <ul className="flex overflow-x-scroll ">
              {sortedPopularity.map((mv) => (
                <li key={mv.id} className="flex-none ml-2 ">
                  <div className="relative ">
                    <Link href={`/${mv.media_type}/${mv.id}`} passHref>
                      <a>
                        <Image
                          unoptimized={true}
                          className="relative border rounded-lg cursor-pointer "
                          src={
                            mv.poster_path === null
                              ? 'https://via.placeholder.com/273x180?text=No+Image'
                              : `https://image.tmdb.org/t/p/w500${mv.poster_path}`
                          }
                          alt={mv.title || mv.name}
                          width={150}
                          height={224}
                          placeholder="blur"
                          blurDataURL="/images/blur.png"
                        />
                      </a>
                    </Link>
                    <Link href={`/${mv.media_type}/${mv.id}`}>
                      <p className="w-40 text-sm text-center cursor-pointer hover:text-blue-500">
                        {mv.title || mv.name}
                      </p>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PersonViewer;
