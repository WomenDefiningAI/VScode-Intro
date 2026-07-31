# FAQs

Quick answers to common questions about VS Code, Git, GitHub, extensions, and the AI tools used in this workshop.

## What is VS Code, and is it free?

Visual Studio Code, usually called VS Code, is a free code editor from Microsoft. It gives you one place to edit files, run terminal commands, track changes with Git, and add tools through extensions.

## What is the difference between VS Code, Git, and GitHub?

Think of **VS Code** as your workspace, **Git** as the tool that records snapshots of your work, and **GitHub** as the website where you store and share those snapshots. They work well together, but they are three different tools.

## Do I need to know how to code or use the terminal?

No. You can begin by opening files, making small edits, and using VS Code's buttons and menus. The terminal is simply another way to give your computer instructions, and you can learn a few commands at a time.

## What is the difference between saving, committing, and pushing?

- **Saving** writes your latest changes to the file on your computer.
- **Committing** creates a named snapshot of those changes in Git.
- **Pushing** sends your commits to the repository on GitHub.

Saving a file does not automatically commit or push it.

## Should I work directly on `main` or create a branch?

Use a branch when you are working in a shared repository so your changes stay separate until they are ready to review. For a personal practice repository, working directly on `main` can be fine while you are learning. In VS Code, select the branch name in the lower-left corner to create or switch branches.

## Why can't I find a file or see my changes?

First, confirm that VS Code has the correct project folder open. Then save the file, refresh the Explorer, and check the Source Control panel for changes. The file may be inside a different folder, outside the current workspace, or hidden by an Explorer setting.

## What should I do if the terminal says `command not found`?

Check that the tool is installed and that you typed its name correctly. If you just installed it, close and reopen the terminal—or restart VS Code—so the terminal can refresh its PATH. Also confirm that you are using the expected shell and that the terminal is open in the correct project folder.

## How do I know whether an extension is trustworthy?

Check the publisher, verification badge, reviews, download count, recent update history, permissions, and official documentation. An extension should request access that makes sense for what it does. When in doubt, choose an official extension from a recognized publisher and install only the tools you need.

## What is the difference between VS Code Chat and Claude Code?

**VS Code Chat** is powered by GitHub Copilot and appears inside VS Code. **Claude Code** is Anthropic's coding assistant and can be used from the integrated terminal or its VS Code sidebar. The [hands-on exercise](3-Hands-on.md) lets you try the same small task in all three experiences and decide which workflow feels best.

## Do I need paid AI plans for this workshop?

A paid GitHub Copilot plan is not required for the small VS Code Chat exercise. You can activate Copilot Free with a GitHub account, subject to its usage limits. Claude Code requires a separate Claude or Anthropic login and whatever access is available for that account.

VS Code Chat can edit the sample file with its built-in tools; it does not require the separate GitHub CLI (`gh`). Plans, limits, and organization policies can change, so check the provider's current account information if you cannot access a feature.

## What should I do before accepting an AI-generated change?

Read the proposed action and review which files the AI wants to change. Never paste passwords, API keys, or other secrets into a prompt. Inspect and test the result before committing it—AI-generated code is a useful starting point, but you are still in control of what becomes part of your project.

## What if I make a mistake or delete something?

Start with **Undo**: **Ctrl+Z** on Windows/Linux or **Cmd+Z** on Mac. You may also be able to recover a deleted file from the Trash or Recycle Bin. If the work was committed, Git history gives you another way to find and restore an earlier version.

## Where to Go Next

- Need help installing VS Code? See [Installing VS Code](1-Installing-vscode.md).
- Following the live session? Open the [workshop guide](2-Build-together-vscode-workshop.md).
- Ready to practice? Use the [hands-on exercise](3-Hands-on.md).
- Want detailed explanations? Read the [complete VS Code reference](4-Vscode-101-final.md).
- Looking for deeper troubleshooting and Q&A? Visit the [office-hours follow-up](5-Office-hours-follow-up.md).
