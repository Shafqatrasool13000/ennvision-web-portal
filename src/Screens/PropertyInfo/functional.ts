const inputFieldSetter = (action: string, prev: string | number) => {
  if (action === "add") {
    return +prev + 1;
  } else {
    if (prev == 0) {
      return 0;
    }
    return +prev - 1;
  }
};

export default inputFieldSetter;
