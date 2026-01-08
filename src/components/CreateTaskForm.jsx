import React from 'react'

const CreateTaskForm = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <h3 className="text-xl font-semibold text-purple-800 mb-4">
        Create New Task
      </h3>

      <form className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-purple-700">Task Title</label>
          <input
            type="text"
            placeholder="Make UI design"
            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-purple-700">Assign To</label>
          <input
            type="text"
            placeholder="Employee name"
            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-purple-700">Date</label>
          <input
            type="date"
            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          />
        </div>

        <div>
          <label className="text-sm text-purple-700">Category</label>
          <input
            type="text"
            placeholder="dev, design, etc."
            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          />
        </div>

        <div className="col-span-2">
          <label className="text-sm text-purple-700">Description</label>
          <textarea
            rows="4"
            placeholder="Enter task description..."
            className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          ></textarea>
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTaskForm