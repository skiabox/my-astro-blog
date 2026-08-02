---
title: 'JavaScript Promise.all Explained'
excerpt: 'Use Promise.all to wait for independent asynchronous operations and handle their results together.'
publishDate: '2024-01-08T16:41:51'
updatedDate: '2024-06-18T19:50:25'
tags: ['JavaScript', 'Promises']
heroImage: '/images/blog/javascript-promises-all.jpeg'
legacyUrl: 'https://devcanvas.org/javascript-promise-all-explained/'
---

Let's look at an example with two functions that retrieve posts and users from the sample endpoints at [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

```js
// function1 returns a promise that resolves with posts data
async function function1() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

// function2 returns a promise that resolves with users data
async function function2() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}
```

The two functions access the network independently and each returns a promise. Because we need both the posts and their users, we can wait for both requests with `Promise.all`:

```js
async function handleFunctions() {
  try {
    const [posts, users] = await Promise.all([function1(), function2()]);
    console.log('Posts:', posts);
    console.log('Users:', users);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

handleFunctions();
```
