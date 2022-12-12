import { lazy } from "react";

const lazyLoad = (path: any, namedExport: any = null) => {
  return lazy(() => {
    const lazyComponent = import(path);
    if (namedExport == null) {
      return lazyComponent;
    } else {
      return lazyComponent.then((module) => ({ default: module[namedExport] }));
    }
  });
};

export default lazyLoad;
