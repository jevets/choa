const createClient = require('@sanity/client')
const imageUrlBuilder = require('@sanity/image-url')

const sanityClient = createClient({
  projectId: '5x38adbv',
  dataset: 'production',
  useCdn: false,
  withCredentials: false,
})

const builder = imageUrlBuilder(sanityClient)

const urlFor = (source) => {
  return builder.image(source)
}

module.exports = {
  sanityClient,
  builder,
  urlFor,
}
