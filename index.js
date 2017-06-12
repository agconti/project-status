const Rx = require('rx')
const request = Rx.Observable.fromNodeCallback(require('request'))
const [nodePath, filePath, oauthToken, owner, repository] = process.argv
const url = `https://api.github.com/repos/${owner}/${repository}/issues`
const headers = {
		'Authorization': `token ${oauthToken}`
	, 'User-Agent': `my-open-prs-app`
}
const readyForCodeReview = 'Ready for code review ⚡'

const makeReviewItem = issue => {
	const { title, html_url, labels } = issue
	const status = labels.map(({ name }) => name)
											 .filter(label => label !== readyForCodeReview)
											 .join(", ")

	return `- ${title} (${html_url}) ${status}`
}

request({url, headers})
	.map(res => JSON.parse(res[0].body))
	.flatMap(issues => issues.map(issue => issue))
	.filter(issue => issue.hasOwnProperty('pull_request'))
	.filter(({ labels }) => labels.some(label => label.name === readyForCodeReview))
	.map(makeReviewItem)
	.subscribe( result => console.log(result)
						, err => console.error(err))
