const fs = require('fs')
const spawnSync = require('child_process').spawnSync
const lyric = fs.readFileSync('./lyric.txt').toString()

const words = {}

lyric.split('\n')
    .filter(line => line.length > 0)
    .map((line, i) => {
        const lineN = i
        line.replace(/ /g, '')
            .split('')
            .forEach((word, i) => {
                const filename = lineN + '-' + i + '(' + word + ').aiff'
                spawnSync('say', [word, '-o', './aiff/' + filename])
            })
    })