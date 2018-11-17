module.exports = config => {
  config.dir = {
    input: './src',
    output: './dist',
  }

  config.addPassthroughCopy('src/img')
  config.addPassthroughCopy('src/projects')

  return config
}
