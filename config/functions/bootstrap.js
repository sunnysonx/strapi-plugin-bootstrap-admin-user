module.exports = async () => {
  if (process.env.NODE_ENV === 'development') {
    const params = {
      username: process.env.DEV_USER || 'admin',
      password: process.env.DEV_PASS || 'admin',
      firstname: process.env.DEV_USER || 'Admin',
      lastname: process.env.DEV_USER || 'Admin',
      email: process.env.DEV_EMAIL || 'admin@test.test',
      blocked: false,
      isActive: true,
    };
    //Check if any account exists.
    try {
      const admins = await strapi.query('user', 'admin').find();
      if (admins.length === 0) {
        let tempPass = params.password;
        let verifyRole = await strapi.query('role', 'admin').findOne({
          code: 'strapi-super-admin',
        });
        if (!verifyRole) {
          verifyRole = await strapi.query('role', 'admin').create({
            name: 'Super Admin',
            code: 'strapi-super-admin',
            description: 'Super Admins can access and manage all features and settings.',
          });
        }
        params.roles = [verifyRole.id];
        params.password = await strapi.admin.services.auth.hashPassword(params.password);
        await strapi.query('user', 'admin').create({
          ...params,
        });
        strapi.log.info('Admin account was successfully created.');
        strapi.log.info(`Email: ${params.email}`);
        strapi.log.info(`Password: ${tempPass}`);
      }
    } catch (error) {
      strapi.log.error(`Couldn't create Admin account during bootstrap: `, error);
    }
  }
};
