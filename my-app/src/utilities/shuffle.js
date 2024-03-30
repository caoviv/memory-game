const shuffle = () => {
  const assets = [
    { image: "/assets/maguire-cry.gif" },
    { image: "/assets/maguire-dance.gif" },
    { image: "/assets/maguire-hair-flip.gif" },
    { image: "/assets/maguire-throwdown.gif" },
    { image: "/assets/spidey-huh.png" },
    { image: "/assets/spidey-ohno.png" },
    { image: "/assets/spidey-pic.png" },
    { image: "/assets/spidey-ok.png" },
  ];

  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;
