# Dropsolid HTML Skeleton
Based on [HTML5 Boilerplate](https://html5boilerplate.com/)

## Deployment
### Scaffolding files
When deploying an environment for this project on Dropsolid Platform, all files inside .dropsolid/scaffold/<environment>
will be copied to the root of the project. This allows you to have variations per environment, for example
a different robots.txt and .htaccess for dev, staging, live, etc.

By default, this repository contains a copy of the project's normal .htaccess and robots.txt inside each environment's
scaffolding folder. Feel free to alter these to fit your needs, for example to not allow any scraping on non-live
environments.

As an example:  
> When deploying staging, .dropsolid/scaffold/staging/docroot/.htaccess will replace docroot/.htaccess.

#### A note on .dropsolid/scaffold/__templates
These files will be copied to .dropsolid/scaffold/<environment> when creating a new environment on Dropsolid Platform.  
As you can see, .htaccess and robots.txt are present in that folder, ensuring each environment will have those
files ready to manipulate after creation.

### Token replacement
During deployment via Dropsolid Platform, and during environment creation, a select few tokens (to be expanded in
future) will be replaced in all **scaffolded** files.

#### Supported tokens:
- [[ project_name ]]
- [[ environment_name ]]

The above tokens will be replaced with their corresponding value during deploy.

As an example:
> given a project called 'myhtmlproject' and a scaffolded file called main.js containing  
> `console.log('[[ project_name ]]');`  
> then that will become  
> `console.log('myhtmlproject');`  
> after deploy  

### platform.deploy.yml
The developer is now in control of what happens during a deploy. In this file, you can exclude certain files and folders from being rsynced and execute any number of shell scripts after the system has completed the rsync.

We plan on adding more functionality in the future, feel free to give us some feedback on desired features.

#### File structure
```
sync:
  exclude:
    - path/to/file/from/project/root.txt
    - folder/name/from/project/root
tasks:
  after_sync:
    -
      type: shell
      script: "path/to/shell/script/from/project.root.sh"

```

The 'shell' type is the only task we support at the moment.
