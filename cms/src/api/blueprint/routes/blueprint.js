'use strict';

/**
 * blueprint router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::blueprint.blueprint');
