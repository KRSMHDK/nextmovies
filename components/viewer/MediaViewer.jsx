import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { Tab } from '@headlessui/react';

function MediaViewer({ details }) {
  const backdrops = {
    type: 'backdrops',
    path: 'file_path',
    width: 533,
    height: 300,
    img_path: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2',
  };
  const posters = {
    type: 'posters',
    path: 'file_path',
    width: 200,
    height: 300,
    img_path: 'https://www.themoviedb.org/t/p/w220_and_h330_face',
  };

  const [selectedType, setSelectedType] = useState(backdrops);

  return (
    <div className="h-auto max-w-screen-xl pt-5 pl-5 mx-auto mt-2 ">
      <Tab.Group>
        <Tab.List className="flex gap-2 ">
          <h1 className="mr-10 text-xl font-bold border-b-4 border-transparent">Media</h1>
          {/* <Tab as={Fragment}>
            {({ selected }) => (
              <button
                type="button"
                className={selected ? 'underline font-bold ' : 'text-black'}
                value="Movie"
                onClick={() => setSelectedType(backdrops)}
              >
                Movie
              </button>
            )}
          </Tab> */}
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                type="button"
                className={
                  selected
                    ? 'border-b-4 border-black font-bold '
                    : 'text-black border-b-4 border-transparent font-bold'
                }
                value="Backdrops"
                onClick={() => setSelectedType(backdrops)}
              >
                Backdrops
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                type="button"
                className={
                  selected
                    ? 'border-b-4 border-black font-bold '
                    : 'text-black border-b-4 border-transparent font-bold'
                }
                value="Posters"
                onClick={() => setSelectedType(posters)}
              >
                Posters
              </button>
            )}
          </Tab>
        </Tab.List>
      </Tab.Group>

      <ul className="flex mt-3 mb-6 overflow-x-auto rounded-xl">
        {details.images[selectedType.type].length === 0 ? (
          <div>No Backdrops Found </div>
        ) : (
          details.images[selectedType.type].map((item) => (
            <li key={item[selectedType.path]} className="flex-shrink-0 ">
              <Image
                className="mx-auto "
                placeholder="blur"
                blurDataURL="/images/blur.png"
                width={selectedType.width}
                height={selectedType.height}
                src={`${selectedType.img_path}${item[selectedType.path]}`}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default MediaViewer;
