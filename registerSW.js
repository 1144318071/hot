if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/hot/sw.js', { scope: '/hot/' })})}