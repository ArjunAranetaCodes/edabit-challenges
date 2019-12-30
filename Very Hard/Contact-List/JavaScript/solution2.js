function sortContacts(names, sort) {
  let sortedAsc = (names || []).sort((nameA, nameB) =>
    nameA.split(" ")[1] < nameB.split(" ")[1] ? -1 : 1
  );
  return sort == "ASC" ? sortedAsc : sortedAsc.reverse();
}