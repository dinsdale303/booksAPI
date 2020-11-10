module.exports = (fullName) => {
  if (typeof fullName !== 'string') return 'Error';
  const [firstName, lastName, notWantedWord] = fullName.split(' ');
  if (!firstName || !lastName) return 'Error';
  if (notWantedWord) return 'Error';
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
};
