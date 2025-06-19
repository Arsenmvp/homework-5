function digitSum(k) {
  k = Math.abs(k); // на випадок, якщо число від’ємне
  if (k < 10) return k;
  return k % 10 + digitSum(Math.floor(k / 10));
}

