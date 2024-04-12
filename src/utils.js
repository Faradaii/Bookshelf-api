const finishedChecker = ({ pageCount, readPage }) => {
  if (readPage > pageCount) {
    return 'invalid';
  }

  if (pageCount === readPage) {
    return 'finished';
  }

  return 'not finished';
};

const filteringObjectsWithQuery = ({ objects, query, queryValue }) => {
  let filteredObjects;
  switch (query) {
    case 'name':
      filteredObjects = objects.filter((object) => object.name.toLowerCase()
        .includes(queryValue.toLowerCase()));
      break;
    case 'reading':
      if (queryValue === '0') {
        filteredObjects = objects.filter((object) => object.reading === false);
      } else if (queryValue === '1') {
        filteredObjects = objects.filter((object) => object.reading === true);
      }
      break;
    case 'finished':
      if (queryValue === '0') {
        filteredObjects = objects.filter((object) => object.finished === false);
      } else if (queryValue === '1') {
        filteredObjects = objects.filter((object) => object.finished === true);
      }
      break;
    default:
      filteredObjects = objects;
      break;
  }
  return filteredObjects.map((obj) => ({ id: obj.id, name: obj.name, publisher: obj.publisher }));
};

module.exports = { finishedChecker, filteringObjectsWithQuery };
