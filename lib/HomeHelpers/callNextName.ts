const callNextName = (window: Window) => {
  const nextName = Number(window.location.hash.split("nome")[1]) + 1;
  window.location.hash = `nome${nextName}`;
};

export default callNextName;
