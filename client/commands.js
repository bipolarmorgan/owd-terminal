export default ({ store }) => {
  return {
    'console': function() {
      store.dispatch('core/windows/windowCreate', 'WindowConsole');
    }
  }
}