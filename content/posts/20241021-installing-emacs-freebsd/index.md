---
title: Installing Emacs on FreeBSD
author: Zoltán Király
date: 2024-10-21T02:08:15+04:00
categories:
- tech
tags:
- tutorial
- freebsd
- emacs
draft: false
---

Emacs is an extensible computing environment primarily known for its text editing capabilities, but its potential extends far beyond that. It can manage emails, help you keep track of tasks, play music, and even assist with language learning through flashcards and spaced repetition. One of the greatest strengths of Emacs is its endless customizability, making it an incredibly powerful tool.

In this post, I'll cover two options for installing Emacs on FreeBSD: the "pkg" command for a quick and easy installation, and the Ports Collection for greater control and customization.

<!--more-->

Before diving into the installation, it's worth noting that FreeBSD offers several flavors of Emacs. Here are the main options:

1. **emacs** - This is the stable release, recommended for most users, and it'll be the version I use throughout this tutorial.

2. **emacs-nox** - Designed for users who plan to run Emacs in a text-only terminal without a graphical interface. "Nox" stands for "No X Window."

3. **emacs-devel** - This is the development version that moves toward the next stable release. It's for users who want to try out new features and don't mind running into ocassional bugs.

## Installing Emacs using the pkg Command

The easiest way to install Emacs is by using the `pkg` command. Open a terminal and run:

```cmd
# pkg install emacs
```

After the installation finishes, you can launch Emacs by typing `emacs` in the terminal and pressing Enter.

```cmd
$ emacs
```

{{< callout note >}}
The `#` sign indicates that the command requires superuser (root) privileges, while the `$` sign denotes a normal user command. These symbols are for reference only and must not be typed. To switch to superuser mode, run:

```cmd
$ su -
```

For more information, refer to Chapter 3, "FreeBSD Basics => The Superuser Account," in the FreeBSD Handbook: https://docs.freebsd.org/en/books/handbook/basics/#permissions
{{< / callout >}}

If you want to uninstall Emacs, run the following commands:

```cmd
# pkg remove emacs
# pkg autoremove
```

The first command removes Emacs, and the second command cleans up any unused files that were installed with it.

## Installing Emacs Using the Ports Collection

Although the `pkg` command installs Emacs with settings that suit most users, the Ports Collection offers greater control if you need options not included in the default installation.

{{< figure src="config-options.jpg" link="config-options.jpg" loading="lazy" width="1446" height="930" caption="Figure 1: Emacs configuration options shown in a dialog box." alt="Emacs configuration options" >}}

Before proceeding, check if the Ports Collection is installed on your system by running:

```cmd
$ ls /usr/ports
```

If it's installed, you should see a list of subdirectories such as `devel`, `editors`, `net`, etc. These represent different categories of software available through the ports system.

If the command returns no results, install Git:

```cmd
# pkg install git
```

Then, fetch the HEAD branch of the Ports Collection:

```cmd
# git clone --depth 1 https://git.FreeBSD.org/ports.git /usr/ports
```

{{< callout note >}}
For more information about the Ports Collection, refer to Chapter 4, "Installing Applications: Packages and Ports => Using the Ports Collection," in the FreeBSD Handbook: https://docs.freebsd.org/en/books/handbook/ports/#ports-using
{{< / callout >}}

Once the Ports Collection is set up, you can install Emacs using the following commands:

```cmd
# cd /usr/ports/editors/emacs
# make install clean
```

During the installation, Emacs will be compiled from source along with its dependencies. This process can take anywhere from a few minutes to several hours, depending on your computer's hardware and internet speed. You may encounter dialog boxes prompting you to select options. If you're unsure which option to choose, you can simply stick with the default ones and press Enter to continue.

After the compilation finishes, you can start Emacs by running:

```cmd
$ emacs
```

If you ever want to uninstall the port, run the following commands:

```cmd
# cd /usr/ports/editors/emacs
# make deinstall
```

## Final Thoughts

In summary, the `pkg` command is the simplest way to install Emacs on FreeBSD, and it's the recommended option for most users. This method is ideal for anyone looking to install Emacs quickly without dealing with custom configurations.

On the other hand, if you want more control over how Emacs is installed, you might prefer using the Ports Collection. This option is great for users who are familiar with building software from source.