function rating(details, countryCode, type) {
  let country = '';
  let certification = '';

  if (type === 'movie') {
    if (details.release_dates.results.length !== 0) {
      if (
        details.release_dates.results.find((country) => country.iso_3166_1 === countryCode) !==
        undefined
      ) {
        country = details.release_dates.results.find(
          (country) => country.iso_3166_1 === countryCode,
        ).iso_3166_1;
        certification = details.release_dates.results.find(
          (country) => country.iso_3166_1 === countryCode,
        ).release_dates[0].certification;
      } else if (details.production_countries.length !== 0) {
        if (
          details.release_dates.results.find(
            (country) => country.iso_3166_1 === details.production_countries[0].iso_3166_1,
          ) !== undefined
        ) {
          country = details.release_dates.results.find(
            (country) => country.iso_3166_1 === details.production_countries[0].iso_3166_1,
          ).iso_3166_1;
          certification = details.release_dates.results.find(
            (country) => country.iso_3166_1 === details.production_countries[0].iso_3166_1,
          ).release_dates[0].certification;
        }
      }
    }
  }

  if (type === 'tv') {
    if (details.content_ratings.results.length !== 0) {
      if (
        details.content_ratings.results.find((country) => country.iso_3166_1 === countryCode) !==
        undefined
      ) {
        country = details.content_ratings.results.find(
          (country) => country.iso_3166_1 === countryCode,
        ).iso_3166_1;
        certification = details.content_ratings.results.find(
          (country) => country.iso_3166_1 === countryCode,
        ).rating;
      } else if (details.production_countries.length !== 0) {
        if (
          details.content_ratings.results.find(
            (country) => country.iso_3166_1 === details.production_countries[0].iso_3166_1,
          ) !== undefined
        ) {
          country = details.content_ratings.results.find(
            (country) => country.iso_3166_1 === details.production_countries[0].iso_3166_1,
          ).iso_3166_1;
          certification = details.content_ratings.results.find(
            (country) => country.iso_3166_1 === details.production_countries[0].iso_3166_1,
          ).rating;
        }
      }
    }
  }
  return { country, certification };
}

export default rating;
