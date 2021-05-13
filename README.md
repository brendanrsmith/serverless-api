# LAB - AWS: API, Dynamo and Lambda

## Project: REST API

### Author: Brendan Smith

### Links and Resources

<!-- - [ci/cd](https://github.com/brendigler/cloud-server/actions) -->
<!-- - [GUI-deployed server url](http://cloudservergui-env.eba-f2hj4qkp.us-west-2.elasticbeanstalk.com/) -->
<!-- - [CLI-deployed server url](http://cloud-server-cli-env.eba-exhas8mc.us-west-2.elasticbeanstalk.com/) -->
<!-- - [Pull Request](https://github.com/brendigler/cloud-server/pull/2) -->

### Processes

CLI app creation:

- `eb init` - Initializes your folder as an Elastic Beanstalk application
- Choose your region (`us-west-2`)
- Choose [`Create new Application`]
- Answer the other questions as appropriate
- Choose `Node.js` at the correct version
- `eb create my-environment-name` - Create an "environment" for your app to reside in
- set up [Beanstalk Deploy](https://github.com/marketplace/actions/beanstalk-deploy) on gitHub actions
- A-C-P as normal, changes will automatically deploy to EB

<!-- ### Setup
<!-- 
#### `.env` requirements

<!-- - `PORT` - Port Number
- `MONGODB_URI` - MongoDB URI -->

<!-- #### How to initialize/run your application -->
<!-- 
- clone to local repo
- `npm install`
- `npm start` -->

<!-- #### Tests -->

<!-- - Run tests with `npm test` -->

<!-- #### UML / Application Wiring Diagram -->

<!-- ![UML](UML.jpg) -->