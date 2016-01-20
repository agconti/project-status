const fs = require('fs')
const Rx = require('rx')
const request = Rx.Observable.fromNodeCallback(require('request'))

const oauthToken = process.argv[2]
const owner = process.argv[3]
const repository = process.argv[4]
const url = `https://api.github.com/repos/${owner}/${repository}/issues`
const headers = {
	'Authorization': `token ${oauthToken}`
	, 'User-Agent': owner
}


request({url, headers})
	.map(res => JSON.parse(res[0].body))
	.flatMap(issues => issues.map(issue => issue.title))
	.subscribe( result => console.log(result)
						, err => console.error(err))
