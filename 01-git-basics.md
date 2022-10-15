# Git Basics

> *To prevent any kind of confusion:*
>
> - **GIT** is
>   - a **software tool** (command line)
>   - a **Distributed Version Control System**
> - **GITHUB** is
>   - a host for storing projects (repositories)
>     - projects are 'version controlled' by git
>   - a collaboration workspace for coders

---

## What is Git?

- a popular *(distributed) Version Control System* (VCS)
- command line tool
- Free and open source
- created 2005 by Linus Torvalds
- used for
  - coding and writing collaboration
  - tracking changes:
    - **what** (code, text, files)
    - **who**
    - **when**

---

## What is a Version Control System? <small>Part 1</small>

> "Version control lets you track your files over time."

Everyone of us is doing this ("`Save as..`"):

![failed versioning](img/failed_versioning.png)

A good way? Hmm...<br> Even worse: consider a shared folder!

---

## What is a Version Control System? <small>Part 2</small>

- backup and restore
- synchronization
- undo (short and long-term)
- track changes
- track ownership
- sandboxing
  - local tryout
  - branching and merging

---

## What is a Version Control System? <small>Part 3</small>

### Some Lingo (More to Follow)

- **Repository** (**Repo**) - file "storage place" (database / folder)
- **Working Copy** - local directory of files
- **Revision** - file version
- **Head** - latest revision in repo

### Difference Traditional and Distributed VCS

- *Traditional* - one "centralized" server stores repositories
- *Distributed* - independent / "peer-to-peer" repositories (decentralized)

### Links - Worth a Visit

- [A Visual Guide to Version Control – BetterExplained](https://betterexplained.com/articles/a-visual-guide-to-version-control/)
- [Intro to Distributed Version Control (Illustrated) – BetterExplained](https://betterexplained.com/articles/intro-to-distributed-version-control-illustrated/)

---

## What does Git do? <small>Motivational Slide</small>

- Use **Repositories** to manage projects
- **Clone** or **initialize** a project to work on a local copy
- Control and track changes with **Staging** and **Committing**
- **Branch** and **Merge** to allow for work on different parts<br>
  and versions of a project
- **Pull** the latest version from the repository to a local copy
- **Push** local changes to another repository

### Workflow

![github base commands](./img/git-state-diagram_(c)JREBEL.png)

---

## What does Git Offer?

- Git is a place to store content
  - Mostly code
  - Documents and presentations ([Markdown](https://en.wikipedia.org/wiki/Markdown))
  - Avoid large, binary blobs (if you have, check out [Git LFS](https://git-lfs.github.com/))
- Git gives you version control
  - History of code changes
  - Manage different versions of your code (*branches*)
- Git support collaboration in a distributed team
  - Store a copy of your code on remote servers
  - Everybody has a copy of the entire repository
  - Let multiple people contribute changes easily

---

## GUI or CLI?

- Command Line Interface (CLI)
  - Efficient if you know what you are doing
  - Hard, if you are not used to CLIs
  - Automate things, easy to share and repeat
- Integrated Development Environments (IDE)
  - Simplified Git clients in IDEs (Visual Studio Code, Intellij IDEA, Visual Studio, ...)
  - Useful for typical, day-to-day use cases

> In this course, we will focus on the CLI.

---

## Git Server Products

- Remote repository for distributed version control
- Combine Git version control with related topics like...
  - ...project and task management,
  - ...code reviews and discussions about changes,
  - ...continuous integration and delivery (CI/CD),
  - ...code security scanning,
  - ...package management, etc.
- Examples:
  - GitHub, Azure DevOps, AWS CodeCommit, BitBucket, GitLab, etc.

> In this course, we will focus on [GitHub](https://github.com/).

---

## Hands-On Exercise

1. Prerequisites - Github account and local git is configured
2. You created a repo on github or you got an assignment-link from me
3. Now head over to [Git Cheat Sheet: Commands and Best Practices](https://www.jrebel.com/blog/git-cheat-sheet)

---

## Additional Information

### Further Readings

- [Getting Started - First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
- [Getting Started Videos](https://git-scm.com/videos)

### Some of my Favorites

- [How to teach Git](https://rachelcarmena.github.io/2018/12/12/how-to-teach-git.html) - we will have a look at that one!
- and its successor: [Learn git concepts not commands](https://dev.to/unseenwizzard/learn-git-concepts-not-commands-4gjc).
- [How to explain git in simple words](https://smusamashah.github.io/blog/2017/10/14/explain-git-in-simple-words) absolutely misleading title<br>this one goes into depth (hashes, blobs, commits,...)
- [Understanding the GitHub flow](https://guides.github.com/introduction/flow/) - already mentioned before.
- [Aha! Moments when learning Git](https://betterexplained.com/articles/aha-moments-when-learning-git/) - we will have a look at that one too!

---

## ~~Book recommendations~~

It is **NOT** recommended to read the following two books:

<p float="left">
  <img src="./img/git-basics_Excuses.png" height="450" />
  <img src="./img/git-basics_UselessMessages.jpg" height="450" />
</p>

Instead use the online resources mentioned before!
