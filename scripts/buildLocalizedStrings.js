// Run this script by running `node run build:strings` in the
// project root. This will generate two files. _default.json
// which needs to be sent for translation when new strings have
// been added, and default.js which should be treated as the default
// messages for `en` locale.

// Little help from:
// https://medium.freecodecamp.com/internationalization-in-react-7264738274a0#.uzs8fcozo

const fs = require('fs')
const globSync = require('glob').sync
const mkdirpSync = require('mkdirp').sync

const filePattern = './intl/messages/**/*.json'
const outputDir = './intl/locales/'

const messages = globSync(filePattern)
  .map((filename) => fs.readFileSync(filename, 'utf8'))
  .map((file) => JSON.parse(file))
  .reduce((collection, descriptors) => {
    descriptors.forEach(({id, defaultMessage}) => {
      if (collection.hasOwnProperty(id)) {
        throw new Error(`Duplicate message id: ${id}`)
      }
      collection[id] = defaultMessage
    })
    return collection
  }, {})

mkdirpSync(outputDir)

const messagesJson = JSON.stringify(messages, null, 2)
const defaultJson = JSON.stringify(JSON.parse(`{ "en": ${messagesJson} }`), null, 2)

// This is what we send for translations
fs.writeFileSync(outputDir + '_default.json', defaultJson, null, 2)
// This is `en`, our default locale
fs.writeFileSync(outputDir + 'default.js', `/* eslint-disable quotes */\nexport default ${messagesJson}\n`, null, 2)
