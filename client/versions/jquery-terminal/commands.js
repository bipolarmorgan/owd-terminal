export default ({ store }) => {
  return {
    'terminal': function() {
      store.dispatch('core/windows/windowCreate', 'WindowConsole');
    }
  }
}