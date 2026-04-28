# GitHub Activity CLI

A simple command-line tool that fetches and displays recent GitHub activity for any user.

## Features

- Fetches recent public events from the GitHub API
- Displays activity in a clean, readable format
- Handles various event types: Push, Issues, Stars, Creates
- Error handling for invalid usernames and network issues

## Installation

```bash
npm install
```

## Usage

Run the tool with a GitHub username:

```bash
node index.js
```

Edit the `index.js` file to change the username:

```javascript
github_activity("your-username");
```

## Supported Event Types

| Event Type    | Description                              |
|---------------|------------------------------------------|
| PushEvent     | Commits pushed to a repository            |
| IssuesEvent   | Issue opened, closed, or reopened         |
| WatchEvent    | Repository starred                        |
| CreateEvent   | Branch or tag created                   |
| Other         | Any other event type (generic display)  |

## Example Output

```
- Pushed 3 commit(s) to octocat/Hello-World
- Opened an issue in octocat/Spoon-Knife
- Starred octocat/Spoon-Knife
- Created branch in octocat/Hello-World
```

## Requirements

- Node.js 18+ (for native `fetch` support)
- Internet connection

## API Reference

Uses the [GitHub Events API](https://docs.github.com/en/rest/activity/events) endpoint:
```
GET https://api.github.com/users/{username}/events
```
## Project url
```
https://roadmap.sh/projects/github-user-activity
```
## License

ISC
