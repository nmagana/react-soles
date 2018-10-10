# GitHub Onboarding

In this section you will learn the basic workflow of using GitHub, which will be very useful for the remainder of the course, as well as your internship/job. Hopefully you will continue using this as a reference for the future 😀

## GitHub Repository Overview

![](https://i.stack.imgur.com/UvZ0M.png)

## Local Repository

### Working Directory

When you clone a repository, you clone it to your working directory on your computer, and create a **local repository** on your computer as well. This allows you to make **commits** (explained below) on your local repository without affecting the **remote repository** (think of the remote repository as what you see on the GitHub website). The local repository is extremely useful because you can create commits that you can return to, branch off from, etc.. Don't worry if you are confused, this will all be explained shortly! 

### Staging Area

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

As you can see, your local repository tracked changes from your working directory, but it noticed that they aren't staged. The staging area is basically you telling your local repository that you are ready for the changes in staging area to be committed. This then creates a commit, which you can think of as a snapshot of your working directory with the new changes that you made. 

There are also two states that files will be in when they are updated: **tracked** and **untracked**. Tracked files are files that are already being monitored by the local repository, because they were added and committed previously. Untracked files, on the other hand, are files that were newly created. Once they are added and committed, and future changes will have GitHub treat it as a tracked file.


You can add files to the staging area with the following command (git status also tells you how to do it if you forget!):

```
git add <file>
```

You can use the following command to add all files that were updated (does not include created files):

```
git add -u
```

You can use the following command to add all changes (includes created files):

```
git add -A
```

If you made changes to a file that you want to revert to, use the following command:

```
git checkout -- <file>
```

As seen in the diagram above, git checkout gets information that is committed in the local repository. This is what makes GitHub so powerful!

### Committing

Once files are in the staging area, you can commit them to the local repository with the following command:

```
git commit -m 'MESSAGE HERE'
```

The commit is now saved in the local repository. Make sure to also write a concise message so people can get a good idea of what your commit was about without reading your code. If you want to see the commit you made, use the following command:

```
git log
```

This will provide all the commits that you have in the local repository, starting with the most recent. You will see a lot of these:

```
commit 3b47c409ffe88a05d8a655c12906248d28b6e87e
Author: nmagana <nmagana2112@gmail.com>
Date:   Tue Oct 9 10:43:57 2018 -0700

    Create README.md
```

The commit has a Secure Hash Algorithm (SHA) ID that uniquely identifies the commit that was made. It also shows the author who created the commit, and the date the commit was created.

Another shortcut to save from having to add and commit each time is using the following command:

```
git commit -am 'MESSAGE HERE'
```
**Note: This only works with files that are updated, this won't add files that are untracked.**

## Remote Repository

GitHub is extremely powerful because of the remote repository. The remote repository is what allows for collaboration with everyone. You can think of it as the code that is on this website here. All the changes you were being made won't be seen until you **push** your code to the remote repository. Let's explore the concepts! 

Use the following to command to show all branches (local and remote) in the repository. Don't worry if you don't know about branching, we will be demonstrating an example shortly!

```
git branch -a
```

You should be getting an output that looks like this, depending on how many branches you have:

```
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
```

The * denotes what branch you are currently on. The `remotes/origin/master` is not a branch that you can switch to, but its actually a reference of master that exists on the remote repository! In GitHub collaboration, developers will constantly be  commiting changes to the remote repository. You can use the following commands below to interact with the remote repository!

### Git Fetch

As the name describes it, the following command will fetch updates from the remote repository to make your local repository aware of any new updates to files that have occured:

```
git fetch
```

Use `git fetch` whenever you want to know if there any updates, without actually applying these changes to your code. If you want to merge these changes into your working directory, use the following command:

```
git merge 
```

If you want to merge a branch into another branch, first checkout the branch that you want the changes that you want to make, then run the following command:

```
git merge <branch-with-changes>
```

If you run into a merge conflict, this is because you have changes in parts of your code that another branch or remote reference has made. You will go through a simple merge conflict example later in this tutorial.

### Git Pull





