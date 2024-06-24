function LazyImage({ src, alt, className, loading = 'lazy' }) {
  const isIcon = src.includes('.svg')
  const fileName = src.split('.')[0]

  return (
    <picture>
      {isIcon || <source srcSet={`webp/${fileName}.webp`} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        height="300px"
        width="300px"
      />
    </picture>
  )
}

export default LazyImage
