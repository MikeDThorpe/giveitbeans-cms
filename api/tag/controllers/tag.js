const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.services.tag.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.tag });
  },
};
