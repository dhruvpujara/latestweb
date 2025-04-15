git init

git remote add origin https://github.com/dhruvpujara/latestweb.git

// Pull existing changes first
git pull origin main --allow-unrelated-histories

// Stage and commit your changes
git add .
git commit -m "Updated project files"

// Push to remote repository
git push -u origin main

// For future updates:
// git pull origin main
// git add .
// git commit -m "Update message"
// git push origin main