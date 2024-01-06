'use strict';

/**
 * blueprint service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blueprint.blueprint');
