# GitHub Repo Cleanup Script

This repository contains a script that allows you to delete multiple repositories from your GitHub account using a Personal Access Token (PAT) and the GitHub API. The script reads a list of repository names from a file and deletes them one by one.

## Prerequisites

1. **Node.js**: Ensure that you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).

2. **GitHub Personal Access Token**: You need to generate a Personal Access Token (PAT) from GitHub with `repo` scope. Follow [this guide](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) to generate a token.

3. **Environment Setup**: Store your GitHub PAT in an environment variable or in a `.env` file.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/repo-cleanup-script.git
   cd repo-cleanup-script
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Set up the environment variable**:
   - **For Windows (Command Prompt)**:
     ```bash
     set ACCESS_TOKEN=your_personal_access_token
     ```

   - **For Mac/Linux (Bash/Zsh)**:
     ```bash
     export ACCESS_TOKEN=your_personal_access_token
     ```

4. **OR** create a `.env` file in the root of the project and add your token:

   ```env
   ACCESS_TOKEN=your_personal_access_token
   ```

## Usage

1. Create a file named `repos-to-delete.txt` in the root directory of the repository.
   
2. In the `repos-to-delete.txt` file, list the repositories you want to delete, one per line:

   ```
   repo1
   repo2
   repo3
   ```

3. Run the script to delete the repositories:

   ```bash
   node delete-repos.js
   ```

   The script will attempt to delete each repository listed in `repos-to-delete.txt` and will log the success or failure for each.

## Important Notes

- This script permanently deletes repositories, so **use with caution**. Make sure the repository names are correct before running the script.
- Ensure that your token has the `repo` scope, which allows access to private repositories and the ability to delete them.
- If you're using a `.env` file, **do not** commit it to version control. Add `.env` to your `.gitignore` file to keep it secure.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request with your changes. Please ensure that your code is well-documented and follows the existing style of the project.

---
