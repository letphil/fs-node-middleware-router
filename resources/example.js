export const compile = () => {
  console.log("compile");
};

export const render = () => {
  console.log("render");
};

export const useCallback = (_callback) => {
  compile(_callback);
};

export default {
  compile,
  useCallback,
  render,
  msg: "this is the default export",
};
