# VS Code Office Hours: Follow-Up Session

**Women Defining AI | Build Together**  
*Casual Q&A session to deepen your VS Code skills*

---

Welcome back! We're so glad you're here. If you joined us for the initial workshop, you've already tackled the fundamentals—and we know there's probably a bunch of stuff you want to ask about, try out, or just revisit in a lower-pressure environment. If you're new to this session, no problem at all. We'll start with a quick recap and then dive into the stuff that makes VS Code *your* editor, not just *an* editor.

This is your space to ask the questions that don't always make it into a structured presentation. Why *is* your terminal doing that weird thing? What's actually happening when you install an extension? How do you know if something is safe? Let's figure it out together.

---

## What We're Covering Today

We'll touch on all the big themes from the workshop, but with more space to breathe, ask questions, and actually *show* what things look like:

- **Quick Recap of fundamentals** — keys, commands, the Command Palette
- **Extensions deeper dive** — how to evaluate them, what to watch for, dependency chains
- **Customizing your environment** — themes, keybindings, and why workspace settings exist
- **Debugging without fear** — it's not magic, just careful inspection
- **Terminal workflows** — bash, zsh, PowerShell and practical commands for builders
- **Common confusing moments** — the situations that make everyone go "wait, what?"
- **Q&A with real examples** — questions you've probably wondered about

By the end, you'll feel more confident experimenting with VS Code and know exactly where to look when something seems weird.

---

## Part 1: Quick Recap

Let's ground ourselves in the basics. Here's a table mapping the key concepts from the initial workshop:

| Concept | What It Does | Where You Find It |
|---------|-------------|-------------------|
| **Command Palette** | Search and run any VS Code action | `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac) |
| **Explorer** | File browser and project navigation | Left sidebar, or `Ctrl+B` to toggle |
| **Extensions Marketplace** | Install tools and features | Left sidebar icon (square), or `Ctrl+Shift+X` |
| **Debug Console** | Inspect variables and step through code | Run & Debug panel, or `Ctrl+Shift+D` |
| **Integrated Terminal** | Build, run, and manage your project | View menu → Terminal, or `Ctrl+`` ` |
| **Settings** | Customize everything about the editor | `Ctrl+,` or Command Palette → Preferences |
| **Keybindings** | Shortcuts for faster workflows | `Ctrl+K Ctrl+S` or Command Palette → Keybindings |
| **Themes** | Change the look of your editor | Settings → Color Theme, or Command Palette |

If any of these feel fuzzy, that's totally okay. The nice thing about VS Code is that everything has a default, so you can explore without breaking anything.

---

## Part 2: Extensions Deeper Dive

### How Do You Even Evaluate an Extension?

Okay, so you've opened the Extensions Marketplace and there are like... a lot of options. How do you know which ones are actually worth your time?

**The evaluation checklist:**

1. **Downloads** — A high download count (100k+) usually means the extension has been around and people like it. It's not a perfect measure, but it's a signal.

2. **Reviews** — Look at the actual star rating. Anything 4+ stars is generally solid. Read a few reviews to see if the issues people mention matter to you.

3. **Last Update** — Check when the extension was last updated. If it was updated in the last month or two, the maintainer is still paying attention. If it hasn't been touched in 2+ years, that's a yellow flag.

4. **Permissions and Trust** — Does the extension seem to be asking for more access than it needs? (We'll talk more about this below.)

5. **One-word summary** — Can you explain what the extension does in one sentence? If you can't, you probably don't need it yet.

> **Key insight:** The best extension is the one you actually use. It's better to install 3 great extensions and use them daily than to have 20 extensions you forgot about.

### Trust Issues (But Seriously)

Here's the thing: VS Code extensions can access a lot of your system. They can read your files, see your keystrokes, access the network—basically anything a program on your computer can do. So how do you know if an extension is trustworthy?

**Red flags:**

- **Unknown publisher** — If you've never heard of the person/company and can't find anything about them online, be cautious.
- **Vague description** — "Does stuff" is not a good explanation.
- **Requests excessive permissions** — If a theme extension is asking for network access, something's off.
- **No source code** — Some extensions are open-source (you can see the code on GitHub). Closed-source isn't inherently bad, but open-source is easier to audit.
- **Suspicious reviews** — Comments like "This completely changed my workflow!" with no specifics can be fake.

**Green flags:**

- **Well-known maintainers** — Microsoft, Red Hat, GitHub, and other established companies have good track records.
- **Active GitHub repository** — The extension has documentation and recent commits.
- **Specific use case** — The description clearly explains what it does and why you'd want it.
- **Honest reviews** — People mention specific features and maybe even small quirks.

### Understanding Dependency Chains

This one's a little meta, but it matters. Some extensions depend on other extensions to work. Here's a concrete example:

You install the **GitLens** extension (helps you understand git history). GitLens uses the **Git** extension (built into VS Code) to function. The Git extension needs git to be installed on your computer. So the dependency chain is:

```
GitLens Extension
  ↓ depends on
