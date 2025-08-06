import React from "react";

const LeadQuestions = () => {
  return (
    <div className="role-specific-questions">
      <div className="grid grid-cols-1 mb-5">
        <label htmlFor="WhyLead" className="font-semibold">
          Why do you want to be a lead? <span className="text-red-600">*</span>
        </label>
        <textarea
          id="whyLead"
          name="whyLead"
          required
          className="form-textarea mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
          rows={6}
        ></textarea>
      </div>
    </div>
  );
};
export default LeadQuestions;
