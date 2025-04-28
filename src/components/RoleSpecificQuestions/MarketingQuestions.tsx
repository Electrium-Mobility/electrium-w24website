import React from 'react'

const MarketingQuestions = () => {
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
                            {["Graphic design", "Photography/ videography", "Photo/ video editing", "Communicate with followers", "3D modeling"].map(field => (
                                <tr key={field}>
                                    <td className="p-2">{field}</td>
                                    {[1, 2, 3, 4, 5].map(num => (
                                        <td key={`${field}-${num}`} className="text-center p-2">
                                            <label className="flex items-center justify-center">
                                                <input
                                                    type="radio"
                                                    name={`fieldsInterestedMarketing-${field}`}
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
                <label className="font-semibold">
                    What software do you have experience with? <span className="text-red-600">*</span>
                </label>
                <div className="p-4 bg-grey border-2 border-gray-300 rounded-md">
                    {["Figma", "Canva", "Photoshop", "Adobe Illustrator", "Other"].map(software => (
                        <label key={software} className="block mb-2">
                            <input
                                type="checkbox"
                                name="softwareExp"
                                value={software}
                                className="form-checkbox text-green-600 border-green-600 rounded-md mr-2"
                            />
                            {software}
                        </label>
                    ))}
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
                <label htmlFor="discordEmoji" className="font-semibold">
                    Which discord emoji has the largest water droplet?
                </label>
                <div className="text-gray-500 text-sm">Please answer in format of :emoji_name:. Example: :sweat_smile:. You can find a sample of water droplet on the top right corner of the emoji shown</div>
                <input
                    id="discordEmoji"
                    name="discordEmoji"
                    type="text"
                    className="form-input mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
                />
            </div>
        </div>
    )
}

export default MarketingQuestions