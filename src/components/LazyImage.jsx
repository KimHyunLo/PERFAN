function LazyImage({ src, alt, className, loading = 'lazy' }) {
  return (
    <img src={src} alt={alt} className={className} loading={loading} height="300px" width="300px" />
  )
}

export default LazyImage
