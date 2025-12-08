import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;

export function getLevelImage(levelId: string): ImagePlaceholder | undefined {
  return PlaceHolderImages.find(img => img.id === `level-${levelId}`);
}
