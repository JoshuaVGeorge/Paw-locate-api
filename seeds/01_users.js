/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("users").del();
	await knex("users").insert([
		{
			id: 1,
			user_name: "pmatiebe0",
			password: "$2a$10$V2YNmmw2cQA3K6JpKlzaJuqkjst4heptBwyYTaFGgEa1rnq5WeKZ6",
		},
		{
			id: 2,
			user_name: "cphilbrick1",
			password: "$2a$10$HX6aIXwV0wqoLr40v4rRautg7247e91D.fRmdnmqAHVjybhfT/G8m",
		},
		{
			id: 3,
			user_name: "swixey2",
			password: "$2a$10$udTAiDgUWLn9CBPQEaLFyOp5TOrrm/Vwteb73bYCc42ZcGG.2liZq",
		},
		{
			id: 4,
			user_name: "etomkies3",
			password: "$2a$10$GNptDQYdS5aQCE.pl8.HZ.dqpTMHJ2ldmEp1OlJoyg17ScPCi1sxa",
		},
	]);
};
