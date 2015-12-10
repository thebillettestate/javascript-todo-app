# JavaScript Todo app
Helps keep track of the things you have left to do.

## Dependencies
- Text editor (Atom, Sublime).
- [SASS](http://sass-lang.com/).
- [http-server](https://www.npmjs.com/package/http-server) (optional).

## Development
- Fork repository.

- Clone repository from your fork:
```
git clone https://github.com/[YOUR USER NAME]/javascript-todo-app.git
```

- `cd` into project directory:

```
cd javascript-todo-app
```

- Main JavaScript file is in `assets/javascript/script.js`. Main markup is in `index.html`.

- Open `index.html` in a browser or serve the project locally at `http://localhost:8080/` with [http-server](https://www.npmjs.com/package/http-server).

### Compiling assets
- `cd` into `assets` directory:
```
cd assets
```

- Run sass watcher:

```
sass --watch sass:css
```

Assets will compile from the source files in the `assets/sass` directory into the `assets/css` directory.
