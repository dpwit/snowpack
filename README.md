Courtesy of https://www.snowpack.dev/

# What is Snowpack?

Snowpack is a lightning-fast frontend build tool. It is an alternative to heavier, more complex bundlers like webpack. Snowpack uses JavaScript's native module system (known as ESM) to avoid unnecessary work and stay fast no matter how big your project grows.

### How to install Snowpack

### Step 1 
- Create a new GitHub repo
- Click on the green 'New' button

<img src="images/github-repo-new.png" width="350">

- Give the repo a meaning full name 
- Select Public
- Select Add a README.md file
- Select Add .gitignore and choose Node from the drop down
- Click on the green 'Create repository' button

<img src="images/github-repo-create.png" width="750">

### Step 2

- Click the green 'Code' button
- Copy the https github url

```
  https://github.com/dpwit/snowpack-install.git
```

<img src="images/github-repo-copy.png" width="350">

### Step 3

- Open Terminal (Mac) Command prompt (Windows)
- cd into Documents
- git clone https://github.com/dpwit/snowpack-install.git

```
  git clone https://github.com/dpwit/snowpack-install.git
```
<img src="images/github-repo-clone.png" width="750">

- cd into snowpack-install

<img src="images/terminal-cd-snowpack-install.png" width="750">

### Snowpack is a package (similar to Webpack) installed via npm. 

- Create a package.json file in the project directory. 
- Run this command in the project to create a package.json file:

```
npm init --y
```
<img src="images/terminal-npm-init.png" width="750">

- Install Snowpack as a dev dependancy

```
npm install snowpack --save-dev 
```

- Classic, I can't install Snowpack due to security policy (Zscaler)

<img src="images/terminal-snowpack-error.png" width="750">

- Success on my personal Windows laptop

<img src="images/command-prompt-npm-snowpack-install.png" width="750">

- Package json file showing snowpack as dev dependancy

<img src="images/package-json-file-snowpack.png" width="750">




