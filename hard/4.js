// thoughts 

// pointer to current idx, add to counter
var findMedianSortedArrays = function (nums1, nums2) {
  let totalLength = nums1.length + nums2.length;
  let middle = Math.floor(totalLength / 2);
  let counter = 0;
  let idx1 = 0;
  let idx2 = 0;
  let curr;
  let last;
  while (counter <= middle) {
    counter++;
    last = curr ? curr : null;
    let el1 = nums1[idx1];
    let el2 = nums2[idx2];
    if (el1 !== undefined && el2 !== undefined) {
      if (el1 < el2) {
        curr = nums1[idx1];
        idx1++;
      } else {
        curr = nums2[idx2];
        idx2++;
      }
    } else if (el1 !== undefined && el2 === undefined) {
      curr = el1;
      idx1++;
    } else {
      curr = el2;
      idx2++;
    }
  }
  return totalLength % 2 === 0 ? (last + curr) / 2 : curr;
};