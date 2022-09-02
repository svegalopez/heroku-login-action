# Heroku Login Action

The heroku CLI comes installed in Github Actions workers by default. Make use of it by logging in!

Example usage:

```
name: Deploy Staging

on:
  push:
    branches: [main] 
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Code Checkout
        uses: actions/checkout@v3

      - name: Heroku Login
        uses: svegalopez/heroku-login-action@main
        with:
          heroku_api_key: ${{secrets.HEROKU_API_KEY}}
          email: ${{secrets.HEROKU_EMAIL}}
          
      - name: Heroku Deploy
        run: |
          git fetch --prune --unshallow
          heroku git:remote -a ${{secrets.HEROKU_STAGING_NAME}}
          git push heroku main
```

