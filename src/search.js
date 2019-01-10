const utils = require("./utils");

const { isATag, isValidListingName } = utils;

module.exports = searchListings;

function searchListings() {
  const listings = new Set();
  return {
    isValid: isValidListing,
    add: title => addListing(title, listings),
    finish: () => getResult(listings)
  };
}

function isValidListing({ tagType, title }) {
  return isATag(tagType) && isValidListingName(title);
}

function addListing(listing, listings) {
  return listings.add(listing);
}

function getResult(listings) {
  return Array.from(listings);
}
