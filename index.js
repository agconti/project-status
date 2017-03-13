const Rx = require('rx')
const request = Rx.Observable.fromNodeCallback(require('request'))

const [nodePath, filePath, oauthToken, owner, repository, user] = process.argv
const url = `https://api.github.com/repos/${owner}/${repository}/issues?creator=${user}`
const headers = {
		'Authorization': `token ${oauthToken}`
	, 'User-Agent': `my-open-prs-app`
}

const readyForCodeReview = ({labels}) => {
	if (!labels) {
		return false
	}

	return labels.some(label => label.name === 'Ready for code review ⚡')
}

const makeReviewItem = issue => {
	const { title, number, created_at, html_url, labels } = issue
	const now = new Date()
	const opened = new Date(created_at)
	const daysSinceOpened = Math.round(Math.abs(now - opened) / 8.64e7)
	const status = labels.map(label => label.name).join(", ")

	return `- ${title} ( Opened ${daysSinceOpened} days ago ) (${html_url}) ${status}`
}

request({url, headers})
	.map(res => JSON.parse(res[0].body))
	.flatMap(issues => issues.map(issue => issue))
	.filter(issue => issue.hasOwnProperty('pull_request'))
	.filter(readyForCodeReview)
	.map(makeReviewItem)
	.subscribe( result => console.log(result)
						, err => console.error(err))
