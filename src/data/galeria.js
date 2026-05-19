const todasFotos = import.meta.glob(
  '/src/assets/fotos/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true }
)



export const albums = Object.entries(todasFotos)
  .reduce((acc, [path, mod]) => {
    const partes = path.split('/')
    const subpasta = partes[partes.length - 2]

    const slug = subpasta.replace(/^\d+-/, '')

    const titulo = slug
      .split('-')
      .map(
        (palavra) =>
          palavra.charAt(0).toUpperCase() +
          palavra.slice(1).toLowerCase()
      )
      .join(' ')

    const album = acc.find((a) => a.slug === slug)

    if (album) {
      album.fotos.push(mod.default)
    } else {
      acc.push({
        slug,
        titulo,
        subpasta,
        fotos: [mod.default],
      })
    }

    return acc
  }, [])
  .sort((a, b) => a.subpasta.localeCompare(b.subpasta))