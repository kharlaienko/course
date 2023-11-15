export default function (to, from, next) {
   let user;
   try {
      user = JSON.parse(localStorage.getItem('user'));
   } catch {
      user = null
   }

   if (user && user?.email && user?.name) {
      next();
   } else {
      next({ name: 'login' });
   }
}