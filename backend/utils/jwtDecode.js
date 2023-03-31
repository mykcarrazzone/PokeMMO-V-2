export function decodeJWT(token) {
  // Séparer le jeton en trois parties en utilisant le délimiteur "."
  const parts = token.split(".");
  // Vérifier qu'il y a bien trois parties
  if (parts.length !== 3) {
    throw new Error("JWT format is invalid");
  }
  // Décoder la première partie (header) en utilisant la méthode atob()
  const header = JSON.parse(atob(parts[0]));
  // Décoder la deuxième partie (payload) en utilisant la méthode atob()
  const payload = JSON.parse(atob(parts[1]));
  // Retourner l'identifiant de l'utilisateur
  return payload._id;
}
