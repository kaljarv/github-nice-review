const KEY = 'hide-comment-rows';
const root = document.documentElement;
if (localStorage.getItem(KEY) === '1') root.classList.add(KEY);

chrome.runtime.onMessage.addListener((msg) => {
  if (msg !== 'toggle') return;
  const on = root.classList.toggle(KEY);
  localStorage.setItem(KEY, on ? '1' : '0');
});
