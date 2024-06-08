import { VidstackPlayer, VidstackPlayerLayout } from 'https://cdn.vidstack.io/player';

  const player = await VidstackPlayer.create({
    target: '#v_video',
    title: document.title,
    src: sessionStorage.getItem("src"),
    poster: 'https://files.vidstack.io/sprite-fight/poster.webp',
    layout: new VidstackPlayerLayout({
      thumbnails: ''
    })
  });
