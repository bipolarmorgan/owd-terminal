# Terminal module for OWD Client
> A terminal for your Open Web Desktop client

<p>
    <a href="https://github.com/owdproject/owd-client/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg" /></a>
    <a href="https://github.com/owdproject/owd-client"><img src="https://img.shields.io/badge/owd-client-3A9CB6" /></a>
    <a href="https://github.com/topics/owd-modules"><img src="https://img.shields.io/badge/owd-modules-888" /></a>
    <a href="https://hacklover.net/patreon"><img src="https://img.shields.io/badge/become-a%20patron-orange" alt="Become a Patron" /></a>
    <a href="https://hacklover.net/discord"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Join us on Discord" /></a>
</p>

## Demo
[Try it out](https://hacklover.net), just click on the console icon on the left menu

## Overview
It's based on [jQuery Terminal Emulator](https://github.com/jcubic/jquery.terminal) because I use this library from the beginning.
Open Web Desktop is designed to support multiple terminals, other libraries like xterm and vue-terminal will be implemented later.

## Quick install
- Copy the content of the `client` module folder into `owd-client/src/modules/terminal`
- Install each module dependency manually with `npm install <dependency>`
- Add the reference of this module into `owd-client/config/modules.json`

## Add commands
This feature isn't provided by OWD Terminal but is already present in Open Web Desktop.
You can add commands to any module adding `"commands": true` in `module.json` and providing a `commands.js` file like this:

```js
export default ({store, terminal}) => {
  return {
    'test': function (...args) {  
      this.echo('it works bruh')
    }
  }
})
```

## License
This project is released under the [MIT License](LICENSE)