export default function({db}){
	return {
		endpoint: "/api/getTasks",
		auth: "bypass",
		description: "",
		errors: {},
		
		reqSchema: ({string, object, array, number, any}, {})=> ({
		}),

		resSchema: ({string, object, array, number, any}, {})=> ({
			tasks: array(any())
		}),

		controller: async function({body, auth, req, res}){
			const tasks = await db('tasks').find().toArray()
			return {tasks}
		}
	}
}