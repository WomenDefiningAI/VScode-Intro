# VS Code 101: The Complete Reference Guide for Builders

Welcome to VS Code! Whether you're building your first app, learning to code, or collaborating on a team project, you've chosen a powerful tool that can grow with you. This guide is designed to help you get comfortable with VS Code, understand what it can do, and build muscle memory around the workflows that matter most. You don't need to know everything—just what you need to know to start creating.

---

## What Is VS Code?

VS Code (Visual Studio Code) is a **code editor**—not to be confused with **Visual Studio**, which is a different, much heavier tool. Think of VS Code as a sophisticated text editor with superpowers built specifically for building software. It's free, lightweight, and runs on Windows, Mac, and Linux.

At its core, VS Code does four things:

1. **Edits code** with syntax highlighting, autocomplete, and refactoring tools
2. **Manages projects** by showing you all your files, folders, and dependencies
3. **Connects you to your code's version history** (Git/GitHub integration)
4. **Extends itself** through thousands of community-built extensions

It's created and maintained by Microsoft, and it's the most popular code editor in the world. You'll see it at startups, in enterprises, and in programming communities everywhere.

> **Mental Model:** Think of VS Code as a powerful text editor plus a dashboard for your entire project. It's where your code lives while you're working on it, and it connects you to all the tools you need—your terminal, your debugger, your version control, and AI assistants.

---

## Why VS Code Matters (Even If You're Not Technical)

You might be wondering: why not just use Notepad? Why use something that looks complicated?

The short answer: VS Code helps you write better code, faster, with fewer mistakes.

Here's what VS Code gives you that a basic text editor doesn't:

- **Autocomplete that learns:** Start typing `function` and VS Code suggests how to finish it, based on the language you're using
- **Error detection:** Red squiggly lines show you typos and mistakes before you run your code
- **Terminal integration:** Run your code, tests, and commands without leaving the editor
- **AI assistance:** Extensions like Claude Code let you ask an AI to help you write, explain, or fix code
- **Git integration:** See exactly what changed in your code, commit to GitHub, and manage branches without memorizing Git commands
- **Extension ecosystem:** Add tools for testing, linting, formatting, database management, and more

> **Key Insight:** VS Code isn't just for professional developers. It's designed to reduce friction and help you focus on solving problems, not wrestling with tools. Every feature exists to get you to "working code" faster.

Even non-technical builders benefit: you can use extensions to manage databases, run Docker containers, inspect APIs, and collaborate with AI in real time. VS Code is genuinely a universal tool for the modern build phase.

---

## VS Code vs. Other Editors/IDEs: A Mental Model

If you're coming from another editor or considering VS Code against alternatives, here's how it compares:

> **The Spectrum:** Code editors range from lightweight (Notepad, Sublime Text) to heavyweight (IntelliJ, Visual Studio). VS Code sits in the middle—light enough to feel fast, powerful enough to replace specialized IDEs. You pay for this balance by installing extensions; you get the power without bloat.

### Comparison Table

| Feature | VS Code | Sublime Text | VS Studio | IntelliJ | Vim/Neovim |
|---------|---------|--------------|-----------|----------|-----------|
| **Performance** | Fast | Very Fast | Heavy | Heavy | Instant |
| **Learning Curve** | Gentle | Moderate | Steep | Steep | Vertical |
| **Cost** | Free | $99 | Free/Paid | Free/Paid | Free |
| **Extensions** | Thousands | Limited | Built-in | Built-in | Limited |
| **AI Integration** | Excellent | Good | Good | Good | Requires config |
| **Git Integration** | Built-in | Plugins | Built-in | Built-in | Plugins |
| **Debugging** | Via extensions | Limited | Excellent | Excellent | Terminal-based |
| **Terminals** | Integrated | No | No | Yes | No |

**Choose VS Code if you want:** A free, fast editor with an enormous ecosystem and gentle learning curve. It's beginner-friendly but powerful enough for professional work.

**Choose Sublime if you want:** The absolute fastest text editor; great if you spend most of your time editing files rather than debugging or running commands.

