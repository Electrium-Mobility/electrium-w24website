import React from 'react'

const FinanceQuestions = () => {
    return (
        <div className="role-specific-questions">
            <div className="grid grid-cols-1 mb-5">
                <label className="font-semibold">
                    What fields are you interested in? <span className="text-red-600">*</span>
                </label>
                <label className="text-gray-500 text-sm">1: Most interested in | 5: Not interested in</label>

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
                            {["Outreach to sponsors", "Present to endowment funds", "Draft endowment fund proposals/ slides", "Set budget/ handle reimbursements", "Plan/ execute fundraisers"].map(field => (
                                <tr key={field}>
                                    <td className="p-2">{field}</td>
                                    {[1, 2, 3, 4, 5].map(num => (
                                        <td key={`${field}-${num}`} className="text-center p-2">
                                            <label className="flex items-center justify-center">
                                                <input
                                                    type="radio"
                                                    name={`fieldsInterestedFinance-${field}`}
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

            <div className="grid grid-cols-1 mb-5">
                <label htmlFor="relatedExperience" className="font-semibold">
                    Highlight of related experience
                </label>
                <div className="text-gray-500 text-sm">Please use point form</div>
                <textarea
                    id="relatedExperience"
                    name="relatedExperience"
                    className="form-textarea mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
                    rows={4}
                ></textarea>
            </div>

            <div className="grid grid-cols-1 mb-5">
                <label htmlFor="relatedSoftSkills" className="font-semibold">
                    Highlight of related soft skills
                </label>
                <div className="text-gray-500 text-sm">Please use point form</div>
                <textarea
                    id="relatedSoftSkills"
                    name="relatedSoftSkills"
                    className="form-textarea mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
                    rows={4}
                ></textarea>
            </div>

            <div className="grid grid-cols-1 mb-5">
                <label htmlFor="sponsorEmail" className="font-semibold">
                    Draft an email that you will use to reach out to a sponsor you have selected on behalf of Electrium Mobility
                </label>
                <textarea
                    id="sponsorEmail"
                    name="sponsorEmail"
                    className="form-textarea mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
                    rows={6}
                ></textarea>
            </div>

            <div className="grid grid-cols-1 mb-5">
                <label className="font-semibold">
                    Would you like to apply to another role? If so, which one? <span className="text-red-600">*</span>
                </label>
                <div className="text-gray-500 text-sm">If you are not accepted for the finance team, you can still join the team under another role.</div>
                <div className="p-4 bg-grey border-2 border-gray-300 rounded-md">
                    {["Mechanical", "Firmware", "Electrical", "Web Development", "Management", "Marketing", "None"].map(option => (
                        <label key={option} className="block mb-2">
                            <input
                                type="radio"
                                name="otherRole"
                                value={option}
                                required
                                className="form-radio text-green-600 border-green-600 rounded-md mr-2"
                            />
                            {option}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FinanceQuestions