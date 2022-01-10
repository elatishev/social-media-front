export const makeRelationship = (userRelationshipStatus) => {
  switch (userRelationshipStatus) {
    case userRelationshipStatus === 1:
      return "Single";
    case userRelationshipStatus === 2:
      return "Married";
    default:
      return "not specified";
  }
};
