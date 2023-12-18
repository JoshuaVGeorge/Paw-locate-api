/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("reports", (table) => {
		table.increments("id").primary();
		table
			.integer("user_id")
			.unsigned()
			.references("users.id")
			.onUpdate("CASCADE")
			.onDelete("CASCADE");
		table.string("pet_name").notNullable();
		table.string("pet_image").notNullable();
		table.string("description").notNullable();
		table.string("contact_info").notNullable();
		table.string("location_data").notNullable();
		table.boolean("status").notNullable();
		table.timestamp("created_at").defaultTo(knex.fn.now());
		table
			.timestamp("updated_at")
			.defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("reports");
};
