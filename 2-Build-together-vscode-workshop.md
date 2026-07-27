# VS Code for Builders: Follow-Along Workshop Guide

Welcome to the VS Code for Builders workshop! This 55-minute session is designed to demystify one of the most powerful tools for writing code and building projects. Whether you're just starting your coding journey or looking to get more comfortable with VS Code, you're in exactly the right place. We're going to build confidence together, one feature at a time, and by the end of this workshop, you'll feel much more at home in your code editor.

---

## What We Are Doing Today

By the end of this workshop, you'll be able to:

- **Clone a repository** from GitHub directly into VS Code and understand what that actually means
- **Navigate the VS Code interface** with confidence, knowing where to find the tools you need
- **Install and use extensions** to customize VS Code for your workflow
- **Edit code and use the terminal** to run your projects
- **Integrate Claude Code** to get AI assistance while you build


---

## Workshop Agenda

Here's what we'll cover in the next 55 minutes:

1. How to Clone a Git Repository
2. How to Open a New Window
3. What Is VS Code?
4. Welcome Page Guidance
5. A Word About Feeling Overwhelmed
6. VS Code Interface Tour (8 minutes)
7. Installing Your First Extension
8. Your First File & Editing Workflow
9. Using the Terminal
10. Claude Code Integration
11. Wrap-Up & Next Steps

Let's get started!

---

## Part 1: How to Clone a Git Repository

Cloning is one of those words that sounds more complicated than it actually is. When you clone a repository, you're not just downloading files—you're copying an entire project folder, including all its files, folders, and the complete history of changes (called Git history). It's like downloading a project and all its backup versions at once.

> **Mental Model for Cloning:** Think of a repository like a folder on your computer. Cloning is the action of copying that entire folder—with all its contents and history—from GitHub (where it lives online) to your local machine (where you can work on it). Once cloned, you have your own copy to edit, experiment with, and contribute to.

### The Repository We're Using

For this workshop, we're going to clone the official Women Defining AI repository:

**Repository Link:** https://github.com/WomenDefiningAI/VScode-Intro

This repository is designed specifically for learning VS Code, so it has clear examples and a great README file to get us started.

### How to Clone Using VS Code

This is the recommended workflow because it keeps everything integrated into your code editor. Here are the nine steps:

**Step 1: Navigate to the Repository on GitHub**

Open your web browser and go to https://github.com/WomenDefiningAI/VScode-Intro. You'll see the repository page with files, folders, and a green button.

**Step 2: Copy the Repository URL**

Look for the green **Code** button on the right side of the repository page. Click it, and you'll see options for HTTPS and SSH. For beginners, we recommend using HTTPS (it's the default). Click **Copy to clipboard** to copy the full URL (it should look like `https://github.com/WomenDefiningAI/VScode-Intro.git`).

**Step 3: Return to VS Code**

Switch back to VS Code. If this is your first time opening it, you'll see the Welcome tab.

**Step 4: Open a New Window (if needed)**

If you only have one VS Code window open with the Welcome page, you may want to open a fresh window for this repository. Here's how:

- Click **File** → **New Window**
- A brand new VS Code window will open

**Step 5: Access the Clone Repository Command**

In your VS Code window, open the **Command Palette** by pressing:
- **Ctrl+Shift+P** (Windows or Linux)
- **Cmd+Shift+P** (Mac)

The Command Palette is a search box that appears at the top of your editor. It's your universal remote for VS Code—you can type commands and VS Code finds them for you.

**Step 6: Search for "Clone"**

In the Command Palette, type `clone repository` and wait for suggestions to appear. You'll see **Git: Clone** in the dropdown. Click it or press **Enter** to select it.

**Step 7: Paste the Repository URL**

A text input field will appear. This is where you paste the URL you copied from GitHub:

- Press **Ctrl+V** (Windows/Linux) or **Cmd+V** (Mac) to paste
- Press **Enter** to proceed

**Step 8: Create and Select a Destination Folder**

When your file browser opens (Finder on Mac, File Explorer on Windows), VS Code is asking you where to save this repository. Here's what to do:

- 8.1. Look for a button or option to create a new folder
- 8.2. Create a new folder called **Build Together** (this will hold your cloned repository)
- 8.3. Double-click the **Build Together** folder to open it (you should now be inside this folder)
- 8.4. Click the blue **Select as Repository Destination** button (or similar button depending on your OS)

