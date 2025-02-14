import fetch from 'node-fetch';
import fs from 'fs';
import dotenv from 'dotenv'
dotenv.config()

// GitHub username and token
const username = 'akmurmu82';  // Replace with your GitHub username
const token = process.env.ACCESS_TOKEN;  // Replace with your personal access token
console.log(username, token)

// Function to read repo names from a file
function readReposFromFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return data.split('\n').map(repo => repo.trim()).filter(repo => repo); // Clean and filter empty lines
  } catch (error) {
    console.error('Error reading the file:', error);
    return [];
  }
}

// List of repositories to delete from file
const reposToDelete = readReposFromFile('repos-to-delete.txt');

// Function to delete repositories
async function deleteRepos() {
  for (const repo of reposToDelete) {
    try {
      const response = await fetch(`https://api.github.com/repos/${username}/${repo}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json',
        },
      });

      if (response.status === 204) {
        console.log(`Successfully deleted: ${repo}`);
      } else {
        console.log(`Failed to delete: ${repo}, Status: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error deleting repo ${repo}:`, error);
    }
  }
}

// Call the delete function
deleteRepos();
