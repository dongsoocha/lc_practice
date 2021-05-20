var maxDistance = function (nums1, nums2) {
  let idx1 = 0;
  let idx2 = 0;
  let max = 0;
  while (idx2 < nums2.length && idx1 < nums1.length) {
    if (nums1[idx1] > nums2[idx2]) {
      idx1++;
      idx2++;
    } else {
      max = idx2 - idx1 > max ? idx2 - idx1 : max;
      idx2++;
    }
  }
  return max;
};
