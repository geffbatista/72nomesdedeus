const clearUrl = (window: any) => {
  if (!window || !window.location || !window.history) {
    return null;
  }

  return window.history.pushState({}, "title", window.location.pathname);
};

export default clearUrl;
