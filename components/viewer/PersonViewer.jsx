import React from 'react';
import Image from 'next/image';

import differenceInYears from 'date-fns/differenceInYears';
import Link from 'next/link';

function PersonViewer({ person }) {
  const sortedPopularity = person.combined_credits.cast.sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="container px-10 py-10 mx-auto sm:px-20">
      <div className="flex-row sm:flex ">
        <div>
          <section className="relative mx-auto sm:hidden sm:mx-0 h-150px w-150px sm:w-44 sm:h-60">
            <Image
              className="rounded-lg "
              unoptimized={true}
              layout="fill"
              src={`https://www.themoviedb.org/t/p/w150_and_h150_bestv2${person.profile_path}`}
            />
          </section>
          <section className="relative hidden mx-auto sm:block sm:mx-0 ">
            <Image
              className="rounded-lg "
              unoptimized={true}
              width={300}
              height={450}
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${person.profile_path}`}
            />
          </section>
          <section>
            <h1 className="font-semibold text-center w- text-md sm:hidden">{person.name} </h1>
          </section>
          <section className="w-195px">
            <h2 className="mt-2 mb-3 text-xl font-bold">Personal Info</h2>
            <p className="font-bold">Known For</p>
            <p>{person.known_for_department}</p>
            <p className="mt-2 font-bold">Known Credits</p>
            <p>{person.combined_credits.cast.length}</p>
            <p className="mt-2 font-bold">Gender</p>
            <p>{person.gender === 1 ? 'Female' : 'Male'}</p>
            <p className="mt-2 font-bold">Birthday</p>
            <p>
              {person.birthday ? person.birthday : '-'}{' '}
              {person.deathday == null && person.birthday != null ? (
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
            <p>{person.place_of_birth ? person.place_of_birth : '-'}</p>
          </section>
        </div>
        <div className="sm:pl-7">
          <section>
            <h1 className="hidden text-3xl font-semibold sm:block ">{person.name} </h1>
          </section>
          <section className="max-w-screen-lg mt-6">
            <h2 className="mb-3 text-xl font-semibold">Biography</h2>
            <p className="line-clamp-15">
              {person.biography
                ? person.biography
                : `We don't have a biography for ${person.name}.`}
            </p>
          </section>
          <section className="mt-6">
            <h2 className="mb-3 text-xl font-semibold">Known For</h2>
          </section>
          <section className="max-w-screen-lg mx-auto mt-5">
            <ul className="flex overflow-x-scroll ">
              {sortedPopularity.map((mv) => (
                <li key={mv.id} className="flex ">
                  <div className="mx-auto ">
                    <Link href={`/${mv.media_type}/${mv.id}`} passHref>
                      <a className="pl-5 ">
                        <Image
                          unoptimized={true}
                          className="mx-auto border rounded-lg cursor-pointer "
                          src={
                            mv.poster_path === null
                              ? 'https://via.placeholder.com/273x180?text=No+Image'
                              : `https://www.themoviedb.org/t/p/w150_and_h225_bestv2${mv.poster_path}`
                          }
                          alt={mv.title || mv.name}
                          width={130}
                          height={195}
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
