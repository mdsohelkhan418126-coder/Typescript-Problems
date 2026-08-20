// permision

type Role = 'admin' | 'user' | 'guest';

const checkPermission = (role: Role): string => {
if (role === 'admin'|| role === 'user') return 'Access granted';
return 'Access denied';
}

console.log(checkPermission('admin')); // returns 'Access granted'
console.log(checkPermission('user')); // returns 'Access granted'
console.log(checkPermission('guest')); // returns 'Access denied'