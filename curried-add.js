function curriedAdd(total) {
  if (!total) return 0;
  return function adder(num) {
    if (!num) return total;
    total += num;
    return adder;
  };
}

module.exports = { curriedAdd };
