# Before to use this application, you need to install the following packages:
## install sequelize cli as global package
```bash
$ sudo npm i -g sequelize-cli
```
## Create a new model using sequelize cli optional, after you can run migrations
```bash
$ sequelize model:create --name User --attributes name:string,age:integer
```

## setup your credentials in config.json file
```json
{
  "development": {
    "username": "root",
    "password": "yourpassword",
    "database": "android_api",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

## Create database
```bash
$ sequelize db:create --env development
```
## if it doesn't work, try this
```bash
$ npm i -g msql2
```
## migrate database
```bash
$ sequelize db:migrate 
```
