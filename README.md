# WELCOME TO THE PRECOURSE!!!

## Please Read Everything Before Proceeding...

Welcome to the Codesmith Precourse.

This precourse is designed to help you become experienced in the fundamental JavaScript concepts. Many of the challenges may be familiar, especially in the first portion, but please be patient since a large final project awaits in which you will utilize all your JavaScript skills. Part 1 of the precourse is designed to solidify your basics in JavaScript.

This precourse will truly help you understand the core material and get you ready for our full time program. Plus, it is a great opportunity for you to show us that you can handle our rigorous curriculum.

If this is challenging, don't be worried! Getting used to the challenge will be a great asset to you throughout the Codesmith program and your entire development career.

## What OS should I be using?
- If you're using Mac OSX, you're going to be okay. We use macs here, too!
- Linux users, you have nothing to fear either.
- If you're using Windows, we recommend installing Ubuntu and learning how to use linux and unix commands. Follow [this link](http://www.ubuntu.com/download/desktop). You don't have to pay for it! Follow the installation guide, Learn how to install software with your terminal, and you'll be on your way to linux mastery.

## How do I get started?
- Read [You Need to Learn The Command Line](#you-need-to-learn-the-command-line) and [You Need to Know How To Use Github!](#you-need-to-know-how-to-use-github)
- Fork and Clone this Repository (review [You Need To Know How To Use Github!](#you-need-to-know-how-to-use-github) to learn how to fork and clone repositories)
- When the repository is on your computer, use your favorite text editor and work in each of the following subdirectories ([Level 1](/Level-1-Beginner), [Level 2](/Level-2-Intermediate), [Level 3](/Level-3-Advanced)). For editors, we recommend [VSCode](https://code.visualstudio.com/).

## Style guide

One of the signs of a great software developer is the ability to write clean, readable, and maintainable code. This means code that is indented appropriately, uses whitespace when necessary to make lines more readable, and adheres to certain consistent stylistic approaches and industry standard best practices. For instance, using `const` instead of `var` when a variable isn't modified after its creation allows the JavaScript engine to gain some performance benefits when executing your code, and it lets other developers reading your code know instantly, without any extra cognitive burden, what your intentions are for a variable. Other examples are not modifying function parameters unexpectedly, or making sure to place spaces in between operators such as `+`, `-`, `=`, etc.

Here at Codesmith we follow a custom styleguide based on [eslint recommended](https://eslint.org/docs/rules/). Down below in [Setting up VS Code](#Setting-up-VS-Code-(free)) you can find instructions for getting the eslint extension for VS Code. Once you have the extension, whenever you clone a new repository simply navigate to the directory from the terminal (in this case 'precourse-part-1') and run `npm install` to locally install the specific linting configuration - this way you'll get warnings in your text editor automatically when you don't follow the guidelines.

## You Need To Learn The Command Line

Still using the Windows Explorer or Mac Finder? These tools have a graphical interface (pictures of folders and files). However, many of the tools you'll use as a developer lack a nice graphical user interface (GUI). In order to use them, you'll need to be familiar with the command line. This is a management interface using only text. Don't worry! Once you get used to it, you'll find it makes your life much easier. You can use any resources you like. We recommend reading these.
- [What is the command line?](http://lifehacker.com/5633909/who-needs-a-mouse-learn-to-use-the-command-line-for-almost-anything)
- [Command line cheat sheet](http://cheatsheetworld.com/programming/unix-linux-cheat-sheet/)
- [Intro to Command Line](https://tutorial.djangogirls.org/en/intro_to_command_line/)

## You Need To Know How To Use GitHub

It is important that you get familiar with GitHub. We will provide you with all the challenges through GitHub and you will be submitting your completed work to use through GitHub. The way we use GitHub is slightly different so make sure you read the ["GitHub.md"](https://github.com/CodesmithLLC/precourse-JSFundamentals/blob/master/GitHub.md) file to get yourself familiar with the processes. Some knowledge of the command line will be necessary. Also, Github is very popular among well-known companies and knowing how to use it will undoubtedly be a great skill for you in the future. **YOU NEED TO FORK AND CLONE THIS REPO SO READ ["GitHub.md"](https://github.com/CodesmithLLC/precourse-JSFundamentals/blob/master/GitHub.md) CAREFULLY TO LEARN HOW!**
In addition, here is a [video tutorial](https://youtu.be/SWYqp7iY_Tc).
Or if you prefer, go directly to the source and [read the docs](https://git-scm.com/docs)!
One other thing to note, git uses text editor called VIM which comes with it's own quirks. While not required, it is very helpful to be familiar with [basic commands](https://staff.washington.edu/rells/R110/). Or if you prefer online games <https://vim-adventures.com/>.

## Instructions For The Precourse Challenges:

We divided part 1 of the precourse challenges into three different levels. Each level has its own folder. Each folder consists of four items (ignore any other files/folders or items you see):

- Skill Builder File ("README.md")
- Source Folder ("src")
- Test Folder ("test")
- Index File ("index.html")

You will only modify the codes inside the "main.js" file located in the source ("src") folder. **MAKE SURE TO READ ALL COMMENTS** inside the "main.js" file; these will be your instructions for solving each problem. DO NOT CHANGE anything in any other files or folders. You may take a look at the test folder to inquire how we are testing the correctness of the challenges. After you are done with each challenge open the index file (index.html) on the browser (Chrome or Firefox) to display the test results. For incorrect results, a red "x mark" will display beside the test that did not pass and for correct results, a green "check mark" will display beside the test that passed. We encourage you to look at the displayed error message; it will help you figure out what you might need to fix.

The Skill Builder File provides resources to instruct you on these challenges if needed. **Read the README files if you get stuck.**

#### Checkout The Skill Builders For Each Level:

- [Beginner Level](https://github.com/CodesmithLLC/precourse-part-1/blob/master/Level-1-Beginner/README.md)
- [Intermediate Level](https://github.com/CodesmithLLC/precourse-part-1/blob/master/Level-2-Intermediate/README.md)
- [Advanced Level](https://github.com/CodesmithLLC/precourse-part-1/blob/master/Level-3-Advanced/README.md)

## What do I do when I am done?

Please read the portion labeled **"What do I do when I am done with a unit?"** in the following link: [pushing to Github](https://github.com/CodesmithLLC/precourse-JSFundamentals/blob/master/GitHub.md).

## Setting up a Code Editor

Code is just text - instructions for the computer written in plain text. Therefore we could write it in a simple text editor - but most people choose to use a more sophisticated text editor - VS Code has become a standard in software engineering. These "Integrated Development Environments" (IDEs) give us features like automatic highlighting of different JavaScript keywords, auto-complete of terms, automatic indentation of our code, and a rich plugin ecosystem that allows us to extend it's functionality in many ways.

# Setting up VS Code (free)

Download VS Code:
<https://code.visualstudio.com/>

## Recommended extensions
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): linting integration
- [code runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner): for quickly running code
- [quokka](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode): displays console.logs inline
- [live share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare): to easily collaborate in a shared workspace
- [bracket pair colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2): uniquely colorizes matching brackets


## Useful VS Code documentation

Git integration in VS Code:
<https://code.visualstudio.com/docs/editor/versioncontrol>

Integrated terminal in VS Code:
<https://code.visualstudio.com/docs/editor/integrated-terminal>

Managing extensions for VS Code (includes themes):
<https://code.visualstudio.com/docs/editor/extension-gallery>

Launching VS Code from a terminal:
<https://code.visualstudio.com/docs/setup/mac>


<a href="http://www.youtube.com/watch?feature=player_embedded&v=SYRwSyjD8oI
" target="_blank"><img src="./docs/assets/images/vscode-video-thumb.png"/></a>

<https://www.youtube.com/watch?v=SYRwSyjD8oI>


## Problem solving as a software engineer

How to become a programmer, or the art of Googling well:
<https://okepi.wordpress.com/2014/08/21/how-to-become-a-programmer-or-the-art-of-googling-well/>

How to ask a good question on Stackoverflow:
<http://stackoverflow.com/help/how-to-ask>

How to ask smart questions as a software engineer:
<https://www.propublica.org/nerds/how-to-ask-programming-questions>

## Software engineer career

Map of modern software engineering:

<a href="https://www.youtube.com/watch?v=SBB1YtwODT0" target="_blank"><img src="./docs/assets/images/web-developer-map-thumb.jpeg"
width="240" height="180"/></a>

<https://www.youtube.com/watch?v=SBB1YtwODT0>: Updated for 2020

<https://www.youtube.com/watch?v=zXqs6X0lzKI>: Original 2014 Video

Impostor syndrome (we're all in this together)
<http://www.hanselman.com/blog/ImAPhonyAreYou.aspx>
