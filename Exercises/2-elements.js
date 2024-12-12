'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    const indexOfItem = array.indexOf(item);
    if (indexOfItem !== -1) {
      array.splice(indexOfItem, 1);
    }
  }
};

module.exports = { removeElements };
