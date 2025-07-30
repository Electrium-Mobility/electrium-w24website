import React from "react";

const ProjectLeadQuestions = () => {
  return (
    <div className="role-specific-questions">
      <div className="grid grid-cols-1 mb-5">
        <label htmlFor="WhyProjectLead" className="font-semibold">
          Why do you want to be a project lead?{" "}
          <span className="text-red-600">*</span>
        </label>
        <textarea
          id="WhyProjectLead"
          name="WhyProjectLead"
          required
          className="form-textarea mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
          rows={6}
        ></textarea>
      </div>
    </div>
  );
};

export default ProjectLeadQuestions;
