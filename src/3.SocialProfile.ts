// socialProfile.
type SocialProfile = {
  name: string;
  age: string;
  city: string;
};

const formatSocialProfile = (user: SocialProfile): string => {
  return `${user.name}, is ${user.age} years old and lives in ${user.city}`;
};

console.log(
  formatSocialProfile({ name: 'Alice', age: '30', city: 'New York' }),
); // returns 'Alice, is 30 years old and lives in New York'
