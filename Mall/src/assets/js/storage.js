export function localsave(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function localfetch(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function sessionsave(key, data) {
  sessionStorage.setItem(key, JSON.stringify(data));
}

export function sessionfetch(key) {
  // console.log('sessionfetch')
  return JSON.parse(sessionStorage.getItem(key));
}

export function sessionremove(key) {
  sessionStorage.removeItem(key);
}

export function localremove(key) {
  localStorage.removeItem(key);
}
