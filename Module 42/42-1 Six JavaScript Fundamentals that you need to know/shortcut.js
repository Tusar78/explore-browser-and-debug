let isActive = false;
const showUser = () => console.log('Display User');
const hideUser = () => console.log('Hide User');
// isActive ? showUser() : hideUser();
isActive && showUser()
isActive || hideUser()

isActive = !isActive;
console.log(isActive);