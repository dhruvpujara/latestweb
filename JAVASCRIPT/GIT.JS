
git init

git remote remove origin
git remote add origin https://github.com/dhruvpujara/latestweb.git

git add .

git commit -m "Reset repository with latest changes"

git push -f origin main

// For future updates (normal flow):
// git pull origin main
// git add .
// git commit -m "Update message"
// git push origin main