# Motivational Quote Action

A GitHub Action that adds inspiring motivational quotes to your workflows. This action fetches random quotes from a curated collection to help uplift and inspire your team.

## Features

- Fetches random motivational quotes from a curated API
- Outputs the quote along with its author
- Perfect for adding inspiration to workflow summaries or PR comments

## Usage

To use this action in your workflow, add the following step:

```yaml
- name: Get Motivational Quote
  uses: NatalNW7/typescript-action@v1
  id: quote

- name: Use the Quote
  run: echo "Today's inspiration: ${{ steps.quote.outputs.quote }}"
```

### Outputs

The action provides the following outputs:

- `quote`: A motivational quote in the format `"Quote text" - Author -`

### Example Workflows

#### Add a Quote to PR Comments

```yaml
name: PR Inspiration
on:
  pull_request:
    types: [opened]

jobs:
  inspire:
    runs-on: ubuntu-latest
    steps:
      - name: Get Quote
        uses: NatalNW7/typescript-action@v1
        id: quote
      
      - name: Comment on PR
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `Let's start this PR with some inspiration:\n\n${{ steps.quote.outputs.quote }}`
            })
```

#### Daily Team Inspiration

```yaml
name: Daily Inspiration
on:
  schedule:
    - cron: '0 9 * * 1-5'  # Every weekday at 9 AM

jobs:
  inspire:
    runs-on: ubuntu-latest
    steps:
      - name: Get Quote
        uses: NatalNW7/typescript-action@v1
        id: quote
      
      - name: Send to Slack
        uses: slackapi/slack-github-action@v1.24.0
        with:
          channel-id: 'team-channel'
          slack-message: "Today's Inspiration: ${{ steps.quote.outputs.quote }}"
        env:
          SLACK_BOT_TOKEN: ${{ secrets.SLACK_BOT_TOKEN }}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

Quotes are provided by the [Motivational API](https://gomezmig03.github.io/MotivationalAPI/en.json)