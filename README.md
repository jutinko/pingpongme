# pingpongme

A simple office pingpong break pairer.

## Server

To start deploying your own instance of pingpongme server, after cloning the 
repo you need 
 - `node`: You can do `brew install node`
 - `npm`: Package manager for `node`, it is installed with `node`

To build the packages, simply do `npm install` in the repo.

To start the server, you can then do `node server.js`.

## Clients
We wrote both a web client and a `CLI` client for the tool.

### Web
Straightforward to use.

### CLI
The `CLI` for the tool. In case you don't like using browsers. 
To install the tool, do `go build -o pingpongme` in `pingpongme/pingpongmecli/`. 
To set the environment variable for the remote server, do 
```export PINGPONGMEURL=pingpongme.cfapps.pez.pivotal.io```
To find a pair, you can run `./pingpongme --name Zhou --location London`.
To play ping pong with yourself, you can then run `./pingpongme --name Zhou2 --location London`.
Enjoy!