Git Extension (built-in)
  ↓ depends on
git (system software on your computer)
```

If any part of that chain is missing, GitLens won't work. Most of the time, VS Code and extension maintainers handle this gracefully—they'll tell you what's missing and how to fix it. But it's good to know that extensions aren't magical; they're tools that build on other tools.

---

## Part 3: Customizing Your Environment

This is where VS Code stops being "just the default editor" and becomes *your* editor.

### Themes: Make Your Editor Feel Like Home

A theme changes how VS Code looks. It includes colors for syntax highlighting, the UI background, icons, and more. Sounds superficial, but here's the thing: you stare at this all day. If the colors make you happy and the contrast is comfortable, you'll actually want to use the editor more.

**How to browse themes:**

1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)
2. Type "color theme" and hit Enter
3. Use the arrow keys to preview different themes in real-time
4. Press Enter to select one

**Popular themes to try:**

- **Dracula** — Dark background, vibrant colors (lots of people love this one)
- **One Dark Pro** — Based on Atom's popular theme, easy on the eyes
- **Nord** — Arctic-inspired, cool tones, very calming
- **Solarized Light** — If you like light backgrounds with good contrast
- **GitHub Light / GitHub Dark** — Minimal, clean, matches GitHub's design

**Pro tip:** Your mood might change the theme you prefer. Some people like dark themes at night and light themes during the day. You can switch themes as often as you want—no one's keeping score.

### Keybindings: Building Your Muscle Memory

A keybinding is a keyboard shortcut. You've already been using them—`Ctrl+S` to save, `Ctrl+Z` to undo. But VS Code lets you customize almost every keybinding.

Why would you do this?

- You're coming from a different editor (Vim, Sublime, Emacs) and you want to use the keybindings you already know
- There's an action you do constantly and the current shortcut is awkward
- You want to create a personal shortcut for something you always forget

**How to customize keybindings:**

1. Open the Command Palette
2. Type "keybindings" and select "Preferences: Open Keyboard Shortcuts"
3. You'll see a list of every command and its current shortcut
4. Click the pencil icon next to a command to edit its keybinding
5. Press your desired key combination and press Enter

Alternatively, if you're comfortable with JSON, you can edit the keybindings.json file directly:

```
Ctrl+K Ctrl+S → Search field → type "open keybindings json" → select the option
```

> **Reality check:** You don't need to rebind everything. Choose 3-5 actions you use constantly and optimize those. The rest can stay default.

### Workspace Settings vs. User Settings

This trips people up. VS Code lets you set preferences at two levels:

**User Settings** — These apply to every project you open. If you set the font size to 14pt at the user level, every project starts with 14pt font.

**Workspace Settings** — These apply only to the current project folder. Maybe this project needs a different indentation style or a linter configured a certain way.

When you open Settings (`Ctrl+,`), you'll see tabs at the top: **User** and **Workspace**. If there's no workspace yet, you'll only see User.

**Here's how they interact:**

If you set something at both levels, the workspace setting *wins*. So if your user setting says "font size: 14" but your workspace setting says "font size: 12", you'll see 12pt font in that workspace.

**Why does this matter?**

- **Consistency within a project** — Everyone on your team can work with the same settings if they're in the workspace config
- **Flexibility across projects** — Maybe one project uses 2-space indentation and another uses 4-space. Each project can have its own settings.
- **Git-friendly** — Workspace settings live in a `.vscode` folder inside your project, so you can commit them and share them with your team

---

## Part 4: Debugging Without Fear

Here's the mental block most people have about debugging: they think it's this magical process that only "real programmers" do. It's not. Debugging is just careful inspection. You're looking at your code while it runs and asking, "Wait, why is this variable this value?"

### What Debugging Actually Is

When your code doesn't do what you expected, debugging is how you figure out why. Tools like VS Code's debugger let you:

- **Pause** your code at a specific line
- **Step through** line by line and watch variables change
- **Inspect** what any variable contains right now
- **Jump** to specific conditions (break when `x` equals 5)

It's like having a very patient friend who will pause your program and say, "Look, here's exactly what's in memory right now."

### A Practical Example

Let's say you have this Python script:

```python
def greet(name, times):
    for i in range(times):
        print(f"Hello, {name}!")
    return f"Greeted {name} {times} times"

