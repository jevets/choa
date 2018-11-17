## Eleventy-generated static single page site

Uses [@11ty/eleventy](https://github.com/11ty/eleventy)

### I\O

* Input directory: `./src`
* Output directory: `./dist`

## Commands

### `yarn fetch-projects`

* Requests projects from the Sanity.io API and saves the data into `./src/_data/projects.json`
* Generates thumbnail and full size versions of each project image and saves to `./src/projects/[full,thumb]`

### `yarn dev`

Runs the Eleventy dev server

### `yarn build`

Fetches projects and compiles to `./dist`
