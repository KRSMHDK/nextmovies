import React from 'react';
import Image from 'next/image';
import { AgeFromDateString } from 'age-calculator';

function PersonViewer({ person }) {
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
            <h2 className="mt-2 mb-3 text-xl font-medium">Personal Info</h2>
            <p className="font-medium">Known For</p>
            <p>{person.known_for_department}</p>
            <p className="mt-2 font-medium">Known Credits</p>
            <p>{person.combined_credits.cast.length}</p>
            <p className="mt-2 font-medium">Gender</p>
            <p>{person.gender === 1 ? 'Female' : 'Male'}</p>
            <p className="mt-2 font-medium">Birthday</p>
            <p>
              {person.birthday} ({new AgeFromDateString(person.birthday).age} years old)
            </p>
            <p className="mt-2 font-medium">Place of Birth</p>
            <p>{person.place_of_birth}</p>
          </section>
        </div>
        <div className="pl-7">
          <section>
            <h1 className="text-3xl font-semibold ">{person.name} </h1>
          </section>
          <section className="mt-6">
            <h2 className="mb-3 text-xl font-medium">Biography</h2>
            <p>{person.biography}</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PersonViewer;
