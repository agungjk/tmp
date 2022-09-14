(win => {
  window.close = () => {
    console.log('window.close');

    win.dispatchEvent(
      new CustomEvent(
        'meetric-auth-close',
        { detail: { success: true } }
      )
    );
  }
})(window, document);
