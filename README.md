# snowpack
How to install Snowpack

### Step 1 
- Create a new GitHub repo
- Click on the green 'New' button

<img src="github-repo-new.png" width="350">

- Give the repo a meaning full name 
- Select Public
- Select Add a README.md file
- Select Add .gitignore and choose Node from the drop down
- Click on the green 'Create repository' button

<img src="github-repo-create.png" width="750">

### Step 2

- Click the green 'Code' button
- Copy the https github url

```
  https://github.com/dpwit/snowpack-install.git
```

<img src="github-repo-copy.png" width="350">

### Step 3

- Open Terminal
- cd into Documents
- git clone https://github.com/dpwit/snowpack-install.git

```
  git clone https://github.com/dpwit/snowpack-install.git
```
<img src="github-repo-clone.png" width="750">

- cd into snowpack-install

<img src="terminal-cd-snowpack-install.png" width="750">

### Snowpack is a package (similar to Webpack) installed via npm. 

- Create a package.json file in the project directory. 
- Run this command in the project to create a package.json file:

```
npm init --y
```
<img src="terminal-npm-init.png" width="750">

- Install Snowpack as a dev dependancy

```
npm install snowpack --save-dev 
```

- Classic

<img src="terminal-snowpack-error.png" width="750">


