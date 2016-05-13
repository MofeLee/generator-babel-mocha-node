'use strict';
var chalk = require('chalk');
var fse = require('fs-extra');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);
    this.argument('appname', {
      type: String,
      required: true,
      desc: 'The name of the application'
    });
    this.destinationRoot(this.destinationPath(this.appname));
  },

  prompting: function () {
    this.log(yosay(
      'Welcome to the exceptional ' + chalk.red('generator-babel-mocha-node') + ' generator!'
    ));
    var prompts = [{
      name: 'packageName',
      message: 'What is the package name?',
      default: this.appname
    }, {
      name: 'description',
      message: 'What is a short description for this project?'
    }, {
      name: 'authorName',
      message: 'What is the author\'s name?',
      default: this.user.git.name()
    }, {
      name: 'authorEmail',
      message: 'What is the author\'s email?',
      default: this.user.git.email()
    }];
    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var done = this.async();
    fse.copy(this.templatePath(), this.destinationPath(), {
      filter: function (itemPath) {
        var basename = path.basename(itemPath);
        return basename !== 'package.json';
      }
    }, function (err) {
      if (err) {
        console.error(err);
        done(err);
      } else {
        this.fs.copyTpl(
          this.templatePath('package.json'),
          this.destinationPath('package.json'),
          {
            packageName: this.props.packageName,
            description: this.props.description,
            authorName: this.props.authorName,
            authorEmail: this.props.authorEmail
          }
        );
        done();
      }
    }.bind(this));
  },

  install: function () {
    this.installDependencies();
  }
});
