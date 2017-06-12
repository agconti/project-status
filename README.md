# project-status
![](https://media.giphy.com/media/3ofT5WN84R2sxzlK7K/giphy-downsized.gif)

This is a simple utility that gets, formats, and organizes the outstanding pull requests by priority for a repository on GitHub. PRs with the `Ready for code review label` are returned and formatted nicely so you can alert your team to take a look:

```
P1:
- fix: oh no. squashed a bug! (https://github.com/your-org/project/pull/3) M ✨, wooops!

P2:
- feat: super cool feature 😱 (https://github.com/your-org/project/pull/1) L ⌚
- feat: omg moar features (https://github.com/your-org/project/pull/2) S ❤️

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
"start": "node index.js $(cat key.txt) :org :repository"
```

Organize your PRs into priority order by adding `P1`, `P2`, `P3`, and `P4` labels. Then mark PRs as ready by adding a `Ready for code review` label and they'll show up in the digest.

## Usage
node index.js :token :org :repository

Ex:
```bash
node index.js 3d2dsafe3f942b5f6b44c114121 giphy web-app agconti
```

or:
```
npm start
```
