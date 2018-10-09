# GitHub Onboarding
In this section you will learn the basic workflow of using GitHub, which will be very useful for the remainder of the course, as well as your internship/job. Hopefully you will continue using this as a reference for the future 😀

## GitHub Repository Overview
![](https://i.stack.imgur.com/UvZ0M.png)

### Working Directory
When you clone a repository, you clone it to your working directory on your computer, and create a **local repository** on your computer as well. This allows you to make **commits** (explained below) on your local repository without affecting the **remote repository** (think of the remote repository as what you see on the GitHub website). The local repository is extremely useful because you can create commits that you can return to, branch off from, etc.. Don't worry if you are confused, this will all be explained shortly! 

#### Staging Area
When files are created or updated, your local repository tracks that there are changes made. You can see this by running the following command in your working directory. 
```
git status
```

If I made some changes to this README.md file, I would see something like this:
```
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   README.md
```

As you can see, your local repository tracked changes from your working directory, but it noticed that they aren't staged. The staging area is basically you telling your local repository that you are ready for the changes in staging area to be committed. This then creates a commit, which you can think of as a snapshot of your working directory with the new changes that you made. You can add files to the staging area with the following command (git status also tells you how to do it if you forget!):

```
git add <file>
```

You can use the following command to add all files that were updated (includes deleted files):

```
git add -u
```

You can use the following command to add all changes:

```
git add -A
```
