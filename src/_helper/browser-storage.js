export class BrowserStorageService {

    getSession(key) {
      const data = window.sessionStorage.getItem(key);
      if (data) {
        return JSON.parse(data);
      } else {
        return null;
      }
    }
  
    setSession(key, value) {
      const data = value === undefined ? "" : JSON.stringify(value);
      window.sessionStorage.setItem(key, data);
    }
  
    removeSession(key) {
      window.sessionStorage.removeItem(key);
    }
  
    removeAllSessions() {
      for (const key in window.sessionStorage) {
        if (window.sessionStorage.hasOwnProperty(key)) {
          this.removeSession(key);
        }
      }
    }
  
    getLocal(key) {
      const data = window.localStorage.getItem(key);
      if (data) {
        return JSON.parse(data);
      } else {
        return null;
      }
    }
  
    setLocal(key, value) {
      const data = value === undefined ? "" : JSON.stringify(value);
      window.localStorage.setItem(key, data);
    }
  
    removeLocal(key) {
      window.localStorage.removeItem(key);
    }
  
    removeAllLocals() {
      for (const key in window.localStorage) {
        if (window.localStorage.hasOwnProperty(key)) {
          this.removeLocal(key);
        }
      }
    }
  }