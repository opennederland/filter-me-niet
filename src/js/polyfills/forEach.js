if (
  typeof NodeList !== "undefined" &&
  NodeList.prototype &&
  !NodeList.prototype.forEach
) {
  // Yes, there's really no need for `Object.defineProperty` here
  NodeList.prototype.forEach = Array.prototype.forEach;
}
