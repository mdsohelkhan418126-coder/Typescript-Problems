"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatSocialProfile = (user) => {
    return `${user.name}, is ${user.age} years old and lives in ${user.city}`;
};
console.log(formatSocialProfile({ name: 'Alice', age: '30', city: 'New York' })); // returns 'Alice, is 30 years old and lives in New York'
//# sourceMappingURL=3.SocialProfile.js.map