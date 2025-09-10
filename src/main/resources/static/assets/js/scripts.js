/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

  function stopVideo() {
    const iframe = document.getElementById('videoIframe');
    iframe.src = iframe.src;
  }


  

  const videoModal = document.getElementById('videoModal');
   const iframe = document.getElementById('videoIframe');

   // Load video when modal opens
   videoModal.addEventListener('show.bs.modal', function (event) {
     const button = event.relatedTarget;
     const videoUrl = button.getAttribute('data-video');
     if (!videoUrl) return;
     const sep = videoUrl.includes('?') ? '&' : '?';
     iframe.src = videoUrl + sep + 'autoplay=1';
   });

   // Stop video when modal closes
   videoModal.addEventListener('hidden.bs.modal', function () {
     iframe.src = '';
   });