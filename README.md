# strapi-plugin-bootstrap-admin-user
Automatically creates an admin user in development mode.

At the first step it verifies if `strapi-super-admin` role exists, if it doesn't exist then it creates one.
At the second step it verifies if admin user exists, if it doesn't exist then it creates one with the `strapi-super-admin` role.

### Default credentials:  
```
Username: admin  
Password: admin  
Firstname: Admin  
Lastname: Admin  
Email: admin@test.test
```

### You can also define them in .env:  
```
DEV_ADMIN_USERNAME  
DEV_ADMIN_PASSWORD
DEV_ADMIN_FIRSTNAME
DEV_ADMIN_LASTNAME
DEV_ADMIN_EMAIL
```

## Note: Please use it only on the development environment.
