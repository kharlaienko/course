export default (value) => {
   if (typeof value !== 'object') return false

   return Object.keys(value).length > 0
}