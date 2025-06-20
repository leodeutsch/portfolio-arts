export const getImageKitUrl = (path: string) =>
  `https://ik.imagekit.io/${import.meta.env.VITE_IMGKIT_KEY}/${path}`;