result = greet("Alice", 3)
print(result)
```

You run it and something's wrong. You think, "Hmm, let me see what's happening inside that loop."

**Here's how you debug it:**

1. Click on the line number area next to the `for i in range(times):` line—a red dot appears. That's a **breakpoint**.
2. Open the Run & Debug panel (`Ctrl+Shift+D`)
3. Click the green "Start Debugging" arrow
4. Your code runs until it hits that breakpoint—then it pauses
5. Now you can see:
   - The value of `name` ("Alice")
   - The value of `times` (3)
   - What `i` is on this iteration
6. Click the "Step Over" button (arrow over a line) to run the next line and watch variables update
7. Click the "Step Into" button to dive deeper into function calls

The Debug Console at the bottom shows you output and lets you evaluate expressions. Type `name` in the console and hit Enter—it'll tell you exactly what that variable contains.

> **Mental model:** Think of the debugger as a time machine for your code. You can move forward one line at a time, inspect anything you want, and rewind (by stopping and restarting). It's your superpower for understanding why your code does what it does.

### When Debugging Feels Powerful

The real payoff is when you've spent 20 minutes staring at code thinking "I have no idea why this isn't working"—and then you run the debugger, pause at the right moment, and you see it immediately. The variable is `None` when you expected a string. The list is empty when you thought it had items. Suddenly it's obvious.

That "aha!" moment? That's debugging working.

---

## Part 5: Terminal Workflows

Your terminal is the command line—where you type commands instead of clicking. VS Code has an integrated terminal (`Ctrl+`` ` or View → Terminal).

### Different Shells (You Probably Have One)

- **Bash** — Very common, been around forever, widely compatible
- **Zsh** — Mac's new default, feels like bash but with nicer defaults
- **PowerShell** — Windows default, very powerful (and sometimes confusing)
- **Fish** — Newer, user-friendly, not as common

You probably already have a default shell. You don't need to change it unless you have a reason. They all do basically the same thing—run commands.

### Useful Commands for Builders

Here are commands you'll probably use:

```bash
# Navigate directories
cd path/to/folder     # Change to a folder
pwd                   # Show current folder
ls                    # List files in current folder
cd ..                 # Go up one level

# Create and edit files
touch filename.txt    # Create a blank file
mkdir foldername      # Create a new folder
cat filename.txt      # Display file contents

# Work with git
git status            # See what's changed
git add .             # Stage all changes
git commit -m "msg"   # Create a commit
git push              # Send to remote repo

# Run your project
npm install           # Install JavaScript dependencies
npm start             # Start your project
python script.py      # Run a Python script

