export  const expression = {
  nameUser: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{6,12}$/, // 4 a 12 digitos.
  email: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,3}$/,
  address: /^.{6,40}$/, // Letras, numeros, guion
  phoneNumber: /^\d{7,14}$/, // 7 a 14 numeros.
  cardNumber: /^\d{16,16}$/, // 16 a 16 numeros.
  securityCode: /^\d{3,3}$/, // 3 a 3 numeros.
};