**Choose VS Studio if you want:** Deep integration with Microsoft technologies (.NET, Azure, C#); best for enterprise Windows development.

**Choose IntelliJ if you want:** Language-specific power for Java, Python, or Kotlin; built-in tools that come pre-configured.

**Choose Vim if you want:** To become a keyboard-wizard who can edit code at superhuman speeds; steep learning curve, enormous payoff.

> **Reality Check:** Most professional developers use VS Code. It's the default for a reason: the balance of simplicity, power, and ecosystem is hard to beat. If you're starting out, VS Code is the right choice.

---

## Getting Set Up: Detailed Steps for Windows, Mac, and Linux

### Download and Install

**Windows:**

1. Visit [code.visualstudio.com](https://code.visualstudio.com)
2. Click the blue **Download for Windows** button
3. Run the installer (it will download automatically)
4. Accept the license agreement
5. Choose whether to add VS Code to your **PATH** (we recommend yes; this lets you type `code` in your terminal)
6. Complete the installation

**Mac:**

1. Visit [code.visualstudio.com](https://code.visualstudio.com)
2. Click the **Download for Mac** button
3. Unzip the downloaded file
4. Drag **Visual Studio Code** to your **Applications** folder
5. Launch it from **Applications** or use Spotlight (Cmd+Space, type `code`)
6. (Optional) To use `code` in your terminal, open VS Code, press **Cmd+Shift+P**, search for "Shell Command: Install 'code' command in PATH", and select it

**Linux (Ubuntu/Debian):**

```bash
# Add Microsoft's GPG key
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/vscode.gpg > /dev/null

# Add VS Code repository
echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/vscode.gpg] https://packages.microsoft.com/repos/code stable main" | sudo tee /etc/apt/sources.list.d/vscode.list > /dev/null

# Update and install
sudo apt update
sudo apt install code
```

**Linux (Fedora/RHEL):**

```bash
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo tee /etc/yum.repos.d/vscode.repo << 'EOF'
[code]
name=Visual Studio Code
baseurl=https://packages.microsoft.com/yumrepos/vscode
enabled=1
gpgcheck=1
gpgkey=https://packages.microsoft.com/keys/microsoft.asc
EOF

sudo dnf install code
```

### First-Launch Setup

When you open VS Code for the first time:

1. You'll see a Welcome tab—this is helpful; skim it or close it
2. Choose a color theme (**File** > **Preferences** > **Theme** > **Color Theme**), or use the default
3. Install Git (if you don't have it):
   - **Windows/Mac:** Download from [git-scm.com](https://git-scm.com)
   - **Linux:** `sudo apt install git` (Ubuntu) or `sudo dnf install git` (Fedora)
4. Verify Git is installed: Open the terminal in VS Code (**Ctrl+`** or **Cmd+`**) and type `git --version`

You're ready to start coding.

---

## The VS Code Tour: Understanding the Interface

VS Code's layout is consistent: the **Activity Bar** on the left, the **Editor** in the center, and the **Side Panel** on the right. Here's what each element does:

### The Activity Bar (Left Side)

This vertical bar gives you access to six main panels:

| Icon | Name | What It Does |
|------|------|-------------|
| **Explorer** | File browser | Shows your project's files and folders; click files to open them |
| **Search** | Find across files | Search for text in your entire project |
| **Source Control** | Git integration | Shows changes, lets you commit and push to GitHub |
| **Run and Debug** | Debugger | Set breakpoints, step through code, inspect variables |
| **Extensions** | Extension manager | Browse and install extensions |
| **Remote Explorer** | SSH/remote coding | Connect to remote servers or containers |

Click any icon to switch panels. Pro tip: use keyboard shortcuts (**Ctrl+1** for Explorer, **Ctrl+Shift+G** for Source Control, etc.) to switch faster.

### The Editor (Center)

This is where your code lives. You can have multiple files open in tabs at the top. The editor shows:

- **Syntax highlighting:** Code keywords are colored by language
- **Line numbers:** Click a line number to jump there
- **Error indicators:** Red squiggles for errors, yellow for warnings
- **Minimap:** On the right; scroll your view by clicking the minimap

### The Terminal Panel (Bottom)

Press **Ctrl+`** (backtick) to open the integrated terminal. This is where you:

- Run your app: `npm start` or `python app.py`
- Run tests: `npm test`
- Execute Git commands: `git add .` (though VS Code's UI is easier)
- Install packages: `npm install express`

You can have multiple terminals open; click the **+** icon to create a new one.

### The Status Bar (Very Bottom)

The thin bar at the bottom shows:

- **Current line and column:** Where your cursor is (click to jump)
- **File encoding:** Usually UTF-8 (fine to ignore)
- **End of line format:** Usually LF (fine to ignore)
- **Language mode:** Click to change (e.g., Python vs. JavaScript)
- **Errors/Warnings count:** Shows how many problems detected

### The Side Panel (Right)

When debugging, this panel shows:

- **Variables:** The values of variables at your current breakpoint
- **Watch:** Variables you're tracking
- **Call Stack:** How you got to this line of code
- **Breakpoints:** All your pause points

---

## Installing and Managing Extensions

Extensions are how VS Code grows. A bare VS Code is good; an extended VS Code with the right tools is amazing.

### How to Install Extensions

**Method 1: Via the Extension Marketplace**

1. Click the **Extensions** icon in the Activity Bar (or press **Ctrl+Shift+X**)
2. Search for an extension by name (e.g., "Claude Code")
3. Click **Install**
4. Most extensions activate immediately; you might need to reload VS Code for others

**Method 2: Command Palette**

1. Press **Ctrl+Shift+P** (Windows/Linux) or **Cmd+Shift+P** (Mac)
2. Type "ext install" and search for the extension name
3. Press Enter to install

### Managing Installed Extensions

In the Extensions panel:

- **Disable an extension:** Click the gear icon and select **Disable**
- **Remove an extension:** Click the gear icon and select **Uninstall**
- **See what an extension does:** Click the extension to view its README

**Pro Tip:** Keep extensions lean. Install only what you use. Too many extensions slow VS Code down.

---

## Essential Extensions for Builders

Here are the extensions that matter most, organized by use case:

### AI and Code Generation

| Extension | What It Does | When to Use |
|-----------|-------------|-----------|
| **Claude Code** | AI-powered assistant by Anthropic; write, refactor, debug code | Every day—ask Claude to help with coding tasks |
| **Cursor** | AI editor fork of VS Code with built-in AI | Alternative to Claude Code; chat with AI directly |
| **Lovable** | AI tool for building full-stack web apps visually | Building web UIs and apps from scratch |

### Code Quality and Formatting

| Extension | What It Does | When to Use |
|-----------|-------------|-----------|
| **Prettier** | Auto-formats code (JavaScript, TypeScript, JSON, CSS, Markdown) | Press Save and your code is perfectly formatted |
| **ESLint** | Catches JavaScript/TypeScript mistakes and style issues | Prevents bugs before you run code |
| **Python** | Python language support (syntax, debugging, linting) | If you code in Python |
| **Pylance** | Advanced Python language intelligence | If you code in Python professionally |

### Git and Collaboration

| Extension | What It Does | When to Use |
|-----------|-------------|-----------|
| **GitLens** | Shows you who wrote each line, when, and why; powerful Git integration | Understanding code history; collaborating on teams |
| **GitHub Copilot** | AI code suggestions as you type (paid subscription) | Accelerates coding; pair-programmed with AI |
| **Live Share** | Real-time collaborative editing; share your VS Code session | Pair programming; teaching; code review with colleagues |

### Testing and Debugging

| Extension | What It Does | When to Use |
|-----------|-------------|-----------|
| **Jest** | Run and debug JavaScript tests visually | If you write tests in Jest |
| **Test Explorer UI** | Unified interface for running tests across languages | Managing tests in any language |

### API and Database Tools

| Extension | What It Does | When to Use |
|-----------|-------------|-----------|
| **Thunder Client** | API testing tool; like Postman but built into VS Code | Testing APIs; debugging HTTP requests |
| **REST Client** | Make HTTP requests from `.rest` files | Quick API testing without leaving your editor |
| **SQLTools** | SQL database IDE; connect to databases, run queries | Working with SQL databases |

### Utilities and Productivity

| Extension | What It Does | When to Use |
|-----------|-------------|-----------|
| **Code Runner** | Run code snippets in various languages | Testing small chunks of code |
| **Vim** | Use Vim keybindings if you're a Vim enthusiast | If Vim is your home |
| **TODO Highlight** | Highlights TODO and FIXME comments | Tracking work in progress |
| **Bracket Pair Colorizer** | Colors matching brackets the same color | Tracking nested brackets in complex code |

### Setting Up Your First Extensions

Here's a suggested order for newcomers:

1. **Start with Claude Code** (or Cursor): Get AI help immediately
2. **Add Prettier:** Automatic code formatting
3. **Add ESLint** (if JavaScript): Catch errors early
4. **Add GitLens:** Understand code history
5. **Add Thunder Client:** Test APIs

Once these are working, add others as you need them.

---

## AI Tool Integration: Claude Code, Lovable, and Cursor

AI is transforming how we build. VS Code has three major AI tools; here's how to use them.

### Claude Code (by Anthropic)

Claude Code is an extension that brings Claude, Anthropic's AI assistant, into VS Code. It's designed specifically for coding help.

**Setup:**

1. Install the Claude Code extension from the Marketplace
2. Sign in with your Anthropic account (you can create a free account at [claude.ai](https://claude.ai))
3. In VS Code, open the Claude Code panel (look for the Claude icon in the Activity Bar)

**Common Workflows:**

**Write Code from Scratch:**

1. Open the Claude Code panel
2. Type a prompt: `Write a React component that displays a todo list`
3. Claude generates code; review it in the preview
4. Click **Insert** to add it to your file

**Refactor Existing Code:**

1. Highlight the code you want to refactor
2. Open Claude Code and type: `Refactor this to be more readable and use modern JavaScript`
3. Claude shows a diff; accept or reject changes

**Debug with Claude:**

1. Copy an error message into Claude Code
2. Describe what's happening: `I'm getting a TypeError when I try to call this function`
3. Claude analyzes the error and suggests fixes

**Ask Questions:**

1. Highlight code you don't understand
2. Ask: `What does this loop do?`
3. Claude explains it in plain English

> **Best Practice:** Claude Code works best when you give it context. Instead of "How do I make a button?", ask "I'm building a React form with Tailwind CSS. How do I style a submit button to be blue with hover effects?" The more specific you are, the better Claude's answers.

### Lovable (for Web Apps)

Lovable is designed specifically for building web applications visually. It's especially powerful for UI-heavy projects.

**Workflow:**

1. Open Lovable at [lovable.dev](https://lovable.dev)
2. Describe your app: "A simple expense tracker app with a form to add expenses and a list to display them"
3. Lovable generates a full React app with Tailwind CSS
4. Use the visual editor to refine the UI
5. When ready, export or integrate with GitHub

Lovable is less about integrating into VS Code (it's a separate tool) and more about generating code that you then import into your project.

### Cursor (Alternative AI Editor)

Cursor is a fork of VS Code that includes AI directly in the editor.

**Key Differences from VS Code + Claude Code:**

- Cursor has AI built-in (no separate extension needed)
- Chat interface is integrated into the editor
- Works offline if you configure local models
- Costs $20/month for Pro features

**Setup:**

1. Download Cursor from [cursor.sh](https://cursor.sh)
2. It looks and feels like VS Code (because it is VS Code)
3. Press **Cmd+K** (Mac) or **Ctrl+K** (Windows/Linux) to open the chat
4. Type a prompt and Cursor generates code

Cursor is great if you want a cohesive AI + editor experience; Claude Code is better if you want to stay in standard VS Code with community extensions.

---

## Essential Workflows

### Editing Workflow: Making and Saving Code Changes

**The Basic Loop:**

1. **Open a file:** Click it in the Explorer, or press **Ctrl+O** (Open File)
2. **Edit:** Type or paste code; VS Code highlights syntax automatically
3. **Navigate within the file:** Press **Ctrl+F** to find text; **Ctrl+H** to find and replace
4. **Go to a function/variable:** Press **Ctrl+P**, type the file name, then press **Ctrl+Shift+O** to show symbols in that file
5. **Save:** **Ctrl+S** or enable autosave (**File** > **Preferences** > **Settings**, search "autosave", set to "afterDelay")
6. **Format your code:** Highlight code and press **Shift+Alt+F**, or use Prettier extension (format on save automatically)

**Advanced Editing:**

| Action | Shortcut |
|--------|----------|
| **Comment/uncomment a line** | **Ctrl+/** (Windows/Linux) or **Cmd+/** (Mac) |
| **Select entire line** | **Ctrl+L** or click line number three times |
| **Duplicate a line** | **Shift+Alt+Down** (Windows/Linux) or **Shift+Option+Down** (Mac) |
| **Delete a line** | **Ctrl+Shift+K** (Windows/Linux) or **Cmd+Shift+K** (Mac) |
| **Move a line up or down** | **Alt+Up/Down Arrow** (Windows/Linux) or **Option+Up/Down Arrow** (Mac) |
| **Format/auto-indent code** | **Shift+Alt+F** (Windows/Linux) or **Shift+Option+F** (Mac) |
| **Multi-cursor editing** | **Ctrl+D** (Windows/Linux) or **Cmd+D** (Mac) to select the next occurrence; **Ctrl+K Ctrl+D** to skip; **Ctrl+U** to undo selection |

### Source Control Workflow: Git and GitHub

VS Code's Git integration makes version control approachable. You don't need to memorize Git commands.

**Setup (One Time):**

1. Open **Source Control** in the Activity Bar (**Ctrl+Shift+G**)
2. If you haven't initialized Git, click **Initialize Repository**
3. VS Code creates a `.git` folder (hidden; don't touch it)

**Committing Changes:**

1. Make edits to your files
2. Open **Source Control**
3. You'll see all changed files listed
4. Click the **+** icon next to a file to **Stage** it (add it to your next commit)
5. Type a commit message in the message box: "Add login form"
6. Press **Ctrl+Enter** to commit

**Viewing Differences:**

1. In Source Control, right-click a changed file
2. Click **Open Changes** to see before/after side-by-side
3. Red is removed; green is added

**Pushing to GitHub:**

1. Make commits locally (as above)
2. Click the **...** menu in Source Control and select **Push**
3. The first time, VS Code asks where to push; select your GitHub repository
4. Subsequent pushes just move your commits to GitHub

**Pulling from GitHub (Getting Updates):**

1. Click **...** in Source Control
2. Select **Pull**
3. VS Code downloads and merges the latest changes

**Using Branches:**

1. Click the branch name in the Status Bar (bottom)
2. Select **Create new branch**
3. Name it: `feature/add-auth` or `fix/login-bug`
4. Make commits; they're isolated from **main** until you merge
5. When ready, push, go to GitHub, and create a **Pull Request**

> **Mental Model:** Git saves snapshots of your code. Each commit is a snapshot. Branches are parallel timelines. `main` is your production timeline; `feature/X` is an experiment that doesn't affect main until you merge it.

### Debugging Workflow: Finding and Fixing Bugs

Debugging means running your code and pausing it at specific lines to inspect variables.

**Setup (One Time):**

1. Open **Run and Debug** (**Ctrl+Shift+D** or click the icon)
2. Click **Create a launch.json file** and select your language
3. VS Code creates a `.vscode/launch.json` file with default settings

**Setting Breakpoints:**

1. Click in the gutter (left margin) next to a line number to place a red dot (breakpoint)
2. That's the pause point
3. Run your code normally; it will pause there

**Running Your Code (Debug Mode):**

1. Press **F5** or click the **Play** button in the Run and Debug panel
2. Your code runs until it hits a breakpoint
3. At the breakpoint, you see:
   - **Call Stack:** How you got here
   - **Variables:** Values of all variables in scope
   - **Watch:** Variables you're tracking

**Stepping Through Code:**

| Action | Button | Shortcut |
|--------|--------|----------|
| **Step Over** (skip functions) | Step Over | **F10** |
| **Step Into** (enter functions) | Step Into | **F11** |
| **Step Out** (finish function) | Step Out | **Shift+F11** |
| **Continue** (run until next breakpoint) | Continue | **F5** |

### Terminal Workflow: Running Commands

The terminal in VS Code lets you run commands without leaving the editor.

**Open the Terminal:**

- Press **Ctrl+`** (backtick) or go to **Terminal** > **New Terminal**

**Common Commands:**

```bash
# Install packages
npm install express

# Run your app
npm start

# Run tests
npm test

# Check Git status
git status

# See your project structure
ls -la
```

**Create Multiple Terminals:**

1. Click the **+** icon in the Terminal panel
2. You can now run different commands in parallel (npm start in one, npm test in another)

**Clear the Terminal:**

```bash
clear
```

### Testing Workflow: Verifying Your Code Works

Testing means writing code that checks if your other code works.

**Example: Jest (JavaScript Testing)**

1. Install Jest: `npm install --save-dev jest`
2. Create a test file: `myFunction.test.js`
3. Write a test:

```javascript
const myFunction = require('./myFunction');

test('adds 1 + 2 to equal 3', () => {
  expect(myFunction.add(1, 2)).toBe(3);
});
```

4. Run tests: `npm test`
5. VS Code shows pass/fail in the terminal

**Using the Test Explorer Extension:**

1. Install **Test Explorer UI**
2. Open **Run and Debug**
3. You'll see a button to run all tests, or run individual tests
4. Green means passed; red means failed

---

## Customization & Settings

VS Code is highly customizable. Here's what matters most for beginners.

### Changing Your Theme

**Light or Dark?**

1. Press **Ctrl+Shift+P** and search "theme"
2. Select **Preferences: Color Theme**
3. Pick one you like (arrow keys to preview)

Popular themes: **Dracula**, **Nord**, **One Dark Pro**, **GitHub Light** (free); **One Pro** (paid)

### Changing Your Font

1. Open **Settings** (**Ctrl+,** or **File** > **Preferences** > **Settings**)
2. Search "font family"
3. Change the value to your preferred font: "Monaco", "Courier New", "Fira Code" (with ligatures), "JetBrains Mono"

### Keybindings: Make Shortcuts Your Own

1. Open **Settings** and search "keybindings"
2. Click **Edit in settings.json**
3. Add your custom bindings:

```json
[
  {
    "key": "ctrl+alt+d",
    "command": "editor.action.deleteLines"
  }
]
```

### Workspace Settings vs. User Settings

**User Settings:** Apply to every project (at `~/.config/Code/settings.json` on Linux, etc.)

**Workspace Settings:** Apply only to the current project (at `.vscode/settings.json` in your project folder)

To add workspace settings:

1. In **Settings**, look for **Workspace** tab
2. Make changes there; they're saved in `.vscode/settings.json` and shared with teammates

**Example Workspace Setting (Python Project):**

```json
{
  "python.linting.enabled": true,
  "python.linting.pylintEnabled": true,
  "editor.formatOnSave": true
}
```

### Auto-format and Linting

**Enable Format on Save:**

1. Open **Settings**
2. Search "format on save"
3. Check the box

**Set Prettier as Default Formatter:**

1. Search "default formatter"
2. Select **Prettier - Code formatter**

Now every time you press **Ctrl+S**, your code is automatically formatted.

---

## Common Questions & Troubleshooting

### "I installed an extension but it's not working"

**Check:**

1. Is the extension actually installed? Look in the Extensions panel; it should be listed under **Enabled**.
2. Do you need to reload? Some extensions require a reload. Look for a **Reload Required** button in the Extensions panel.
3. Is it enabled? Some extensions can be disabled; right-click and ensure it's not disabled.
4. Do you have the right dependencies? For example, Prettier requires a JavaScript/TypeScript file to activate.

**If still broken:**

1. Uninstall and reinstall the extension
2. Check the extension's README for setup steps
3. Search the extension's GitHub issues for your specific error

### "My code looks ugly; indents are all wrong"

This is usually a mixed indentation issue (some tabs, some spaces).

**Fix:**

1. Press **Ctrl+Shift+P** and search "indent"
2. Click **Convert Indentation to Spaces** or **Convert Indentation to Tabs** (pick one)
3. Set your default: **Settings**, search "indent size", set to 2 or 4 (2 is common for JavaScript; 4 for Python)

### "I can't find a file; I know it exists"

**Try:**

1. **Ctrl+P** opens the file finder; type part of the filename
2. If it doesn't appear, the file might be in `.gitignore` or outside your workspace

**Check:**

1. Did you open a folder? (**File** > **Open Folder**) or just a single file? If you opened just a file, VS Code won't see others nearby.
2. Is the file excluded? In **Settings**, search "exclude"; if your file's path matches an exclusion pattern, VS Code hides it.

### "VS Code is slow"

**Causes:**

1. Too many extensions—each adds overhead
2. Large files (millions of lines)—reduce by splitting into smaller files
3. Large git repositories—consider using git sparse-checkout

**Fix:**

1. Disable extensions you don't use (**Extensions** panel, right-click, **Disable**)
2. Check how much RAM VS Code is using: **Help** > **Toggle Developer Tools**, then **Performance** tab
3. Restart VS Code

### "I get 'command not found' in the terminal"

**Example:** You type `npm` and get "command not found"

**Causes:**

1. The tool isn't installed (npm is part of Node.js; install from [nodejs.org](https://nodejs.org))
2. Your PATH isn't set up (your computer doesn't know where the program is)
3. The terminal doesn't have the updated PATH (terminal was open before you installed the tool)

**Fix:**

1. Verify the tool is installed: In your system terminal (outside VS Code), run `which npm` (Mac/Linux) or `where npm` (Windows). If it returns a path, it's installed.
2. If not installed, install it
3. Close and reopen VS Code's terminal; it will refresh the PATH

### "I see red squiggles but my code works"

This is usually a language server issue. The linter is being too strict or isn't configured right.

**Quick Fix:**

1. **Settings**, search "linting"
2. Disable the linter: set `"eslint.enable": false` or `"python.linting.enabled": false`
3. Your code still works; the red squiggles just disappear

**Better Fix:** Configure the linter properly. This requires understanding your project's `.eslintrc` or `pylint.rc` configuration, which is project-specific.

### "I accidentally deleted something; can I undo?"

**Locally:**

1. **Ctrl+Z** or **Edit** > **Undo** to undo within the current file

**In Git:**

1. If you committed and pushed, you can still recover with `git log` to find the old version
2. Open **Source Control** and click **Discard Changes** to undo uncommitted changes (careful—this is permanent)

### "My credentials don't work with GitHub"

This is usually because GitHub requires personal access tokens now, not passwords.

**Fix:**

1. Go to GitHub.com, login, and generate a personal access token: **Settings** > **Developer settings** > **Personal access tokens**
2. Copy the token
3. In VS Code, when prompted for a password, paste the token instead

---

## Best Practices for Builders

### Code Quality Best Practices

1. **Commit often:** Don't wait until the end of the day. Commit every time you finish a feature or fix a bug. Small commits are easier to understand.

   > **Mental Model:** Your Git history is a story of your work. Each commit is a chapter. Make chapters meaningful.

2. **Write meaningful commit messages:** "Add login form" is better than "Fix". Future you will thank present you.

3. **Use branches for features:** Don't commit directly to `main`. Create a branch, work there, then merge via a Pull Request.

4. **Lint and format before committing:** Run your linter and formatter. This prevents style arguments on your team.

5. **Test before pushing:** Run your test suite. If it fails locally, it will fail on GitHub Actions (continuous integration).

### Workflow Best Practices

1. **Use keyboard shortcuts:** They save hours over months. Pick three shortcuts and use them daily until they're muscle memory.

2. **Open your project as a folder, not individual files:** (**File** > **Open Folder**). This gives you access to the file explorer, project-level search, and workspace settings.

3. **Use the terminal in VS Code:** No need to switch to a separate terminal window. Everything in one place.

4. **Organize extensions, not keyboard shortcuts:** If you find yourself wishing for a shortcut, install an extension that does it. Fewer shortcuts = less mental load.

### Version Control Best Practices

1. **Pull before you push:** Before pushing, run **Git** > **Pull**. This prevents merge conflicts.

2. **Use `.gitignore`:** Make sure your `.gitignore` file excludes `node_modules/`, `.env`, and other files that shouldn't be committed.

3. **Don't commit secrets:** Never commit passwords, API keys, or `.env` files. Use environment variables or `.env.local` (local only).

4. **Read diffs before committing:** Open **Changes** view to see exactly what you're committing. Catches accidental changes.

### AI Tool Best Practices

1. **Use AI for boilerplate:** Ask Claude Code to generate authentication, form validation, or test setup. It's perfect for repetitive code.

2. **Verify AI's output:** Claude is smart but not perfect. Test generated code and review it before committing.

3. **Ask follow-up questions:** "Can you make that more efficient?" or "Can you add error handling?" Claude learns context and improves.

4. **Use AI for explanation, not just generation:** Ask "What does this code do?" or "Why would I use this approach?" to learn faster.

### Collaboration Best Practices

1. **Use Live Share for pairing:** Instead of emailing code or describing bugs, share your VS Code session. Click **Extensions** > **Live Share**, then click **Share** to invite teammates.

2. **Leave comments in code:** Use `// TODO:` or `// FIXME:` to flag things for yourself or teammates. The TODO Highlight extension makes them visible.

3. **Use GitHub for code review:** Don't commit directly to main. Create a Pull Request and ask teammates to review. This catches bugs and spreads knowledge.

4. **Communicate via commits:** Write clear, descriptive commit messages. Teammates understand what you changed and why without asking you.

### Learning and Growth Best Practices

1. **Read other people's code:** Clone interesting projects. See how experienced developers organize their code.

2. **Use Claude Code to explain code you don't understand:** Highlight it and ask Claude. Learn faster this way.

3. **Build small projects first:** Don't start with a massive app. Build a TODO list, a weather app, a calculator. Gain muscle memory.

4. **Join communities:** Reddit's r/learnprogramming, Discord servers, local meetups. Ask questions. Learn from others' mistakes.

5. **Document as you go:** Write a README.md. Add comments to tricky code. Future you (or your team) will understand it faster.

---

## Next Steps & Learning Resources

### What to Build Next

1. **Start with a small project:** A personal website, a simple game, a data dashboard
2. **Use AI:** Let Claude Code help you. You'll learn faster by doing
3. **Add version control:** Initialize Git from day one. Build the habit
4. **Deploy publicly:** Put it on GitHub Pages, Vercel, or Netlify. Show people your work

### Essential Learning Resources

| Resource | What It Teaches | Best For |
|----------|-----------------|----------|
| **[freeCodeCamp.org](https://freecodecamp.org)** | Structured courses in web dev, Python, data science | Complete beginners |
| **[MDN Web Docs](https://developer.mozilla.org)** | HTML, CSS, JavaScript reference and tutorials | Web developers |
| **[The Odin Project](https://theodinproject.com)** | Full-stack web development curriculum | Self-directed learners |
| **[Codecademy](https://codecademy.com)** | Interactive coding lessons | Learning by doing |
| **[VS Code Documentation](https://code.visualstudio.com/docs)** | Official VS Code guides | VS Code-specific help |
| **[GitHub Docs](https://docs.github.com)** | Git and GitHub tutorials | Version control |
| **[Claude Code Guide](https://www.anthropic.com)** | Using Claude with VS Code | AI-assisted coding |

### Recommended Next Readings

- **[2-Build-together-vscode-workshop.md](/2-Build-together-vscode-workshop.md):** A hands-on workshop to practice VS Code workflows with real projects
- **[VS Code Keyboard Shortcuts PDF](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf):** Bookmark this; reference it daily
- **[Git Immersion](https://gitimmersion.com):** Interactive Git tutorial; 54 lessons to mastery
- **[A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/):** Mental model for organizing branches in teams

### Your First Week Challenge

1. **Day 1-2:** Set up VS Code, install the essential extensions (Claude Code, Prettier, GitLens)
2. **Day 3-4:** Create a simple project (a webpage, a Python script), commit it to Git
3. **Day 5-6:** Use Claude Code to ask for help refactoring or adding a feature
4. **Day 7:** Deploy your project and share the link with someone

You've got this. VS Code is your tool; the rest is just practice.

---

**That's VS Code 101.** You now know how to navigate it, extend it, and use it to build. The journey from here is making projects and learning through doing. Start small, use AI to accelerate, and trust the process. Welcome to the builder's community.
