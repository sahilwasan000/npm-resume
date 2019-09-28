
//#!/usr/bin/env node
"use strict";

var inquirer = require("inquirer");
var chalk = require("chalk");

var response = chalk.bold.cyan;

var resume = require("./resume");

var resumePrompts = {
  type: "list",
  name: "resumeOptions",
  message: " ",
  choices: [...Object.keys(resume), "Exit"]
};

function main() {
  console.log(response("Hello,My name is Sahil Wasan and Welcome to my Resume"));
  resumeHandler();
}

function resumeHandler() {
  inquirer.prompt(resumePrompts).then(answer => {
    if (answer.resumeOptions == "Exit") {
      return;
    }

    var option = answer.resumeOptions;
    console.log(response("--------------------------------------"));
    resume[`${option}`].forEach(info => {
      console.log(response("|   => " + info));
    });
    console.log(response("--------------------------------------"));
    // console.log(resume[`${option}`]);
    inquirer
      .prompt({
        type: "list",
        name: "exitBack",
        message: "  Go back or Exit?",
        choices: ["Back", "Exit"]
      })
      .then(choice => {
        if (choice.exitBack == "Back") {
          resumeHandler();
        } else {
          return;
        }
      });
  });
}

main();
