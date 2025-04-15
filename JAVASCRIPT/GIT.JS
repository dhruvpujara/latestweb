// Initialize git repository
git init

// Add remote repository
git remote add origin https://github.com/dhruvpujara/latestweb.git

// First check status of changes
git status

// Add all files to staging
git add .

// Initial commit
git commit -m "Initial commit"

// Set main branch (if not already set)
git branch -M main

// Push to GitHub
git push -u origin main

// For subsequent updates, use:
// git add .
// git commit -m "Update message"
// git push origin main