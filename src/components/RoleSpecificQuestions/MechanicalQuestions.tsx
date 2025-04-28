import React from 'react'

const MechanicalQuestions = () => {
    return (
        <div className="role-specific-questions">
            <div className="grid grid-cols-1 mb-5">
                <label htmlFor="hopeToLearn" className="font-semibold">
                    What do you hope to learn by joining Electrium Mobility as a mechanical team member? <span className="text-red-600">*</span>
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
                    If you had to pick, would you rather design a flamethrower or a grenade launcher (NOTE: This is not a serious question, and you will not be designing such things officially through the team).
                </label>
                <div className="p-4 bg-grey border-2 border-gray-300 rounded-md">
                    <label className="block mb-2">
                        <input
                            type="radio"
                            name="wouldYouRather"
                            value="Flamethrower"
                            className="form-radio text-green-600 border-green-600 rounded-md mr-2"
                        />
                        Flamethrower
                    </label>
                    <label className="block mb-2">
                        <input
                            type="radio"
                            name="wouldYouRather"
                            value="Grenade Launcher"
                            className="form-radio text-green-600 border-green-600 rounded-md mr-2"
                        />
                        Grenade Launcher
                    </label>
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
                                <td className="p-2">Solidworks</td>
                                {[1, 2, 3, 4, 5].map(num => (
                                    <td key={`solidworks-${num}`} className="text-center p-2">
                                        <label className="flex items-center justify-center">
                                            <input
                                                type="radio"
                                                name="skillEvaluationMechanical-Solidworks"
                                                value={num}
                                                required
                                                className="form-radio h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
                                            />
                                        </label>
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-2">Machining</td>
                                {[1, 2, 3, 4, 5].map(num => (
                                    <td key={`machining-${num}`} className="text-center p-2">
                                        <label className="flex items-center justify-center">
                                            <input
                                                type="radio"
                                                name="skillEvaluationMechanical-Machining"
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

export default MechanicalQuestions