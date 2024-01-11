export default function({db, ...props}){
	return {
		endpoint: "/api/completeTask",
		auth: "bypass",
		description: "",
		errors: {},
		
		reqSchema: ({string, object, array, number, any}, {})=> ({
			task_id: string(/.{1,100}/)
		}),

		resSchema: ({string, object, array, number, any}, {})=> ({
			db: any()
			// task: object({
			// 	_id: any(),
			// 	text: string(/.{1,100}/),
			// 	completed: any(),
			// 	created_at: any()
			// })
		}),

		controller: async function({body, auth, req, res}){
			const {task_id} = body
			console.log(task_id)
			// const {ObjectId} = props.mongoManager
			// const {ObjectId} = props
			await db('tasks').updateOne({_id: task_id }, [{$set: {completed: true}}])

			const task = await db('tasks').findOne({_id: task_id})
			return {db: task}
		}
	}
}