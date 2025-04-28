import React from 'react'

const ManagementQuestions = () => {
    return (
        <div className="role-specific-questions">
            <div className="grid grid-cols-1 mb-5">
                <label htmlFor="hopeToLearn" className="font-semibold">
                    What do you hope to learn by joining Electrium Mobility as a management team member? <span className="text-red-600">*</span>
                </label>
                <textarea
                    id="hopeToLearn"
                    name="hopeToLearn"
                    required
                    className="form-textarea mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
                    rows={4}
                ></textarea>
            </div>

            <div className="grid grid-cols-1 mb-5">
                <label htmlFor="worstCourse" className="font-semibold">
                    What is the worst course you've taken at UW?
                </label>
                <div className="text-gray-500 text-sm">There is a correct answer by the way.</div>
                <input
                    id="worstCourse"
                    name="worstCourse"
                    type="text"
                    className="form-input mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
                />
            </div>
        </div>
    )
}

export default ManagementQuestions