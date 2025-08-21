---
title: "Flask Deployment for Beginners"
date: "2025-08-21"
tags: [Flask, Deployment, Python, Vercel, Heroku]
---

# Flask Deployment for Beginners

Deploying your first Flask app can feel overwhelming, but it doesn’t have to be! In this guide, I’ll walk you through the basics of getting your Flask project live on the web, using platforms like Vercel and Heroku.

## Why Deploy Flask?
- Share your project with the world
- Test your app in a real environment
- Learn real-world dev skills

## Step 1: Prepare Your Flask App
- Ensure your app runs with `flask run`
- Add a `requirements.txt` file
- Set up a `Procfile` (for Heroku)

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