**Step 9: Open the Repository**

VS Code will ask you: "Would you like to open the cloned repository?" Click the blue **Open** button. The VScode-Intro repository will now open in your current VS Code window, and you'll see all the project files listed in the Explorer panel on the left side.

Congratulations! You've successfully cloned a repository. This is a core skill for any builder working with VS Code and GitHub.

---

## Part 2: How to Open a New Window

You've already done this in the previous section, but let's make sure you understand it fully because you'll use this skill often.

### Opening a Fresh VS Code Window

VS Code makes it easy to work with multiple projects at once by letting you open multiple windows. There are two quick ways to do this:

**Method 1: Using the Menu**

Click **File** → **New Window**. A fresh VS Code window opens immediately. You can use this for a different project, a fresh workspace, or just to keep things organized.

**Method 2: Using a Keyboard Shortcut**

Press **Ctrl+Shift+N** (Windows/Linux) or **Cmd+Shift+N** (Mac). This is faster once you memorize it, and you'll find yourself using it frequently.

### Opening Your Cloned Repository

Once you've cloned the VScode-Intro repository, it should open automatically in a window. But if you need to open it again (or if you closed the window), here's how:

1. Click **File** → **Open Folder**
2. A file browser opens
3. Navigate to the folder where you saved the repository (remember, we created a **Build Together** folder and cloned the repo inside it)
4. Select the **VScode-Intro** folder
5. Click **Open**

The repository will now open in your current VS Code window.

### Understanding the File Structure

Once the repository is open, take a moment to look at the Explorer panel on the left. You'll see:

- **Folders** (shown with folder icons) that organize your project
- **Files** (shown with document icons) that contain code and documentation
- A **README.md** file (marked with a markdown icon), which is a great place to start learning about any project

The beauty of VS Code is that the Explorer shows you the entire project structure at a glance. Click on any file to open it in the editor area (the large space in the center), and double-click folder names to expand or collapse them and see what's inside.

**Pro tip:** If you have a large project, use **Ctrl+P** (Windows/Linux) or **Cmd+P** (Mac) to search for files by name. This is much faster than scrolling through the file tree.

---

## Part 3: What Is VS Code?

Let's take a step back and answer a simple question: What exactly is VS Code?

**VS Code is a code editor with extensions.** That's the simple version. It's not a full-blown IDE (Integrated Development Environment) like Visual Studio or Xcode—it's lighter and faster. But it's incredibly powerful because of its extension marketplace, which lets you add features for languages, frameworks, and tools you need.

> **Mental Model:** Think of VS Code like a workshop. The core workshop is the editor itself—where you write and edit code. Extensions are like specialized tools you can hang on the wall: a hammer for web development, a saw for Python, a drill for debugging. You start with the basics and add tools as you need them.

### Why VS Code Matters for Builders

VS Code has become the standard code editor for builders, developers, and technical teams because it's:

- **Lightweight** — It opens instantly and doesn't drain your computer's resources
- **Extensible** — The extension marketplace has tools for nearly any language or framework
- **Cross-platform** — It works identically on Windows, Mac, and Linux
- **Integrated** — VS Code has built-in Git support, terminal access, and debugging tools
- **Free and open-source** — No licenses, no fees, no hidden costs

### How VS Code Connects to Claude Code, Lovable, and Cursor

You might have heard about Claude Code, Lovable, or Cursor. These are AI-powered code assistants and editors that use or integrate with VS Code:

