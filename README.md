Grunt Email Template
=========================

A grunt email template with livereload and github pages deployment.

---

## What is this?

GET (for short) is a simple email template with grunt worfklow setup. Just do the usual `npm install` and `grunt server` and you should be ready to go.
* Livereload
* Deploy to Github Pages
* This template is responsive; inline css, baby!

Checkout this [demo](http://jancantor.github.io/grunt-email-template/).

#### Livereload
Livereload monitors changes in your dev environment so as soon as you save a file, your browser automatically refreshes. Ain't that cool?

#### Deploy to Github Pages
Easily deploy your work to github pages by writing 'grunt build' in your Terminal. Ain't that easy?

#### Responsive
Who needs media queries when you can do inline css? Say whaaaaa!?

---

## Intructions

This project uses a Grunt workflow. To get started, download the necessary dependencies.

`npm install`


#### Making Changes
All source files are located in the `_src/` directory. You should only be making changes here.
To view your changes, fire up the local server...

`grunt server`

...and head to `locahost:9000`. Grunt will compile your html and assets files, refreshing your browser automatically.


#### Deploying
The Grunt tasks will compile a deployment-ready version of the project for you.
Be sure to replace the remote with your own repo in the ```Gruntfile.js```. When you're ready to deply, just type:

`grunt build`

This exports to the `_build/` directory, as well as push it to github pages, creating a new branch `gh-pages`.