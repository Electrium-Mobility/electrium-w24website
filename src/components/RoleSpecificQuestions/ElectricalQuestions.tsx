import React from 'react'

const ElectricalQuestions = () => {
    return (
        <div className="role-specific-questions">
            <div className="grid grid-cols-1 mb-5">
                <label htmlFor="hopeToLearn" className="font-semibold">
                    What do you hope to learn by joining Electrium Mobility as an electrical team member? <span className="text-red-600">*</span>
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
                <label className="font-semibold">
                    What's the best way to fix spaghetti wiring in an electronic system?
                </label>
                <div className="p-4 bg-grey border-2 border-gray-300 rounded-md">
                    {["Cable ties.", "Energy chain.", "Eat it. I love spaghetti.", "Go wireless.", "Leave it alone. I can decipher spaghetti wiring in my sleep."].map(option => (
                        <label key={option} className="block mb-2">
                            <input
                                type="radio"
                                name="fixWiring"
                                value={option}
                                className="form-radio text-green-600 border-green-600 rounded-md mr-2"
                            />
                            {option}
                        </label>
                    ))}
                </div>
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
                            <tr>
                                <td className="p-2">KiCAD</td>
                                {[1, 2, 3, 4, 5].map(num => (
                                    <td key={`kicad-${num}`} className="text-center p-2">
                                        <label className="flex items-center justify-center">
                                            <input
                                                type="radio"
                                                name="skillEvaluationElectrical-KiCAD"
                                                value={num}
                                                required
                                                className="form-radio h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
                                            />
                                        </label>
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-2">Soldering</td>
                                {[1, 2, 3, 4, 5].map(num => (
                                    <td key={`soldering-${num}`} className="text-center p-2">
                                        <label className="flex items-center justify-center">
                                            <input
                                                type="radio"
                                                name="skillEvaluationElectrical-Soldering"
                                                value={num}
                                                required
                                                className="form-radio h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
                                            />
                                        </label>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ElectricalQuestions