# Check what's running
ps aux                # List running processes
top                   # Monitor CPU and memory (press 'q' to exit)
```

### Terminal Tips & Tricks

**Tab completion** — Type part of a command and hit Tab. The terminal will auto-complete it. Type `cd Doc` and hit Tab—it becomes `cd Documents/`.

**History** — Hit the up arrow to run the previous command again. Keep hitting up to scroll through older commands.

**Ctrl+C** — Stops a running program. Your code hanging? Ctrl+C to kill it.

**Clear screen** — Type `clear` (or `cls` on Windows) to clear the terminal and start fresh.

**Piping** — Chain commands together with `|`. Example: `ls | grep ".txt"` shows only `.txt` files in the current folder.

> **Reality check:** The terminal can feel intimidating at first, but it's just an alternate way of telling your computer what to do. There's no magic—just text commands and responses.

---

## Part 6: Common "Wait, What Just Happened?" Moments

Let's normalize confusion. Here are real situations that make everyone go "???" and how to handle them.

### Scenario 1: "VS Code is asking me about git, but I just want to edit a file"

**What's happening:** VS Code noticed you're in a git repository (a `.git` folder exists). It's trying to be helpful by showing you git status, tracking changes, and suggesting commits.

**Why it feels annoying:** If you just want to tweak a file without git involvement, the git prompts feel intrusive.

**How to fix it:**
- **Ignore it** — The prompts will go away once you click past them.
- **Disable git integration** — Go to Settings (`Ctrl+,`), search for "git enabled", and toggle it off.
- **Just use it** — Many people find VS Code's git integration incredibly useful once they try it.

### Scenario 2: "My terminal is in the wrong folder"

**What's happening:** The integrated terminal defaults to your project root, but sometimes you're working in a subfolder and the terminal doesn't follow.

**How to fix it:**
- Right-click in the Explorer panel on the folder you want, select "Open in Integrated Terminal"
- Or type `cd path/to/folder` manually in the terminal
- Or use `pwd` to see where you are, then navigate

### Scenario 3: "I installed an extension and now everything looks weird"

**What's happening:** Extensions can change the appearance, behavior, or keybindings of VS Code. One extension might conflict with another, or it might just not be compatible with your settings.

**How to fix it:**
1. Disable the extension temporarily — Go to Extensions, find it, and click "Disable"
2. Restart VS Code
3. If things look normal again, the extension was the problem
4. You can either uninstall it, check for updates, or see if you can configure it differently

### Scenario 4: "Why is my code red-squiggled if it works fine?"

**What's happening:** VS Code (or an extension) is running a linter—a tool that checks your code for potential issues. The red squiggle means the linter found something it thinks is wrong.

**How to fix it:**
- **Check the linter's message** — Hover over the squiggle to see what it thinks is wrong
- **Fix it** — Usually the linter is right, and fixing the issue makes your code better
- **Disable it** — If the linter is too strict or you disagree, you can disable it in Settings
- **Configure it** — Many linters let you adjust their rules

### Scenario 5: "I can't find my file in the Explorer"

**What's happening:** The Explorer panel is showing your project folder structure, but maybe the file is hidden (starts with a dot, like `.gitignore`), or you're looking in the wrong folder.

**How to fix it:**
- Use `Ctrl+P` to open the Quick File Picker and search for the file by name
- Check the breadcrumb at the top of the editor to see which file you're actually in
- Look for a "Show Hidden Files" option in the Explorer menu (three dots)

---

## Open Q&A

These are questions we hear a lot, and they deserve real answers.

### Q: Why does VS Code keep asking me about git?

**A:** VS Code detected that you're in a git repository and is trying to help you use git integration. If you don't want to use git, you can disable it in Settings (search "git enabled" and toggle off). But honestly? Most developers find it useful. Try it for a bit before turning it off.

### Q: How do I know if an extension is safe to install?

**A:** Check:
1. **Downloads** — 50k+ usually means it's been vetted by many people
2. **Last update** — Within the last month is good
3. **Publisher** — Look at who made it. Microsoft, GitHub, Red Hat—those are trustworthy
4. **Permissions** — Click "Extension Settings" to see what it can access
5. **GitHub** — Search for the extension name on GitHub. If there's an active repo with real code, that's a good sign

When in doubt, read the reviews. People will mention if something feels sketchy.

### Q: Can I use Claude Code in VS Code?

**A:** Yes! Claude Code (Anthropic's official CLI) works with VS Code. You can install it and use it as an integrated tool. Check the Claude Code documentation for installation and setup instructions. It pairs really well with VS Code's built-in git integration.

### Q: What's the difference between user and workspace settings?

**A:** **User settings** apply everywhere. **Workspace settings** apply only to the current project folder. If you set something at both levels, the workspace setting wins. This lets you have personalized defaults globally, but also customize each project. For example, you might have 2-space indentation globally (user setting) but 4-space indentation for a specific project (workspace setting).

### Q: Why is my terminal acting weird?

**A:** Could be several things:
- **Wrong working directory** — Use `pwd` to see where you are. Use `cd` to navigate.
- **Wrong shell** — You might be in PowerShell but expecting bash syntax. Look at the terminal label.
- **Environment variables** — Your shell might not have the right PATH set up. Ask your team or look at the project's `.env` file.
- **Process still running** — Press `Ctrl+C` to stop it, then try again.

Start with `pwd` to orient yourself. That's step one.

### Q: Do I need to memorize all these keybindings?

**A:** No. Learn the ones you use most. `Ctrl+S` (save) is universal. `Ctrl+Shift+P` (Command Palette) is your best friend because you can search for anything. Everything else? Look it up. You'll naturally memorize the shortcuts you use daily.

### Q: What should I do if I accidentally delete something?

**A:** First, don't panic. If you deleted a file in VS Code:
- **Undo** — `Ctrl+Z` will bring it back (if you haven't closed the file)
- **Recycle Bin** — It's probably still in your computer's trash
- **Git** — If it was committed, you can recover it from git history

If you deleted something in the terminal (especially with `rm`), it's trickier. This is why version control matters.

### Q: How do I make VS Code faster?

**A:** 
- **Disable extensions you don't use** — Extensions run in the background, even if you're not using them
- **Close other applications** — If your computer is low on memory, everything slows down
- **Update VS Code** — New versions often have performance fixes
- **Check for indexing** — When you first open a large project, VS Code indexes the files. Wait for this to finish before judging speed

### Q: Can I use VS Code for multiple programming languages?

**A:** Yes. Install the appropriate extensions (Python, JavaScript, Go, Rust, etc.) and VS Code will handle syntax highlighting, debugging, and linting for each language. You can even have multiple files open at once in different languages—VS Code adapts to each one.

---

## Practice & Next Steps

Okay, so you've got all this information. What now?

### Hands-On Practice

Pick one thing from today's session and spend 15 minutes with it:

- **Try a new theme** — Browse the marketplace, preview 3-4 themes, pick one you like
- **Create a custom keybinding** — Think of an action you do often and create a shortcut for it
- **Debug a script** — Take a simple script, set a breakpoint, and step through it line by line
- **Configure workspace settings** — Create a `.vscode/settings.json` file in a project folder and customize indentation or font size
- **Explore an extension** — Install an extension (start with something popular like GitLens or Thunder Client), spend time with it, decide if you like it

The goal isn't to be perfect. It's to get comfortable experimenting. VS Code almost never breaks from changing settings or installing extensions—you can always undo.

### Keep Asking Questions

This is not the end of your learning. Seriously. VS Code is *designed* to be customizable, which means there's always something new to discover. When you encounter something confusing:

- Search for it in the documentation (Help → Welcome has great resources)
- Check the VS Code settings (command Palette → Preferences)
- Ask in communities (Stack Overflow, Reddit's r/learnprogramming)
- Come back to office hours with the question

We're here for follow-ups. There are no dumb questions.

### Recommended Resources

- **VS Code documentation** — Seriously good. Help → Welcome, or browse code.visualstudio.com
- **vscode-101-final.md** — The full workshop guide has deeper dives on everything we touched today
- **GitHub's VS Code guide** — Useful for git-specific workflows
- **YouTube tutorials** — Search "VS Code [whatever you're interested in]" and you'll find walkthroughs

### Celebrate the Small Wins

You're using a powerful editor. You know how to customize it. You understand how to debug and can install extensions thoughtfully. That's legit progress. A few months ago, maybe this all seemed overwhelming. Now you're here asking good questions and experimenting. That's how builders think.

---

## Final Thought

VS Code is a tool. Like any tool, it gets easier the more you use it. You won't memorize everything today or tomorrow. You'll learn as you need it, gradually building your own customized environment that works exactly the way you think.

The best part? That's the whole point. It's *your* editor.

Keep building. Keep asking questions. We're rooting for you.
