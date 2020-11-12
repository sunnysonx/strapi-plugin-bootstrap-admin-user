# strapi-plugin-bootstrap-admin-user
Automatically creates an admin user in development mode.

The first step verifies if the `strapi-super-admin` role exists; if it doesn't exist, it creates one. The second step verifies if the admin user exists; if it doesn't exist, it creates one with the `strapi-super-admin` role.

### Installation
```
yarn add strapi-plugin-bootstrap-admin-user --dev
```
or
```
npm install strapi-plugin-bootstrap-admin-user --save-dev
```

### Usage
Credentials will be outputed in console on the First run.

### Default credentials:  
```
Username: admin  
Password: admin  
Firstname: Admin  
Lastname: Admin  
Email: admin@test.test
```

### You can also define them in .env with the following variables:  
```
DEV_ADMIN_USERNAME  
DEV_ADMIN_PASSWORD
DEV_ADMIN_FIRSTNAME
DEV_ADMIN_LASTNAME
DEV_ADMIN_EMAIL
```

## Note: Please use it only in the development environment.
