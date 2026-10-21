// Write your code here!
// Function to display posts in the DOM
function displayPosts(posts) {
  const postList = document.getElementById('post-list');

  posts.forEach(post => {
    // Create elements
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    // Add content from the post object
    h1.textContent = post.title;
    p.textContent = post.body;

    // Append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);

    // Append li to the ul element
    postList.appendChild(li);
  });
}

// Async function to fetch posts from JSONPlaceholder API
async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    
    // Call displayPosts after fetching
    displayPosts(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// Trigger the async fetch function
fetchPosts();