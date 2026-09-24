import React , { useState } from "react";
import Layout from "@theme/Layout";
import { useHistory } from "@docusaurus/router";

export default function BecomeASponsor() {
    const history = useHistory();
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const ENDPOINT = "REPLACE_ME";

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        setError(null);

        try {
            const formData = new FormData(event.target);
            const formValues = {};
            formData.forEach((value, key) => {
                formValues[key] = value;
            });

            await fetch(ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "text/plain" },
                body: JSON.stringify(formValues),
                mode: "no-cors",
            });

            setSuccess(true);
            setTimeout(() => {
                history.push("/thank you");
            }, 2000);
        } catch (err) {
            setError('Error submitting form: ${err.message || "Unknown error"}');
        } finally {
            setSubmitting(false);
        }
    };



    return (
        <Layout title="Become a sponsor">
            <section className="relative md:py-24 py-16">
                <div className="container">
                    <div className="grid grid-cols-1 text-center pb-8">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                            Become a sponsor
                            </h3>
                            <p className="text-slate-400 max-w-xl mx-auto">
                                Tell us a bit about your organization and we'll get back to you with sponsorship options.
                            </p>
                    </div>
                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 mb-5">
                            <label htmlFor="contactName" className="font-semibold">
                                Your Name <span className="text-red-600">*</span>
                                </label>
                                <input
                                id="contactName"
                                name="contactName"
                                type="text"
                                required
                                className="form-input mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
                            />
                        </div>
                        
                        <div className="grid grid-cols-1 mb-5">
                            <label htmlFor="email" className="font-semibold">
                                Email <span className="text-red-600">*</span>
                            </label>
                            <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="form-input mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
                            />
                        </div>

                        <div className="grid grid-cols-1 mb-5">
                            <label htmlFor="organization" className="font-semibold">
                                Company / Organization <span className="text-red-600">*</span>
                            </label>
                            <input
                            id="organization"
                            name="organization"
                            type="text"
                            required
                            className="form-input mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
                            />
                        </div>

                        <div className="grid grid-cols-1 mb-5">
                            <label htmlFor="tier" className="font-semibold">
                                Sponsorship Tier of Interest
                            </label>
                            <select
                            id="tier"
                            name="tier"
                            className="form-select mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
                            >
                                <option value="">-Select option-</option>
                                <option value="Platinum">Platinum</option>
                                <option value="Gold">Gold</option>
                                <option value="Silver">Silver</option>
                                <option value="Bronze">Bronze</option>
                                <option value="Not sure yet">Not sure yet</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 mb-5">
                            <label htmlFor="message" className="font-semibold">
                                Message
                            </label>
                            <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="form-input myt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
                            />
                        </div>

                        <button
                        type="submit"
                        disabled={submitting}
                        className="btn bg-green-600 hover:bg-transparent border-green-600 text-white rounded-md py-3 px-6"
                        >
                            {submitting ? "Submitting..." : "Submit"}
                        </button>
                        {error && <p className="text-red-600">{error}</p>}
                        {success && <p className="text-green-600">Thanks! We'll be in touch shortly.</p>}
                    </form>
                </div>
                </div>
            </section>
        </Layout>
    );
}