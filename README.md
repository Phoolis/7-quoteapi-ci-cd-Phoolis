# Quote of the Day API - CI/CD pipeline

**NOTE** This assignment is done using the public repository due to Render.com restrictions.

In this assignment, you will:
- Work with a pre-built Node.js API that returns random motivational quotes.
- Fix linting errors and make all tests pass.
- Set up **two** GitHub Actions workflows:
   - **CI Workflow** — Runs on every push and pull request to check code quality.
   - **Deployment Workflow** — Runs only when you create a GitHub Release and deploys to Render via webhook.

# Steps to Complete:

## Part 1 - CI workflow
1. Clone repository locally
3. Install Dependencies
4. Fix Linting Issues
```
npm run lint
```
5. Fix Failing Tests
```
npm test
```

6. Create `.github/workflows/ci.yml`
This workflow runs on every push and pull request. It should run linter and tests

Goal: Every code change is checked automatically.

## Part 2 — Deployment Workflow
7. Render Deploy Hook
- Go to Render and sign in.
- Create a New Web Service.
- Connect your GitHub account and select your  repo.
- Copy the Deploy Hook URL.

8. Add the Deploy Hook as a GitHub Secret 
```
Name: RENDER_DEPLOY_HOOK
Value: (paste your Deploy Hook URL)
```

9. Create `.github/workflows/deploy.yml`
This workflow runs only when a release is published.

Goal: Code is deployed only when a release is made and linting & tests pass.

10. Create a Release
Go to Releases → Create a new release.

Tag version (e.g., v1.0.0).

Publish release — the deployment workflow will run and trigger Render.

11. Verify Deployment
Visit your Render URL → `/quote` endpoint should return a random quote.

To confirm that your workflow is functioning correctly, try modifying the source code. For instance, you could update the response in `app.js` to include extra text. After committing and pushing your changes, you should also create a new Release in GitHub to trigger the deployment workflow:
```
app.get('/quote',(req,res)=>{
  const randomIndex = Math.floor(Math.random() * quotes.length);
  // Add "Day's quote: " here
  res.json({quote: "Day's quote: " + quotes[randomIndex]});
});
```
Commit and push your changes to the GitHub repository. Once the Render deployment is complete, check your application to ensure the response reflects your update.
