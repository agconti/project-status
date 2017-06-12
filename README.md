# project-status
![](https://media.giphy.com/media/3ofT5WN84R2sxzlK7K/giphy-downsized.gif)

This is a simple utility that quickly gets and formats the outstanding pull requests for a repository on GitHub . PRs with the `Ready for code review label` are returned and formatted nicely so you can alert your team to take a look:

```
- feat: super cool feature 😱 (https://github.com/your-org/project/pull/1) L ⌚
- feat: omg moar features (https://github.com/your-org/project/pull/2) S ❤️
- fix: oh no. squashed a bug! (https://github.com/your-org/project/pull/3) L ⌚, wooops!
```

## Install
Clone this repository:
```
git clone git@github.com:agconti/project-status.git
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
