import fs, { readFileSync } from 'fs'

const staticHtml = fs.readFileSync('public/index.html').toString()

const templateFileNames = fs.readdirSync('./src/templates')

const templates = templateFileNames
  .map((fileName) => {
    return readFileSync(`./src/templates/${fileName}`).toString()
  })
  .join('\n')

const html = staticHtml.replace('%templates%', templates)

fs.writeFileSync('./dist/index.html', html)
