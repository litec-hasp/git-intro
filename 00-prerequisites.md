# Prerequisites

Deals with the following topics:

- Installation of git on Windows systems
- Installing and setup of software: [git](https://git-scm.com/)
- Creating a github account: [github](https://github.com/join)

---

## Packagemanager [chocolatey](https://chocolatey.org)

This is for Windows only! For Linux just use on-board-tools ;)

1. Open up an elevated Powershell console (admin).
1. Install chocolatey (see also <https://chocolatey.org/install>) by performing the following commands:

   ```bash
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
   ```

1. Restart elevated Powershell console and type:

   ```bash
    choco install git -y
   ```

---

### You don't want to use chocolatey?

### Are you really sure?

Ok, then install git from [git-scm](https://git-scm.com/download/win).

---

### Setup of git

> Beware! *Only the bare minimum is told here!*

For in-depth information see [Getting-Started](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup).

1. Open a command line - for example the newly available `git-bash`
1. type in the following two commands:

```bash
  git config --global user.name "<YourName>"
  git config --global user.email <YourEMail>
```

---

### Github Account

Follow this link: <https://github.com/join> and ... **JOIN!**

#### Username-Recommendations

- Litec staff: `litec-<UPIS Shortcut>`
- Litec students: `First letter of surname + first letter of firstname + last 8 digits of studentsID`
- Rest of the world: completely up to you!
