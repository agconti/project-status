# my-open-prs
![](https://media.giphy.com/media/3ofT5WN84R2sxzlK7K/giphy-downsized.gif)

What PRs do I have open?!?!

This is a simple utility that quickly gets and formats your outstanding pull requests on GitHub. PRs with the `Ready for code review label` are returned and formatted nicely so you can alert your team to take a look:

```
- feat: super cool feature 😱  ( Opened 13 days ago ) (https://github.com/your-org/project/pull/1) L ⌚, Ready for code review ⚡
- feat: omg moar features ( Opened 48 days ago ) (https://github.com/your-org/project/pull/2) Ready for code review ⚡, S ❤️
- fix: oh no. squashed a bug! ( Opened 4 days ago ) (https://github.com/your-org/project/pull/3) L ⌚, Ready for code review ⚡, wooops!
```

## Install
Clone this repository:
```
git clone git@github.com:agconti/my-open-prs.git
```

Get a [personal access token](https://github.com/settings/tokens) and add it a file named `key.txt`:
```
echo "your-token" > key.txt
```

Update the start command to include your user.
```
"start": "node index.js $(cat key.txt) giphy web-app :your-user"
```

## Usage
node index.js :token :owner :repository :user

Ex:
```bash
node index.js 3d2dsafe3f942b5f6b44c114121 giphy web-app agconti
```

or:
```
npm start
```
