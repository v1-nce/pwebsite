import Image, { ImageProps } from 'next/image';
import { CSSProperties } from 'react';

interface RetroImageProps extends Omit<ImageProps, 'className' | 'style'> {
  color?: string;
  caption?: string;
  // New prop to control the shape
  aspect?: 'auto' | 'square' | 'video';
}

export const RetroImage = ({ 
  color = 'cyan', 
  caption, 
  aspect = 'auto', 
  ...props 
}: RetroImageProps) => {
  // Determine CSS based on aspect prop
  let imageClass = "w-full block";
  if (aspect === 'square') {
    // Forces 1:1 ratio and crops excess
    imageClass += " aspect-square object-cover";
  } else if (aspect === 'video') {
    // Forces 16:9 ratio
    imageClass += " aspect-video object-cover";
  } else {
    // Default: maintains original image dimensions
    imageClass += " h-auto";
  }

  return (
    <figure 
      className="w-full"
      style={{ '--retro-color': `var(--tos-${color})` } as CSSProperties}
    >
      <div className="retro-container border-[4px] overflow-hidden">
        <Image {...props} className={imageClass} />
      </div>
      {caption && (
        <figcaption className={`retro-caption ${color === 'yellow' ? 'text-black' : 'text-white'}`}>
          {`> ${caption}_`}
        </figcaption>
      )}
    </figure>
  );
};