export const googleLogin = () => (
 $.ajax({
   method: 'POST',
   url: 'api/sessions',
 })
);

export const logout = () => (
 $.ajax({
   method: 'DELETE',
   url: 'api/signout',
 })
);
