function tagify(tags) {
  const tagList = tags
    .split(' ')
    .map(tag => {
      if(tag[0] === '#') return tag.slice(1).toLowerCase();
      return tag.toLowerCase();
    });
  return tagList;
}

export default tagify;
