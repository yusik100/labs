'use strict';

const removeElement = (array, item) => {
  const indexOfItem = array.indexOf(item);
  if (indexOfItem !== -1) {
    array.splice(indexOfItem, 1);
  }
};

module.exports = { removeElement };
