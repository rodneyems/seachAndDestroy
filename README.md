# Search and Destroy
> This software aims to help in the search and replace in files(xml) of matrix Clear-Com.

Developed in JS, this application was created to help minimize the chance of errors and automate the search and replace of the config files ".ccr" and ".keysets" of ClearCom matrix. This activity previously done manually and lasted for houers, as each exchange was made online and individually, always with errors (about 200 changes but could reach 600 or more)

This software provides:
1. Automate search and replace keywords or phases;
2. Log of changes;
3. Graphic interface;
4. Analysis of multiple files;
5. Can use for other file extensions;

![](/public/imgs/software.png)

## Installation
 
To use this application you need:

- Node, Npm or Yarn
    - Download [Node] (https://nodejs.org/en/download/) includes NPM.
    - How to install [Yarn] (https://classic.yarnpkg.com/en/docs/install).
- Run the commands below
    - In the files folder:
      - For NPM "npm install" or in Yarn "yarn"
      (Wait for the dependencies to be installed)
      - For NPM "npm start" or Yarn "yarn start"
- Done! You can access this application at "http: // localhost: 5000".


## Usage example

### Step 1.

Select your spreadsheet with the changes (the first column must have the keyword for Search and the second column the keyword that is a substitute)

The spreedsheet example:

![](/public/imgs/spreedsheetexample.png)

Select your spreedsheet:
![](/public/imgs/spreedSheet.png)

### Step 2.
Select yout files with changes:
![](/public/imgs/files.png)

### Step 3.
Click in "Upload":
![](/public/imgs/upload.png)

### Step 4.
Wait your download .zip with log and MOD_FILES
![](/public/imgs/download.png)
![](/public/imgs/yourFiles.png)

### Step 5.
Check the log:

![](/public/imgs/log.png)

In this example, almost 500 changes were made.

## Release History

* 1.0.0
    * Software Done

## Meta

Rodney Martins – rodney.martins@live.com

[https://github.com/rodneyems](https://github.com/rodneyems)

## NOTES

I had already developed this application in Python a long time ago, but only I was able to use it, as there was no graphical interface and it was necessary to repeat the code for each file.

Sorry for grammatical errors, I don't speak English very well.

Thank's
