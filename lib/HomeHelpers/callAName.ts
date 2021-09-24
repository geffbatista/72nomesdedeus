const callAName = (window: Window, position: number) =>
  (window.location.hash = `nome${position}`);

export default callAName;
