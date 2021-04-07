export function extractUserNameFromEmail(email = "") {
  // used by email.js
  return removeSpecialCharacters(email?.split("@")[0]);
}

export function shortid() {
  /**
   * @SCOPE: helper fn only meant for quick prototyping
   * ❌ remove any instances in production
   */
  //http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function truncateFileName(str, length = 8) {
  const ext = str.substring(str.lastIndexOf(".") + 1, str.length).toLowerCase();
  let newString = str.replace("." + ext, "");

  if (str.length <= length) return str;
  newString =
    newString.substring(0, length) + (str.length > length ? "[...]" : "");
  return newString + "." + ext;
}

export function truncate(str, length = 8) {
  if (str.length <= length) return str;
  return str.substring(0, length) + (str.length > length ? "..." : "");
}

export function unPluralize(str = "") {
  // @SCOPE:  if a string ends in a 's' we simple remove the 's'
  if (!str) return;
  str = str?.toLowerCase();
  if (str[str?.length - 1] === "s") str = str?.substring(0, str?.length - 1);
  return str;
}


export function capitalizeFirstWord(str = "") {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeEveryWord(str = "") {
  // @link: https://tinyurl.com/yde3emms
  return str.map(capitalizeString).join();
}

export function removeSpecialCharacters(str = "") {
  return str.replace(/[^a-zA-Z ]/g, "");
}

export const toDateTime = (secs) => {
  var t = new Date("1970-01-01T00:30:00Z"); // Unix epoch start.
  t.setSeconds(secs);
  return t;
};

export function promiseTimeout(cb) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  }).then(() => cb());
  // USAGE: async () => await promiseTimeout(() => logger.log("create page"))
}

export function uniqueData(data = []) {
  return [
    ...data.reduce((map, obj) => map.set(obj.id, obj), new Map()).values(),
  ];
}

export function sortBy(arrToSort = [], values = ["id", "title"]) {
  let sorted;

  if (Array.isArray(values)) {
    arrToSort.sort(
      (a, b) =>
        a[values[0]] > b[values[0]] // compare each value individually
          ? 1 // return if true
          : (a[values[0]] === b[values[0]] // check if equal
              ? a[values[1]] > b[values[1]] // secondary sorting if equal
                ? 1 // return if secondary true
                : -1 // return if secondary false
              : -1) - 1 // return if
    );
  }

  sorted = arrToSort.sort((a, b) => (a[values[0]] > b[values[0]] ? 1 : -1));

  return sorted;
}

/**

  USAGE:

  sortBy(data = [], ['id', 'title'])

  takes in an array and upto two values to use to sort the array by
  TODO: refactor the comparison into its own function that we can then just call for each item inthe values array -- rather than only allowing up to two items in the array
 */
