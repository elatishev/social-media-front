export const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

export const makeRelativePath = (imagePath) =>
  imagePath && PUBLIC_FOLDER + imagePath;
