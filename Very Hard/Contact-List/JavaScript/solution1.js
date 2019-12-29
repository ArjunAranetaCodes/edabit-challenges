const sortContacts = (names, sort) => {
  if (!names) return [];

  return names.sort((a, b) => {
    const lastA = a.split(' ')[1];
    const lastB = b.split(' ')[1];

    return sort === 'ASC'
      ? lastA.localeCompare(lastB)
      : lastB.localeCompare(lastA);
  });
};