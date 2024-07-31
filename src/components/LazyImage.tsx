import { type ComponentPropsWithoutRef } from 'react'

interface LazyImageProps extends ComponentPropsWithoutRef<'img'> {
  src: string
}

function LazyImage({ src, ...otherProps }: LazyImageProps) {
  const isIcon = src.includes('.svg')
  const fileName = src.split('.')[0]

  return (
    <picture>
      {isIcon || <source srcSet={`webp/${fileName}.webp`} type="image/webp" />}
      <img height="300px" width="300px" loading="lazy" src={src} {...otherProps} />
    </picture>
  )
}

export default LazyImage
