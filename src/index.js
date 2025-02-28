function info() {
    const m = new Map();
    m.set('name', 'ajs-homeworks.platforms');
    m.set('version', '1.0.0');
    return m;
  }
  
  module.exports = {
    default: {
      info
    }
};