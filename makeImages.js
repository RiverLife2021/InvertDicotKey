const fs = require('fs')
const walk = require('fs-walk')
const path = require('path')
const yaml = require('js-yaml')

let root = 'public/images/'
let imagesJSON = 'src/assets/images.json'
let keyDataYAML = 'keyData.yaml'
let keyDataJSON = 'src/assets/keyData.json'

let images = {}
walk.filesSync(root, function(basedir, filename) {
  let [key, couplet, q] = basedir.split('/').pop().split('.')
  if (!(key in images)) {
    images[key] = {}
  }
  if (!(couplet in images[key])) {
    images[key][couplet] = {}
  }
  if (!(q in images[key][couplet])) {
    images[key][couplet][q] = []
  }
  bd = basedir.replace('public/', '')
  images[key][couplet][q].push(path.join(bd, filename))
})

// Write out images.json
fs.writeFile(imagesJSON, JSON.stringify(images,undefined,2), (err) => { if (err){ console.log(err)}})

// FIXME: Check with FRT re: JSON vs YAML for hand-editing
// convert keyData.yaml to keyData.json
// let keyData = yaml.load(fs.readFileSync(keyDataJSON, 'utf8'))
// fs.writeFile(keyDataJSON, JSON.stringify(keyData,undefined,2), (err) => { if (err){ console.log(err)}})
