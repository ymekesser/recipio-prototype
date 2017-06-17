#!/bin/bash

# start the development environment in cmdr.
code .;
http-server ./dist -new_console:b;
npm run buildwatch -new_console:b;
