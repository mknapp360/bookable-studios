const SITE_URL = 'https://bookable.online'
const BRAND_NAME = 'Bookable Studios'

export default function Head() {
  const title = `${BRAND_NAME} — Architectural & Interior Visualisation`
  const description =
    'We turn floor plans, specification sheets, and mood boards into photorealistic architectural and interior renders — for bar, hospitality, commercial, and residential projects. Based in Battle, East Sussex.'

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={BRAND_NAME} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`${SITE_URL}/`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${SITE_URL}/`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={BRAND_NAME} />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  )
}
