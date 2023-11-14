chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'splitScreen') {
    // Wrap existing body content in a container
    let originalBody = document.body.innerHTML
    document.body.innerHTML = `<div id="original-body-content" style="height: calc(100vh - 50%); overflow: auto; padding-bottom: 50vh;">${originalBody}</div>`

    // Create and add the video container
    let videoContainer = document.createElement('div')
    videoContainer.style.cssText =
      'height: 50vh; width: 100%; position: fixed; bottom: 0; left: 0; z-index: 1000;'

    let video = document.createElement('video')
    video.src = chrome.runtime.getURL('assets/video.mp4')
    video.style.cssText = 'width: 100%; height: 100%; object-fit: cover;'
    video.controls = false
    video.autoplay = true
    video.loop = true

    videoContainer.appendChild(video)
    document.body.appendChild(videoContainer)
  }
})
