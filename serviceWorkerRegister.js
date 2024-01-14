if ('serviceWorker' in navigator) {
  console.log('location: ', window.location)
  window.addEventListener('load', function () {
    navigator.serviceWorker.register(window.location.pathname + "serviceWorker.js").then(function (registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      console.error('ServiceWorker registration failed: ', err);
    });
  });
}