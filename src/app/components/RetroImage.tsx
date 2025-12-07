import Image, { ImageProps } from 'next/image';

interface RetroImageProps extends Omit<ImageProps, 'className' | 'style'> {
  color?: string;
  caption?: string;
}

export const RetroImage = ({ color = 'cyan', caption, ...props }: RetroImageProps) => {
  const theme = `var(--tos-${color})`;
  
  return (
    <figure className="w-full">
      <div className="border-[4px] border-double overflow-hidden" style={{ borderColor: theme }}>
        <Image {...props} className="w-full h-auto block" />
      </div>
      {caption && (
        <figcaption
          className="mt-0.5 px-1.5 py-0.5 text-sm md:text-base font-bold uppercase tracking-wider text-center truncate"
          style={{ background: theme, color: color === 'yellow' ? 'black' : 'white' }}
        >
          {`> ${caption}_`}
        </figcaption>
      )}
    </figure>
  );
};