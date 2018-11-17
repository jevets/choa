const fs = require('fs')
const https = require('https')
const { sanityClient, urlFor } = require('./sanityClient')

fetchAllProjects().then(async (projects) => {
  const json = JSON.stringify(projects)
  await saveJsonFile(`./src/_data/projects.json`, json)
  await saveProjectsImages(projects)
})

async function saveProjectsImages(projects) {
  projects.forEach(project => {
    project.photos.forEach(async (photo) => {
      const filepath = `./src/projects`
      const filename = `${photo._key}.jpg`
      await saveImage(thumbnail(photo), `${filepath}/thumb/${filename}`)
      await saveImage(full(photo), `${filepath}/full/${filename}`)
    })
  })
}

function thumbnail (photo) {
  return urlFor(photo).size(640, 480).sharpen(40).format('jpg').url()
}

function full (photo) {
  return urlFor(photo).size(1024, 768).sharpen(20).format('jpg').url()
}

async function fetchAllProjects () {
  return await sanityClient.fetch('*[_type == "project"]')
}

async function saveImage (url, localPath) {
  const file = fs.createWriteStream(localPath)
  const req = await https.get(url, res => {
    res.pipe(file)
  })
}

async function saveJsonFile (path, contents) {
  const file = await fs.writeFileSync(path, contents, err => {
    if (err) throw err
  })
}
