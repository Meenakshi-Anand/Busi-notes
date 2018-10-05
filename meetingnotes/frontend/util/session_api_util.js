export const googleLogin = (user) => (
 $.ajax({
   method: 'GET',
   url: 'api/auth/:provider/callback',
 })
);

export const logout = () => (
 $.ajax({
   method: 'DELETE',
   url: 'api/signout',
 })
);
