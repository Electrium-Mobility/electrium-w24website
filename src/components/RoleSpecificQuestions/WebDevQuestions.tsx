import React from 'react'

const WebDevQuestions = () => {
    return (
        <div className="role-specific-questions">
            <div className="grid grid-cols-1 mb-5">
                <label htmlFor="hopeToLearn" className="font-semibold">
                    What do you hope to learn by joining Electrium Mobility as a web development team member? <span className="text-red-600">*</span>
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
                <label htmlFor="worstWebsite" className="font-semibold">
                    What is the URL of the worst designed website you've ever seen?
                </label>
                <div className="text-gray-500 text-sm">Please keep your selection PG.</div>
                <input
                    id="worstWebsite"
                    name="worstWebsite"
                    type="text"
                    className="form-input mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
                />
            </div>

            <div className="grid grid-cols-1 mb-5">
                <label className="font-semibold">
                    We want to know about your technical skills! <span className="text-red-600">*</span>
                </label>
                <label className="text-gray-500 text-sm">1: No experience | 5: Proficient</label>

                <div className="p-4 bg-grey border-2 border-gray-300 rounded-md">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th className="text-center p-2">1</th>
                                <th className="text-center p-2">2</th>
                                <th className="text-center p-2">3</th>
                                <th className="text-center p-2">4</th>
                                <th className="text-center p-2">5</th>
                            </tr>
                        </thead>
                        <tbody>
                            {["TypeScript", "React.js", "Next.js", "SQL/NoSQL Database", "General Programming skills"].map(skill => (
                                <tr key={skill}>
                                    <td className="p-2">{skill}</td>
                                    {[1, 2, 3, 4, 5].map(num => (
                                        <td key={`${skill}-${num}`} className="text-center p-2">
                                            <label className="flex items-center justify-center">
                                                <input
                                                    type="radio"
                                                    name={`skillEvaluationWebDev-${skill}`}
                                                    value={num}
                                                    required
                                                    className="form-radio h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
                                                />
                                            </label>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default WebDevQuestions