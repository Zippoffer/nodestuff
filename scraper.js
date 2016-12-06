#!/usr/bin/env node


const {
    createServer
} = require('http')
const {
    get
} = require('request')
const {
    load
} = require('cheerio')

const [, , ...cliArgs] = process.argv
const server = createServer()


// server.on('request', (req, res) => {


get(cliArgs[0], (err, _, body) => {

        const $ = load(body)
        const topStories = $('title')
        console.log(topStories[0].children[0].data)
            // res.end($.html())
            // res.end($)
    })
    // })

// server.listen(8080)
