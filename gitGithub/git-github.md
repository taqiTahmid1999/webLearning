###### [git-Github cheatsheat](https://supersimpledev.github.io/references/git-github-reference.pdf)
  
Git-Github Architecture
***
Working Directory -(add)-> Stagin Area / Index -(commit)-> Local Repository ---> |online| -(push)-> Remote Repository
***
What we learn in this [video 1](https://youtu.be/hrTQipWp6co) and [video 2](https://youtu.be/1ibmWyt8hfw):
1. ***git status***: Situation in WD and SA
2. ***git log***: Commit history in Local Repository
3. ***git commit -m "version1" --amend***: *Amend* means **repair something**. Instead of creating new commit, this commit will go into our previous commit. This is very helpful for re-adjust our commit.
4. ***git reset***: When we type git add . All the file are added to the staging area. But when we type git reset it reverse the add function, which means Staging Area's file is been transfered to the Working Directory.  
5. ***git checkout --***: When we change a file in our WS, we can undo it by typing git checkout --<fileName| .>
6. ***commit hash***: When we type git log --oneline --graph. We can get a big number which is the ID of each commit. This ID is called commit hash.
7. ***git checkout < commit hash >***: We can check each and every code in every commit by using this command.
8. ***HEAD***: Which version we are currently viewing are marked as < HEAD >
9. ***git log --all***: We can check all the commit also behind the commit log. commit log only show the ahead commit (Previous). 
10. ***git checkout < commit hash> < file | folder | . >***: To restore any file or folder or all from any commit history.  
11. ***git push -u origin main***: This is the Git command for pushing commits from your local repository to a remote repository.

    ***-u***: This option is short for --set-upstream. When you use -u, you are setting up a tracking relationship between your local branch and the remote branch. This means that in the future, when you run git push or git pull, Git will know the default remote and branch to use, and you won't need to specify them each time.

    ***origin***: This is the default name Git gives to the remote repository from which you cloned your local repository. It's a common convention, but your remote repository might have a different name.

    ***main***: This is the name of the local branch you want to push to the remote repository. In this case, you are pushing the local branch named main to the remote repository.

So, the command git push -u origin main is essentially saying:

    "Push the commits from my local branch named main to the remote repository named origin, and set up tracking so that in the future, I can simply use git push without specifying the remote and branch each time."

After running this command, if you subsequently want to push changes to the main branch, you can simply use git push without specifying the remote and branch:
```
git push
```
This is possible because the tracking relationship has been established with the -u option in the initial push command.

12. ***`(HEAD -> main, origin/main, origin/HEAD)`***: in the `git log` output is indicating the state of the branches in your local and remote repositories, not multiple remote branches.  
Let's break it down:  
>**`(HEAD -> main)`:** This part indicates that your current working directory is on the `main` branch. The `HEAD` pointer is pointing to the latest commit on the `main` branch.  

>**`(origin/main)`:** This part indicates that the remote-tracking branch named `origin/main` is also pointing to the same commit. `origin/main` is a local representation of the `main` branch on the remote repository named `origin`. It keeps track of where the `main` branch is on the remote.

>**`(origin/HEAD)`:** This part indicates the state of the `HEAD` pointer on the remote repository (`origin`). It tells you which branch is currently checked out on the remote repository. In this case, it suggests that on the remote repository, the `HEAD` is pointing to the same commit as the remote `main` branch.

So, there is only one remote branch involved here (`origin/main`), and it corresponds to the `main` branch on the remote repository (`origin`). The `origin/HEAD` part is not indicating a separate branch; rather, it's telling you where the `HEAD` is on the remote repository, and in this case, it's pointing to the same commit as `origin/main`.

13. <mark>Remember</mark>: git push will only push when a new commit will be done .It will not push code even the code has been changed or in staging area.push only push commits and it does not push changes.
14. ***git fetch***: When you run git fetch origin (assuming origin is the name of your remote repository), Git fetches any new branches or changes made on the remote repository. This command fetches changes from the remote repository named origin and updates your remote-tracking branches (like origin/main, origin/feature-branch, etc.) to reflect any changes made on the remote.
15. ***git clone <URL> <folder_name(optional)>***: It clone a remote repository to our local device.
16. ***git pull origin <branch_name>***: The `git pull` command in Git is a combination of two operations: `git fetch` and `git merge`. When you run `git pull origin <branch_name>`, you are essentially fetching changes from the remote repository (`origin`) for the specified branch and merging those changes into your current local branch.

Here's a breakdown of what `git pull origin <branch_name>` does:

 **`git fetch origin <branch_name>`:**
   - This fetches the changes from the specified branch (`<branch_name>`) on the remote repository (`origin`). It updates your remote-tracking branch (`origin/<branch_name>`) to reflect the changes on the remote repository.

     ```
     git fetch origin <branch_name>
     ```

 **`git merge origin/<branch_name>`:**
   - After fetching the changes, Git automatically merges the changes into your current local branch.

     ```
     git merge origin/<branch_name>
     ```

   If there are no conflicts, Git will perform a fast-forward merge, bringing your local branch up to date with the changes from the remote branch.

Alternatively, you can use the following shorthand, which combines both steps into a single command:

```
git pull origin <branch_name>
```

This command is convenient for synchronizing your local branch with the corresponding branch on the remote repository. However, it's important to note that `git pull` automatically performs a merge, which may lead to merge conflicts if changes have been made both locally and remotely.

If you prefer more control over the merging process or want to review changes before merging, you can use `git fetch` followed by `git merge` or `git rebase` separately.  

17. ***git merge <branch_name> -m "Message"***:  Usually when we have two branch, that we want to merge the result merge will be the branch where we currently are. It is a good idea to merge a feature branch with the main branch when we are in main branch. So that the merged branch will be the main branch.
18. ***Feature Branch Workflow***:
  - **Create a Feature Branch:** Start by creating a new branch for each new feature or task. This branch is where you'll make and commit your changes.
```
git checkout -b feature-name
```
- **Work on the Feature:** Make your changes, commit regularly, and push the feature branch to the remote repository.
```
    git add .
    git commit -m "Your commit message"
    git push origin feature-name
```
- **Pull Request:**
    When you're ready to merge your changes back into the main branch (e.g., master), open a pull request. This is a request to merge your feature branch into the main branch.

- **Code Review:**
    Other team members review your code by looking at the changes in the pull request. They may suggest improvements or ask questions. This collaborative process helps maintain code quality.

- **Address Feedback:**
    If there are comments or suggested changes, address them by making additional commits to the same feature branch. The pull request is updated automatically.

- **Continuous Integration (CI):**
    Integrate your feature branch with a CI system. CI tools can run automated tests to ensure that your changes don't break existing functionality.

- **Merge into Main Branch:**
    Once the feature branch is approved and all tests pass, merge it into the main branch. This can be done using the merge button on the pull request or by using the command line.

    ```
    git checkout master
    git merge feature-name
    git push origin master
    ```
- **Delete Feature Branch:** After the merge, you can delete the feature branch both locally and remotely.
  ```
  git branch -d feature-name   # Locally
  git push origin --delete feature-name  # Remotely
  ```

***

### Summary:
- #### To Create a Version
```
git init
git add <file|folder|.>
git status
git commit -m "message" 
``` 
- #### To Repair Any Version
```
git log --all --graph
git checkout <commit_hash>
git add <file|folder|.>
git commit -m "message" --amend 
```
- #### To View Version
```
git log --all --graph
git checkout <commit_hash>
git checkout <branch_name>
``` 
- #### To Restore Version
```
git log --all --graph
git checkout <commit_hash> <file|folder|.>
git add <file|folder|.>
git commit -m "message"
``` 
- #### To Completely Delete Git From Directory
```
rm -rf .git
    OR,
Remove-Item -Recurse -Force .git
``` 
- #### To Ignore any file in git 
1. Create .gitignore
2. In that file add the file you want to git to be ignored
3. Then create a version git to be ignored

- #### To avoid any Unnecessary Branch Use merge
```
git checkout <commit_hash|main>
git merge <branch_name|commit_hash|HEAD|origin/main>
```
## GitHub
- #### To add a Github repository to project
```
git remote add <remote_name|origin> <github repository link>
git remote -v
git config --global credential.username "Username_of_Github_Account"
git remote push <remote_name|origin> <branch_name|main>
git remote remove <remote_name>(if we want to delete remote)
```
- #### Create a new repository on CLI
```
echo "# gitPractice" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/taqiTahmid1999/gitPractice.git
  git push -u origin main
```
- #### Push an existing repository from the command line
```
git remote add origin https://github.com/taqiTahmid1999/gitPractice.git
  git branch -M main
  git push -u origin main
```
- #### How to push commit from local branch named branch2 to remote branch master:
If you want to push the commits from your local `branch2` to the `master` branch on the remote repository, you can follow these steps:

1. **Ensure You Are on `branch2`:**
   ```bash
   git checkout branch2
   ```

2. **Commit Your Changes:**
   ```bash
   git commit -m "Your commit message"
   ```

3. **Push to `master` on Remote:**
   ```bash
   git push origin branch2:master
   ```

   This command specifies that you want to push the local changes from `branch2` to the `master` branch on the remote repository (`origin`).

   If it's the first time you are pushing `branch2` to the `master` branch, you may need to use the `-u` option to set up tracking:

   ```bash
   git push -u origin branch2:master
   ```

   After the initial push with `-u`, you can use `git push` for subsequent pushes:

   ```bash
   git push
   ```

This will update the `master` branch on the remote repository with the changes from your local `branch2`. Make sure you have the necessary permissions to push to the `master` branch on the remote repository. Additionally, communicate with your team if needed, especially if others are working on the same repository.
 
 - #### Create a github backup
 ```
 git remote add origin <URL>
 git push -u origin <branch_name>
 ```
 - #### Push code to github
 ```
 git push origin <branch_name>
 git push origin <branch_name> -f
 ```
 - #### Github to local
 ```
 git pull origin main
 ```

 - #### Git Branch and Merge
 ```
 git branch <branch_name>
 git merge <branch_name> -m "Message"
 ```

 - #### Git pull request pull request merge conflicts solve process in CLI
 
 Step 1: Clone the repository or update your local repository with the latest changes.
```
git pull origin main
```
Step 2: Switch to the head branch of the pull request.
```
git checkout feature2
```
Step 3: Merge the base branch into the head branch.
```
git merge main
```
Step 4: Fix the conflicts and commit the result.
See Resolving a merge conflict using the command line for step-by-step instructions on resolving merge conflicts.

Step 5: Push the changes.
```
git push -u origin feature2
 ```

 - #### Feature Branch Workflow

 1. Create feature branch
 2. Upload to Github
 3. Create Pull request
 4. Merge feature branch
   
> [Fork:](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
>> Sure! Imagine you're working on a project with a friend, and your friend has the main version of the project saved on their computer. Now, you want to work on this project too, but you don't want to mess up your friend's original version. So, what do you do? You make a copy of the project on your own computer. This copy is called a "fork."
>>Now, you have your own version of the project to work on. You can make changes, experiment with new ideas, and do whatever you want with it without affecting the original project your friend has. This is useful because it lets you try out things without worrying about breaking anything in the main project.
>>Once you're happy with your changes and you want to share them with your friend or with the main project, you can send a message or a "pull request" to your friend or the main project's owner. This is like saying, "Hey, I made some cool changes to my version of the project. Would you like to add them to the main project?" If they like your changes, they can merge them into the main project. And if not, no worries! Your forked version remains separate, and you can keep working on it or try something else.
>>So, in simple terms, a fork is just a copy of a project that you can work on without affecting the original, and it's often used in collaborative projects like open source software development.
    Fork the repository.
    Make the fix.
    Submit a pull request to the project owner.
- #### Update Local repository according to the remote repository
To update your local repository to match the changes in the remote repository, you'll typically follow these steps using Git:

1. **Check the Current Status:**
   Before pulling changes from the remote repository, it's a good practice to check the current status of your local repository to ensure there are no uncommitted changes. Use the following command:
   ```
   git status
   ```

2. **Fetch Changes from the Remote Repository:**
   Fetching updates from the remote repository will bring in any changes that have been made to the remote repository since your last synchronization. Use the following command to fetch updates:
   ```
   git fetch origin
   ```

3. **Merge Changes into Your Local Branch:**
   Once you've fetched the updates, you need to merge them into your local branch. You can do this using the following command:
   ```
   git merge origin/<branch_name>
   ```
   Replace `<branch_name>` with the name of the remote branch you want to merge into your local branch. If you're working on the same branch as the remote repository, you can simply use `git merge origin/master` (assuming the remote branch is `master`).

   Alternatively, you can use the `git pull` command, which fetches changes from the remote repository and automatically merges them into your local branch:
   ```
   git pull origin <branch_name>
   ```

4. **Resolve any Conflicts (if necessary):**
   If there are any conflicts between the changes in the remote repository and your local changes, Git will notify you. You'll need to resolve these conflicts manually by editing the affected files and then committing the changes.

5. **Push Changes to the Remote Repository (if necessary):**
   After merging the changes from the remote repository into your local branch and resolving any conflicts, you may need to push your changes back to the remote repository if you have write access and want to contribute your updates. Use the following command to push your changes:
   ```
   git push origin <branch_name>
   ```
   Replace `<branch_name>` with the name of the branch you want to push to on the remote repository.

By following these steps, you'll be able to update your local repository to match the changes in the remote repository. Make sure to review any changes and resolve conflicts carefully to avoid any unintended modifications to your codebase.