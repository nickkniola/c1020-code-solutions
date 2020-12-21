function graduate(credential) {
  return function newFunc(fullName) {
    return console.log(`${fullName}, ${credential}`);
  };
}
const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

medicalSchool('Nicholas Kniola');
lawSchool('Nicholas Kniola');