- **Claude Code** is an AI assistant that integrates directly into VS Code (which you'll install in Part 7), helping you write, debug, and understand code without leaving your editor
- **Lovable** is an AI tool that generates code interfaces and projects, often outputting code that works seamlessly in VS Code
- **Cursor** is an alternative code editor built on VS Code's foundation, specifically designed with AI assistance built into its core

All of these tools recognize VS Code's importance in the development workflow. This tells you something important: VS Code is industry standard. When you learn VS Code, you're learning a skill that will serve you across multiple tools and platforms. You're learning the language of code editors, and that language is spoken everywhere in the tech world.

### Watch Along: Same Prompt, Three Interfaces

To see how different AI coding assistants look and feel, I'll run the exact same prompt in three places:

> create a sample file of around 20 lines of code

- **Terminal** — using Claude Code in the integrated terminal
- **Chat** — using VS Code's built-in Chat panel (Copilot Chat)
- **Claude Code Sidebar** — using the Claude Code extension's sidebar view

**What to notice:**
- How the response is displayed (plain terminal text vs. chat bubble vs. sidebar panel)
- How you review and accept the generated file in each case
- Which interface feels most natural to you as a first-time user

### Why Builders Choose VS Code Over Other Editors

You might wonder: why VS Code and not Sublime Text, Vim, Emacs, or other editors? Here are the reasons VS Code has become the go-to choice for builders:

| Feature | Why It Matters |
|---------|---------------|
| **Extension Ecosystem** | Thousands of extensions let you customize it for any language or framework. Need support for Python, React, Docker, or AWS? There's an extension. |
| **Built-in Git Integration** | Version control is integrated into the editor, so you can commit, view diffs, and manage branches without ever leaving VS Code. |
| **Integrated Terminal** | Open a terminal with one keystroke and run your project, execute scripts, or manage your files without switching applications. |
| **Performance** | VS Code is fast. It opens instantly and doesn't lag even with large projects. This might not sound important until you've used a slow editor. |
| **Community & Documentation** | With millions of users, you can find tutorials, extensions, and solutions for almost any problem. |
| **Free & Open Source** | No license fees, no paywalls, no hidden costs. The code is open source, so transparency is built in. |

Understanding these strengths helps you appreciate VS Code's design decisions and makes it easier to learn why features are organized the way they are.

---

## Part 4: Welcome Page Guidance

When you first open VS Code or clone a repository, you'll see the **Welcome** tab. This is a special page designed to help new users learn about VS Code's features.

### What's on the Welcome Page?

The Welcome page includes:

- **Shortcuts** for common tasks like opening files, creating new files, and running code
- **Tips and tricks** that help you work faster
- **Links to documentation** for when you need more detailed help
- **Suggested extensions** relevant to different languages and workflows

### Should You Keep It Open or Close It?

You have two options:

1. **Leave it open** (recommended for beginners) — The Welcome page is a learning resource. Having it open means you can refer back to shortcuts and tips whenever you need them.
2. **Close it** — Click the X on the Welcome tab to close it. You can always reopen it later by clicking **Help** → **Welcome**.

> **Learning Insight:** The Welcome page is one of VS Code's best-kept secrets. It's not just flashy marketing—it genuinely contains shortcuts and workflows that will save you time and frustration. When you're just starting out, keeping it open while you work is like having a helpful guide at your side. Don't rush to close it. Once you're comfortable with VS Code, you'll naturally stop needing it.

---

## Part 5: A Word About Feeling Overwhelmed

If you're looking at VS Code right now and feeling a bit overwhelmed—that's completely normal. You're not alone, and it's okay.

The first time most people open VS Code, they see a dense interface packed with panels, buttons, icons, and menus. There's the sidebar on the left, the editor in the center, a status bar at the bottom, and a command palette waiting to be discovered. It can feel like a lot. And here's the honest truth: it is a lot. But you don't need to learn it all at once.

### It's Okay to Take Your Time

> **Remember this:** You don't need to master VS Code today. Small steps, repeated over time, will make you a power user. Every expert developer you know started exactly where you are right now—looking at this interface and thinking, "What does all of this do?"

I learned VS Code seven years ago, and I still remember how overwhelmed I felt. I was staring at all these buttons and menus, and my brain kept saying, "This is too much. I don't understand this." I felt like everyone else knew what they were doing, and I was the only one confused. Most everyone feels this way at first.

### Reframing What VS Code Actually Is

Here's something that helped me: once I reframed what VS Code actually was, everything became simpler.

> **VS Code is essentially a fancy text editor with AI chat integrated. Everything else—the panels, the shortcuts, the extensions—are just features that make it easier to write and manage code. You don't need them all at once.**

Think about it: at its core, VS Code is a place where you write text (code). Everything else is optional. Want to use the terminal? Great. Want to install extensions? Wonderful. Want to use version control? Excellent. But you can ignore all of it and just write code in the center area, and you'll be fine.

Start small. Learn one feature at a time. Master the basics before exploring advanced features. This is not a race.

### Let's Explore the Repository Together

Right now, the VScode-Intro repository you just cloned has a README file, which is a perfect, low-stakes way to explore how files work in VS Code. You can click on the README, read it, and get your bearings without worrying about breaking anything. There's nothing here that will crash if you click the wrong button. This is the perfect place to build confidence.

---

## Part 6: VS Code Interface Tour (8 minutes)

Let's take a structured tour of the VS Code interface. You don't need to memorize everything—just get familiar with where things are.

### The Sidebar (Left Side)

The sidebar contains several icons stacked vertically on the far left. Each icon opens a different panel. Think of the sidebar as your command center—it's where you navigate your project, search, manage version control, and customize your editor. Let's look at each one:

| Icon | Name | What It Does | When You'll Use It |
|------|------|-------------|-------------------|
| **File/folder icon** | Explorer | Shows all files and folders in your project. Click to open files and navigate your project structure. | Every day. This is your primary way to browse and open files. |
| **Magnifying glass** | Search | Find text within your project. Incredibly useful for locating specific code, functions, or comments across multiple files. | When you're looking for something specific or want to refactor code across your entire project. |
| **Branching lines** | Source Control | Shows your Git status (which files you've changed). This is where you commit changes, view diffs, and manage your project's version history. | When you want to save your work to Git or review what you've changed. |
| **Blocks/squares** | Extensions | Browse and install extensions from the VS Code marketplace. This is how you customize VS Code for your specific needs. | When you want to add new functionality or tools to your editor. |
| **Play button** | Run and Debug | Configure and run your code with debugging tools. Set breakpoints, inspect variables, and step through your code line by line. | When testing your code or tracking down bugs. |

Click any of these icons to switch to that panel. The sidebar adapts based on what you're doing, so the active panel changes based on your current task.

> **Branching note:** In a shared repository, it’s best to create branches for your work so your changes stay organized and don’t interfere with others. In personal repos, many people may still push directly to main, so this can stay lightweight. In VS Code, you can click the branch name in the lower-left corner to open the branch menu and create a branch.

**Pro tip:** You can also hide the sidebar temporarily by pressing **Ctrl+B** (Windows/Linux) or **Cmd+B** (Mac) to give yourself more space to view your code. Press it again to bring the sidebar back.

### The Editor Area (Center)

This is where your code lives. When you open a file, it appears here as a tab. You can have multiple files open at once, each in its own tab. Click any tab to switch between files. Single-click opens a file temporarily; double-click keeps it open permanently.

### The Terminal (Bottom)

The terminal is a command-line interface built into VS Code. You can open it by pressing **Ctrl+`** (that's control and backtick, the key above Tab) or by clicking **Terminal** → **New Terminal** in the menu. The terminal lets you run commands, execute scripts, and interact with your project without leaving VS Code.

### The Command Palette (Universal Remote)

Press **Ctrl+Shift+P** (Windows/Linux) or **Cmd+Shift+P** (Mac) and a search box appears at the top of your editor. This is the Command Palette, and it's one of VS Code's most powerful features. You can type any command, and VS Code will find it for you. Want to format code? Type "format". Want to change the color scheme? Type "theme". Want to split your editor? Type "split". This is your universal remote for VS Code.

> **Key Insight:** The Command Palette is your friend. When you don't know how to do something in VS Code, open the Command Palette and start typing what you want to do. VS Code will almost always find a command for it. This habit alone will make you dramatically more productive.

### The Status Bar (Bottom Right)

At the very bottom of VS Code, you'll see a status bar with information about your current file. It shows things like:

- Your current line and column number
- The file encoding
- Whether you're in normal mode or insert mode
- The language of the file you're editing

You don't need to worry about this right now, but it's helpful context as you get more comfortable.

### Live Demo Suggestions

As we go through the workshop, I'll be demonstrating these features in action. Watch how I:

- Click the Explorer icon and navigate files
- Use the Command Palette to quickly find features
- Open the terminal and run commands
- Use the Search panel to find text across multiple files

Pay attention to how often I use the Command Palette—it's the shortcut I use most frequently, and it's the one that will speed up your workflow the most.

---

## Part 7: Installing Your First Extension

Extensions are the superpower of VS Code. They let you customize your editor for the specific languages, frameworks, and tools you use. Let's install your first extension: Claude Code.

### Finding the Extensions Panel

Click the **Extensions** icon in the sidebar. It looks like four squares arranged in a pattern. The Extensions panel will open on the left side.

### How to Install an Extension (3 Steps)

1. **Search:** In the search box at the top of the Extensions panel, type the name of the extension you want (we'll search for "Claude Code")
2. **Click Install:** When you find the extension in the list, click the blue **Install** button
3. **Wait for Completion:** VS Code will download and install the extension. You'll see a loading indicator, and once it's done, the button will change to **Uninstall** (which means it's successfully installed)

### Installing Claude Code Step by Step

Claude Code is an AI assistant that integrates directly into VS Code. It helps you write code, debug issues, explain code, and ask questions while you work. Here's how to install it:

1. Click the **Extensions** icon in the sidebar
2. In the search box, type `Claude Code`
3. Look for the official Claude Code extension (it will have the Anthropic logo)
4. Click the blue **Install** button
5. Wait for the installation to complete (this usually takes 30 seconds to a minute)
6. Once installed, you'll see a new icon in the sidebar that looks like Claude Code's logo

### What to Expect After Installation

After installing Claude Code:

- You'll see a new icon in your sidebar (usually at the bottom of the icon list)
- Click it to open the Claude Code panel
- The first time you use it, you may need to log in with your Anthropic account
- Once authenticated, you can ask Claude Code questions, request code changes, and get AI-powered help directly in your editor

### Reassurance: Extensions Are Removable

If you ever install an extension and decide you don't like it, no problem. Just:

1. Go to the Extensions panel
2. Find the extension in your installed list
3. Click the **Uninstall** button
4. The extension is gone

There's no permanent commitment. Think of extensions like browser add-ons—you can install, try them out, and remove them freely. Experiment without fear.

---

## Part 8: Your First File & Editing Workflow

Now that we've explored VS Code and installed an extension, let's do what VS Code does best: edit code.

### Creating a New File

1. Click the **Explorer** icon in the sidebar to open the file tree
2. Right-click in the empty space below the files
3. Click **New File** from the context menu
4. Type a filename (for example, `hello.txt` or `test.js`)
5. Press **Enter**

A new file appears in the Explorer and opens in the editor. You can now start typing.

### Writing and Editing

The editor works like any text editor:

- Click where you want to type and start typing
- Use **Backspace** to delete and **Delete** key to remove characters to the right
- Use **Ctrl+Z** (Windows/Linux) or **Cmd+Z** (Mac) to undo your last change
- Use **Ctrl+Y** (Windows/Linux) or **Cmd+Shift+Z** (Mac) to redo an undone change
- Use **Ctrl+A** (Windows/Linux) or **Cmd+A** (Mac) to select all text in the file

### Saving Your Work

VS Code can auto-save files, but it's also good to know how to save manually:

- Press **Ctrl+S** (Windows/Linux) or **Cmd+S** (Mac) to save
- You can also click **File** → **Save**

**Quick tip:** If your file has unsaved changes, VS Code shows a white dot next to the filename in the tab. Once you save, the dot disappears.

### Quick Tips for Faster Editing

- **Multi-line selection:** Click and drag to select multiple lines, then type to replace them all at once
- **Line duplication:** Select a line and press **Shift+Alt+Down** (Windows/Linux) or **Shift+Option+Down** (Mac) to duplicate it. Press **Ctrl+Shift+K** (Windows/Linux) or **Cmd+Shift+K** (Mac) to delete the entire line instead.
- **Comment/uncomment:** Select code and press **Ctrl+/** (Windows/Linux) or **Cmd+/** (Mac) to toggle comments
- **Auto-indent/format:** Select code and press **Shift+Alt+F** (Windows/Linux) or **Shift+Option+F** (Mac) to auto-format your code

These shortcuts will save you time and make editing more enjoyable.

---

## Part 9: Using the Terminal

The terminal is built right into VS Code, and learning to use it opens up new possibilities for your workflow. Don't worry—the terminal is just another way to talk to your computer.

### Opening the Terminal

Press **Ctrl+`** (that's control and the backtick key, usually located above Tab). A terminal panel opens at the bottom of VS Code. You can also click **Terminal** → **New Terminal** in the menu.

### Basic Commands to Know

Here are some commands you'll use frequently:

| Command | What It Does | Example |
|---------|-------------|---------|
| **ls** (Mac/Linux) or **dir** (Windows) | List files in current folder | `ls` shows all files in the current directory |
| **cd** | Change directory (move between folders) | `cd Desktop` moves you to the Desktop folder |
| **pwd** | Print working directory (shows where you are) | `pwd` shows your current folder path |
| **mkdir** | Make a new directory (create a folder) | `mkdir my-project` creates a new folder |
| **cat** | Display file contents | `cat README.md` shows the contents of README.md |

### Running Your Project

If your project is a web app, Node.js project, or Python script, you can run it from the terminal. For example:

- **Node.js project:** Type `npm start` or `node app.js`
- **Python script:** Type `python script.py`
- **Web server:** Type `npm run dev` (depends on your project setup)

The terminal will show any output, errors, or messages from your running program.

### Understanding Terminal Navigation

When you open the terminal, you start in a default directory (folder). Think of the terminal like being in a specific room in a very large building. The `pwd` command tells you which room you're in, and the `cd` command moves you to a different room. This is especially useful when you're working on a project and need to run commands from that project's folder.

For example:

```bash
pwd
/Users/username/VScode-Intro

cd Desktop
cd Build\ Together
pwd
/Users/username/Desktop/Build Together
```

In this example, we first checked where we are (`pwd`), then moved to the Desktop, then moved to the Build Together folder. The `\` before the space in "Build Together" tells the terminal to treat the space as part of the folder name, not as a separator.

Once you're in the right folder, you can run commands specific to that project. This is why terminal navigation skills are so valuable—they let you manage your entire project from one place.

### Reassurance: The Terminal Is Just Text Input

> **Remember:** The terminal is just another way to talk to your computer. It looks intimidating at first, but it's really just typing commands and reading responses. Every developer uses the terminal. Every single one. And everyone was nervous about it at first. That's completely normal. Start small, type simple commands, and gradually get more comfortable. You will not break anything by typing commands. The terminal is forgiving, and mistakes are learning opportunities.

Here's a simple exercise to build confidence: Open the terminal, type `ls` or `dir` (depending on your OS), and press Enter. You'll see a list of files in your current folder. That's it. You just talked to your computer and it responded. That's all the terminal ever does—you type, the computer responds. Over time, you'll use more complex commands, but the principle is always the same.

One more thing: if you ever type something wrong, just press Ctrl+C to cancel the command, and you can try again. There's no penalty for mistakes.

---

## Part 10: Claude Code Integration

Claude Code is an AI assistant designed to help you write, understand, and debug code. It integrates directly into VS Code, making it easy to get help without leaving your editor.

### What Claude Code Does

Claude Code can help you with:

- **Writing code:** Ask it to write a function, generate boilerplate code, or complete code patterns
- **Debugging:** Paste an error message and ask what it means or how to fix it
- **Understanding code:** Ask it to explain what existing code does
- **Refactoring:** Ask it to rewrite code to be cleaner, faster, or more readable
- **Answering questions:** Ask anything about programming, frameworks, or best practices

### How to Open Claude Code

1. Click the Claude Code icon in your sidebar (it should be at the bottom of the icon list if you installed it in Part 7)
2. The Claude Code panel opens on the left side
3. You'll see a chat interface where you can type messages to Claude Code

### Making Your First Request

Let's make a simple request to get comfortable with Claude Code:

1. Open the Claude Code panel
2. In the message input at the bottom, type a simple request, like: "Write a function that says hello"
3. Press **Enter** or click the send button
4. Claude Code will respond with code and an explanation

Try it! There are no wrong requests. Claude Code is designed to help, not judge.

### Review & Testing Workflow

Once Claude Code suggests code changes:

1. **Review the suggestion:** Read through the code it generates. Does it make sense? Does it do what you asked?
2. **Test it:** If Claude Code modifies your actual file, run your project and see if it works
3. **Ask for changes:** If something isn't right, ask Claude Code to modify it. You can say things like "Make that function more efficient" or "Add error handling to that code"
4. **Iterate:** Keep refining until you're happy with the result

This workflow of request → review → test → refine is at the heart of working with AI coding assistants.

### Real-World Example: Using Claude Code to Write a Function

Let's walk through a realistic scenario. Imagine you want to write a function that converts temperature from Celsius to Fahrenheit. Here's how you'd use Claude Code:

**Your request to Claude Code:**
"Write a JavaScript function that converts Celsius to Fahrenheit and includes error handling"

**Claude Code's response:**
```javascript
function celsiusToFahrenheit(celsius) {
  if (typeof celsius !== 'number') {
    throw new Error('Input must be a number');
  }
  return (celsius * 9/5) + 32;
}
```

**What you do next:**
1. Review the code—does it make sense? Yes, it follows the formula and checks for valid input.
2. Create a new file called `temperature.js` and paste the code
3. Test it in the terminal: `node temperature.js`
4. If you want to improve it, ask Claude Code: "Add a function to convert Fahrenheit back to Celsius and test both"

Claude Code will expand the code with both functions, test cases, and explanations. You review, test, iterate, and repeat until you have exactly what you need.

This workflow—request → review → test → iterate—is incredibly powerful because it combines the speed and knowledge of AI with your human judgment and testing.

### Demo Walkthrough

During the workshop, I'll demonstrate Claude Code in action. Watch as I:

- Ask Claude Code to write a simple function
- Review the code it generates and explain why it works
- Ask for modifications to make it better or more efficient
- Test the code in the terminal to ensure it works
- Show you how Claude Code can also explain existing code
- Demonstrate asking Claude Code for help when you're stuck on a problem

Don't hesitate to ask questions during this demo. This is a new tool for many of you, and questions are absolutely welcome. There's no such thing as a dumb question when learning new tools.

### Tips for Working Effectively With Claude Code

- **Be specific:** Instead of "write a function," say "write a function that validates email addresses and returns true or false"
- **Provide context:** If you're using a specific framework like React or Vue, mention it so Claude Code generates appropriate code
- **Test everything:** Always run the code Claude Code generates to make sure it works with your project
- **Ask for explanations:** If you don't understand something Claude Code wrote, ask it to explain it step by step
- **Iterate:** If the code isn't quite right, ask Claude Code to modify it rather than starting over

The more specific you are with your requests, and the more you practice using Claude Code, the better results you'll get.

---

## Part 11: Wrap-Up & Next Steps

We've covered a lot of ground in 55 minutes. Let's recap what you've learned and talk about your next steps.

### What You Accomplished Today

You learned how to:

- **Clone a repository** from GitHub using VS Code—a foundational skill for any builder
- **Navigate VS Code's interface** and understand what each panel does
- **Install extensions** and customize your editor (we specifically installed Claude Code)
- **Edit files, save your work, and use keyboard shortcuts** to work faster
- **Use the terminal** to run commands and interact with your projects
- **Integrate Claude Code** to get AI assistance while you code

These aren't small accomplishments. Together, these skills form the foundation of modern code editing and development.

### Encourage Exploring On Your Own

The best way to learn VS Code is to use it. Open it, create files, experiment with extensions, try out keyboard shortcuts, and don't be afraid to make mistakes. Every expert you admire spent hours doing exactly this—experimenting, learning, occasionally breaking things, and figuring it out.

You have permission to explore, to be messy, and to learn at your own pace. There's no deadline for mastery.

### Comprehensive Reference Guide

For more detailed information, documentation, and advanced topics, check out the comprehensive guide:

**File:** `4-Vscode-101-final.md`

This guide goes deeper into topics like:

- Advanced terminal usage
- Git workflows and version control
- Debugging and testing in VS Code
- Writing custom extensions
- Performance optimization

Keep this reference bookmarked for when you're ready to dive deeper.

### Optional: Advanced Topics Teaser

Once you're comfortable with the basics, VS Code has incredible advanced features:

- **Debugging:** Set breakpoints, step through code, and inspect variables while your code runs
- **Version control integration:** Make commits, view diffs, and manage branches without leaving VS Code
- **Workspace settings:** Customize VS Code for each project with project-specific settings
- **Custom snippets:** Create shortcuts for code patterns you use frequently
- **Remote development:** Edit files on remote servers as if they were local

These are all within reach once you've internalized the fundamentals.

### Final Mantra

As you leave this workshop and head back to your code editor, remember this:

> VS Code is a tool that you own. It's not here to intimidate you or judge you. It's here to make your coding life easier. You don't need to master it all at once. Take it one feature at a time. Ask questions. Make mistakes. Celebrate small wins. And remember: every developer you know—the ones you admire, the ones building incredible things—all started exactly where you are right now. You've got this. Keep building. 🚀

---

**Thank you for joining this workshop.** We built something together today, and I'm genuinely excited to see what you create next. Welcome to the community of builders.
