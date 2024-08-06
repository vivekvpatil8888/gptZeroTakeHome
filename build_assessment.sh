NEW_DIR="gptzero-frontend-assessment-24"

# Delete the directory if it exists
rm -rf ../$NEW_DIR && rm -rf ../$NEW_DIR.zip

# Copy the current directory to the parent directory
# excluding the node_modules and .next directories.

rsync -a --exclude=node_modules --exclude=.next . ../$NEW_DIR

# cd into that directory
# Compress all the git commits in the history into a single commit with the message "Assessment"
# Use rebase, non-interactive mode, and squash all commits into one

cd ../$NEW_DIR && git reset $(git commit-tree HEAD^{tree} -m "Assessment")

# Zip up that directory
cd .. && zip -r $NEW_DIR.zip $NEW_DIR && cd -