(function (window) {
  'use strict'
  const {document, dom, polyfill, mediaCommonAction} = window
  const {fullscreen} = polyfill
  mediaCommonAction('embed', 'application/x-shockwave-flash', '../media/swf', {onOpenMedia})

  const toggleFullscreenMode = element =>
    fullscreen.element() ? fullscreen.exit() : fullscreen.request(element)

  function onOpenMedia ({mediaContainer, controller}) {
    const fullscreenButton = document.createElement('button')
    dom.newFirstChild(controller, fullscreenButton)
    fullscreenButton.addEventListener('click', () => toggleFullscreenMode(mediaContainer), false)
    fullscreenButton.classList.add('fullscreen-button')
  }
}).call(window, window)
