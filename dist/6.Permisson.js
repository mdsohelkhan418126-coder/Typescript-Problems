"use strict";
// permision
Object.defineProperty(exports, "__esModule", { value: true });
const checkPermission = (role) => {
    if (role === 'admin' || role === 'user')
        return 'Access granted';
    return 'Access denied';
};
console.log(checkPermission('admin')); // returns 'Access granted'
console.log(checkPermission('user')); // returns 'Access granted'
console.log(checkPermission('guest')); // returns 'Access denied'
//# sourceMappingURL=6.Permisson.js.map