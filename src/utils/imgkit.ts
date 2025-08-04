export const getImageKitUrl = (path: string) =>
  `https://ik.imagekit.io/${import.meta.env.VITE_IMGKIT_KEY}/${path}`;

export const getSrcSet = (path: string) => {
  const base = import.meta.env.VITE_IMGKIT_KEY;
  return `
    https://ik.imagekit.io/${base}/${path}?tr=w-480 480w,
    https://ik.imagekit.io/${base}/${path}?tr=w-768 768w,
    https://ik.imagekit.io/${base}/${path}?tr=w-1024 1024w,
    https://ik.imagekit.io/${base}/${path}?tr=w-1600 1600w
  `;
};