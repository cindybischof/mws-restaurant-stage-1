/* SET UP SERVICE WORKER */
if('serviceWorker' in navigator) {
  navigator.serviceWorker
  .register('/sw.js')
  .catch(function(err) {
    console.error(err);
  });
}
