export default function({db}){
	return {
		endpoint: "/api/addTask",
		auth: "bypass",
		description: "",
		errors: {},
		
		reqSchema: ({string, object, array, number, any}, {})=> ({
			text: string(/.{1,100}/)
		}),

		resSchema: ({string, object, array, number, any}, {})=> ({
			task: object({
				_id: any(),
				text: string(/.{1,100}/),
				completed: any(),
				created_at: any()
			})
		}),

		controller: async function({body, auth, req, res}){
			const {text} = body
			const {insertedId} = await db('tasks').insertOne({text, completed: false, created_at: new Date()})

			const task = await db('tasks').findOne({_id: insertedId})
			return {task}
		}
	}
}