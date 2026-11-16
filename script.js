document.addEventListener('DOMContentLoaded', () => {
  const defaultTitle = document.title;
  const updateTabState = (isActive) => {
    document.title = isActive ? defaultTitle : "Güle Güle!";
  };
  document.addEventListener('visibilitychange', () => updateTabState(!document.hidden));
  window.addEventListener('focus', () => updateTabState(true));
  window.addEventListener('blur', () => updateTabState(false));
  updateTabState(!document.hidden);
});
