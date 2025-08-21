# Flask Deployment for Beginners

Deploying your first Flask app can feel overwhelming, but it doesn’t have to be! Here’s a step-by-step guide to get your Flask project live on the web.

## Why Deploy Flask?
- Share your project with the world
- Test your app in a real environment
- Learn real-world dev skills

## Step 1: Prepare Your Flask App
- Make sure your app runs locally with `flask run`
- Add a `requirements.txt` file listing all dependencies
- Set up a `Procfile` if deploying to Heroku

## Step 2: Choose a Platform
- **Heroku:** Free tier, easy for beginners
- **Vercel:** Great for static and serverless, supports Python
- **Render:** Simple, generous free tier

## Step 3: Deploy (Example: Heroku)
1. Sign up at [heroku.com](https://heroku.com)
2. Install the Heroku CLI
3. Run `heroku create`
4. Push your code: `git push heroku main`
5. Visit your live app!

## Common Pitfalls
- Missing dependencies in `requirements.txt`
- Not setting the correct start command
- Environment variables not set

## Example: Deploying Moodly Backend
I used these steps to deploy the backend for [Moodly](https://moodly-2-0.vercel.app/). It helped me learn about environment management and scaling.

## Final Tips
- Read platform docs
- Start simple, then optimize
- Celebrate your first deploy!
