import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import dateformat from 'dateformat';
import Pagination from '@material-ui/lab/Pagination';
import Image from 'next/image';
import { useRouter } from 'next/router';

function SearchResults({ display, type, searchQuery, leftMenu, pageTotal }) {
  const [category, setCategory] = useState();
  const [page, setPage] = useState(1);
  const router = useRouter();

  const person = {
    link: 'person',
    name: 'name',
    photo: 'profile_path',
    photosite: 'https://www.themoviedb.org/t/p/w90_and_h90_face',
  };

  const movie = {
    link: 'movie',
    name: 'title',
    photo: 'poster_path',
    photosite: 'https://www.themoviedb.org/t/p/w94_and_h141_bestv2',
  };

  const tv = {
    link: 'tv',
    name: 'title',
    photo: 'poster_path',
    photosite: 'https://www.themoviedb.org/t/p/w94_and_h141_bestv2',
  };

  useEffect(() => {
    if (type == 'Movie') {
      setCategory(movie);
    }
    if (type == 'Person') {
      setCategory(person);
    }
    if (type === 'Tv') {
      setCategory(tv);
    }
  }, []);

  const handleSearch = (event, value) => {
    router.push(`/search/${category.link}/?page=${value}&search=${searchQuery}`);
    setPage(value);
  };

  const handleClick = (e) => {
    router.push(`/search/${e.target.value}/?page=1&search=${searchQuery}`);
  };

  if (display === undefined || category === undefined) {
    return <div></div>;
  }

  return (
    <div className="h-auto max-w-screen-xl pt-5 pl-5 mx-auto">
      {console.log(category)}
      <div className="flex-row md:flex">
        <div>
          <div className="pt-5 pl-5 pr-5">
            <p className="h-auto px-4 py-2 text-left text-white bg-blue-400 rounded-t-lg text-md md:w-52 ">
              Search Results
            </p>

            {leftMenu.map((item) => (
              <p className="px-4 py-2 text-sm text-left ">
                <button value={item.type.toLowerCase()} onClick={handleClick}>
                  {item.type}
                </button>

                {item.total_results}
              </p>
            ))}
          </div>
        </div>
        <div>
          <ul className="px-5 pt-5">
            {display.results.map((item) => (
              <li className="flex mb-5 border rounded-lg shadow-md " key={item.id}>
                <div className="relative flex-shrink-0 h-141px w-94px">
                  <Link href={`/${category.link}/${item.id} `} passHref>
                    <a>
                      <Image
                        className="rounded-lg cursor-pointer"
                        layout="fill"
                        unoptimized={true}
                        src={
                          item.poster_path === null
                            ? 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                            : `${category.photosite}/${item[category.photo]}`
                        }
                        alt={item.title}
                      />
                    </a>
                  </Link>
                </div>
                <div className="pt-3 ml-4">
                  <Link href={`/${category.link}/${item.id}`} passHref>
                    <a className="text-lg font-bold cursor-pointer">{item[category.name]}</a>
                  </Link>
                  <p className="mb-4 text-gray-500">{dateformat(item.release_date, 'longDate')}</p>
                  <p className="mb-2 line-clamp-2">{item.overview}</p>
                </div>
              </li>
            ))}
          </ul>
          <Pagination
            count={pageTotal}
            defaultPage={page}
            onChange={handleSearch}
            variant="outlined"
            color="primary"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
