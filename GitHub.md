Read everything here closely :eyes:

GitHub is the software engineer's hub - where you'll find code written by your friends and team members and whole libraries like jQuery. What do we use GitHub for in our precourse?

## We're using GitHub for two purposes

1. As a hub for our Precourse instructions (they're saved in text documents - that end in .md). Each unit has its own .md file
2. As the place for you to save your progress to keep us updated

To update us on your progress is a little more complicated - follow these instructions step by step.

If you hit a block, consider the best search request to make on google and search for an answer (this is a core skill). If that does not work, send a message to hello@codesmith.io with the subject line: help (it must include 'help' in the subject!)

## How do I get started?

1. Install git <http://git-scm.com/download/mac>
    - Windows users <https://git-scm.com/download/win>
    - Mac users set up and install `brew` <http://brew.sh/> **HINT** if you ever need to install anything on a mac, use homebrew
    - then `brew update` and `brew install git`
    - Debian-based Linux users `sudo apt-get install git`

2. Fork this repo (this saves the instructions files to your own github profile)

  - click on fork button on the top right of the page <br><img src="./docs/assets/images/fork-highlight.jpeg" width="300px" />
  - click on your handle to fork to your own repo (that's the one with your name)

3. Clone the repo (this pulls down the instructions files to your own computer so you can edit them - you're going to add check marks to each instruction you complete)

  - copy and paste github url from the right side <br><img src="./docs/assets/images/copy-url.jpeg" width="300px" />
  - type in the following line into your command line and insert your copies url as shown below:
  ```
  git clone THE_URL_YOU_COPIED
  ```

For additional information on using Git and GitHub, watch this bonus video: <https://www.youtube.com/watch?v=tRTckrrCME4>


## What do I do when I am done with a unit?

When completed - you're going to commit and push your changes to your github. What does this mean?

Git is like Apple's time machine - it saves older versions of your work (even after you can no longer press undo) - but unlike Time machine that does this automatically, with Git, you have to tell it when you're ready to save a version for posterity - we use `git add` and `git commit` for this.

GitHub is a place online that you can 'push' up all your old versions so your friends and team mates (and the Codesmith team) can see them

That means you need to `git add` and `git commit` then `git push` your progress (whenever you feel you're proud of the number of sections you've checked off)

1. Navigate to where you downloaded ('cloned') the precourse instructions ![](./docs/assets/images/file-location.png)

2. Check the status of your work by typing ```git status``` in the command line (terminal). This will check whether you have made any changes. Here we've modified precourse-unit-1.md ![](./docs/assets/images/git-status.png)

3. Add your changes to 'prepare' them for saving a version using the command `git add`. Explicitly add your files one by one, you can do this by passing more than one file or folder to the `git add` command `git add file1.js file2.js` ![](./docs/assets/images/git-add.png)
> The command `git add .` adds all changes in the current directory, and while it might seem helpful, it can easily cause major headaches for you. In other words: **DO NOT DO THIS**


4. Now check the status - your file you've updated should have turned green! ![](./docs/assets/images/git-status-after.png)

5. Now we have to add a message using `git commit -m "[YOUR MESSAGE]" - your message should say how far you've got ![](./docs/assets/images/git-commit.png)

6. Now we're going to 'push' your code up to your github.com profile so we (the Codesmith team) can see it ![](./docs/assets/images/git-push.png)

7. Last you'll create a pull request from your fork on GitHub to the branch with
   your GitHub username on Codesmith's repo.
   ![](./docs/assets/images/pull-request-hack-hours.png)

   Here's a GIF:
   ![](./docs/assets/images/pr-and-merge.gif)

8. :dancers: Celebrate now that you have successfully worked through the git procedure :dancers:

## Git tips!

- remember, you can always see your log by typing `git log`
- in these beginning stages always explicitly define what `remote` and what `branch` you are pushing to. When I `git push origin master` I am pushing to the `master` branch on the `origin` remote.
- We can always see all our remotes and their urls by typing `git remote -v`
