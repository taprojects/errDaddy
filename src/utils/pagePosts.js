function pagePosts(pageNum, perPage, allPosts) {
  const start = (pageNum - 1) * perPage;
  const end = start + (perPage);
  return allPosts.slice(start, end);
}

export default pagePosts;
