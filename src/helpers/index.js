export const makeRelationship = (userRelationshipStatus) => {
  switch (userRelationshipStatus) {
    case 1:
      return "Single";
    case 2:
      return "Married";
    default:
      return "not specified";
  }
};

export const compareByCreationDate = (posts) =>
  posts.sort((post1, post2) => new Date(post2.createdAt) - new Date(post1.createdAt));
