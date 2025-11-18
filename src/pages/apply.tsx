import React, { useState, useEffect } from "react";
import { useHistory } from "@docusaurus/router";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import skateboard from "../../static/img/roles-responsibilty/skateboard.png";
import onewheel from "../../static/img/roles-responsibilty/onewheel.png";
import scooter from "../../static/img/roles-responsibilty/scooter.png";
import skateboard2 from "../../static/img/roles-responsibilty/skateboard2.png";
import onewheel2 from "../../static/img/roles-responsibilty/onewheel2.png";

import {
  SELECT_PROGRAMS,
  SELECT_HEARD_SOURCE,
  SELECT_ROLES,
  SELECT_PROJECTS,
  SELECT_TERMS,
  SELECT_STREAMS,
} from "../components/constants/apply-form-options";

import ProjectLeadQuestions from "../components/RoleSpecificQuestions/ProjectLeadQuestions";
import LeadQuestions from "../components/RoleSpecificQuestions/LeadQuestions";
import ElectricalQuestions from "../components/RoleSpecificQuestions/ElectricalQuestions";
import FinanceQuestions from "../components/RoleSpecificQuestions/FinanceQuestions";
import FirmwareQuestions from "../components/RoleSpecificQuestions/FirmwareQuestions";
import ManagementQuestions from "../components/RoleSpecificQuestions/ManagementQuestions";
import MarketingQuestions from "../components/RoleSpecificQuestions/MarketingQuestions";
import MechanicalQuestions from "../components/RoleSpecificQuestions/MechanicalQuestions";
import WebDevQuestions from "../components/RoleSpecificQuestions/WebDevQuestions";

const ApplicationForm = () => {
  const [showImages, setShowImages] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");

  const history = useHistory();

  useEffect(() => {
    const handleResize = () => {
      setShowImages(window.innerWidth >= 1034);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderRoleQuestions = () => {
    switch (selectedRole) {
      case "Project Lead":
        return <ProjectLeadQuestions />;
      case "Team Lead":
        return <LeadQuestions />;
      case "Electrical":
        return <ElectricalQuestions />;
      case "Finance":
        return <FinanceQuestions />;
      case "Firmware":
        return <FirmwareQuestions />;
      case "Management":
        return <ManagementQuestions />;
      case "Marketing":
        return <MarketingQuestions />;
      case "Mechanical":
        return <MechanicalQuestions />;
      case "Web Development":
        return <WebDevQuestions />;
      default:
        return null;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const formData = new FormData(event.target);

      const formValues: any = {};
      formData.forEach((value, key) => {
        if (key.includes("-")) {
          const [category, skill] = key.split("-");
          if (!formValues[category]) {
            formValues[category] = {};
          }
          formValues[category][skill] = value;
        } else {
          formValues[key] = value;
        }
      });

      // Process project rankings
      SELECT_PROJECTS.forEach((project, index) => {
        const rank = formData.get(`project_rank_${index}`);
        if (rank) {
          formValues[`ProjectRank: ${project}`] = rank;
        }
      });

      // Create a sorted electriumProjects array
      const rankedProjects = [];
      Object.keys(formValues)
        .filter((key) => key.startsWith("ProjectRank:"))
        .sort((a, b) => Number(formValues[b]) - Number(formValues[a]))
        .forEach((key) => {
          rankedProjects.push(key.replace("ProjectRank: ", ""));
        });

      formValues.electriumProjects = rankedProjects;

      // 🔥 Remove the old "project_rank_0", "project_rank_1", etc. fields
      SELECT_PROJECTS.forEach((_, index) => {
        delete formValues[`project_rank_${index}`];
      });

      // Keep all fields as simple top-level fields for spreadsheet
      // No complex nesting - just send everything directly

      console.log("Submitting form data:", formValues);

      // Send to Google Apps Script
      await fetch(
        "https://script.google.com/macros/s/AKfycbwugwIPcsnid3NOyCHjXigSI0chX-_1r6IzQkBG09NOrElLMBLACHlJbPkb5K1R4EvGSQ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify(formValues),
          mode: "no-cors",
        }
      );

      console.log("Form submitted successfully");

      setSuccess(true);

      setTimeout(() => {
        console.log("Redirecting to thank you page");
        history.push("/thankyou");
      }, 2000);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(`Error submitting form: ${err.message || "Unknown error"}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="relative py-16 dark:bg-slate-800">
        <div className="container">
          <div>
            {showImages && (
              <div className="images-container">
                <img
                  src={skateboard}
                  alt="skateboard"
                  style={{
                    position: "absolute",
                    width: "150px",
                    height: "auto",
                    left: "0",
                    transform: "translateX(-10%)",
                    top: "50px",
                  }}
                />
                <img
                  src={onewheel}
                  alt="onewheel"
                  style={{
                    position: "absolute",
                    width: "150px",
                    height: "auto",
                    right: "0",
                    transform: "translateX(10%)",
                    top: "350px",
                  }}
                />
                <img
                  src={scooter}
                  alt="scooter"
                  style={{
                    position: "absolute",
                    width: "150px",
                    height: "auto",
                    left: "0",
                    transform: "translateX(-10%)",
                    top: "650px",
                  }}
                />
                <img
                  src={skateboard2}
                  alt="skateboard-right"
                  style={{
                    position: "absolute",
                    width: "150px",
                    height: "auto",
                    right: "0",
                    transform: "translateX(10%)",
                    top: "950px",
                  }}
                />
                <img
                  src={onewheel2}
                  alt="onewheel-left"
                  style={{
                    position: "absolute",
                    width: "150px",
                    height: "auto",
                    left: "0",
                    transform: "translateX(-10%)",
                    top: "1250px",
                  }}
                />
              </div>
            )}
          </div>
          <div className="md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-6 md:col-span-6 md:mt-0">
              <div className="ltr:lg:ml-5 rtl:lg:mr-5">
                <h3 className="pt-12 text-center md:leading-normal text-4xl leading-normal font-semibold">
                  Apply
                </h3>
                <h3 className="font-semibold text-green-600 text-center">
                  {" "}
                  Winter 2026 Applications are Open!
                </h3>
                <p className="text-center mb-4 md:leading-normal leading-normal">
                  Hi there! Thank you for your interest in joining Electrium
                  Mobility!
                  <br />
                  Applications are rolling{" "}
                  <span className="font-semibold text-green-600">
                    year-round
                  </span>
                  , so if you are joining mid-term then you will be placed in
                  one of the teams in the current term.
                  <br />
                  This form is for both regular team member applications and
                  leadership positions.
                </p>
                <p className="mb-4 md:leading-normal leading-normal text-red-600">
                  * Indicates required question
                </p>
                <div className="bg-white dark:bg-slate-900 rounded-md shadow p-6">
                  <h3 className="mb-6 text-2xl leading-normal font-medium">
                    Get in touch!
                  </h3>

                  {/* Status messages */}
                  {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                      <p className="font-bold">Error!</p>
                      <p>{error}</p>
                    </div>
                  )}
                  {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                      <p className="font-bold">Success!</p>
                      <p>
                        Your application has been submitted. Redirecting to
                        thank you page...
                      </p>
                    </div>
                  )}
                  {submitting && (
                    <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4">
                      <p className="font-bold">Submitting...</p>
                      <p>Please wait while we process your application.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid lg:grid-cols-12 lg:gap-6">
                      <div className="lg:col-span-6">
                        <div className="grid grid-cols-1 mb-5">
                          <label htmlFor="firstName" className="font-semibold">
                            First Name <span className="text-red-600">*</span>
                          </label>
                          <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            className="form-input mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
                          />
                        </div>
                      </div>
                      <div className="lg:col-span-6">
                        <div className="grid grid-cols-1 mb-5">
                          <label htmlFor="lastName" className="font-semibold">
                            Last Name <span className="text-red-600">*</span>
                          </label>
                          <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            className="form-input mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 mb-5">
                      <label htmlFor="program" className="font-semibold">
                        What program are you in?{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="program"
                        name="program"
                        required
                        className="form-select mt-2 text-charcoal-600 border border-charcoal-300 rounded-md px-4 py-3"
                      >
                        <option value="">-Select option-</option>
                        {SELECT_PROGRAMS.map((program) => (
                          <option key={program} value={program}>
                            {program}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 mb-5">
                      <label htmlFor="term" className="font-semibold">
                        What term will you be in in the Winter 2026 term?{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="term"
                        name="term"
                        required
                        className="form-select mt-2 text-charcoal-600 border border-charcoal-300 rounded-md px-4 py-3"
                      >
                        <option value="">-Select option-</option>
                        {SELECT_TERMS.map((term) => (
                          <option key={term} value={term}>
                            {term}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 mb-5">
                      <label htmlFor="stream" className="font-semibold">
                        What stream are you in?{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="stream"
                        name="stream"
                        required
                        className="form-select mt-2 text-charcoal-600 border border-charcoal-300 rounded-md px-4 py-3"
                      >
                        <option value="">-Select option-</option>
                        {SELECT_STREAMS.map((stream) => (
                          <option key={stream} value={stream}>
                            {stream}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 mb-5">
                      <label htmlFor="uwaterlooEmail" className="font-semibold">
                        What is your @uwaterloo email? (example
                        s36chiu@uwaterloo.ca){" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="uwaterlooEmail"
                        name="uwaterlooEmail"
                        type="email"
                        required
                        pattern="[a-z0-9._%+-]+@uwaterloo\.ca$"
                        className="form-input mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
                      />
                    </div>

                    <div className="grid grid-cols-1 mb-5">
                      <label htmlFor="personalEmail" className="font-semibold">
                        What is your personal email? (example,
                        sherwin.chiu89@gmail.com){" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="personalEmail"
                        name="personalEmail"
                        type="email"
                        required
                        className="form-input mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
                      />
                    </div>

                    <div className="grid grid-cols-1 mb-5">
                      <label
                        htmlFor="discordUsername"
                        className="font-semibold"
                      >
                        What is your Discord username? (example .sherwin){" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="discordUsername"
                        name="discordUsername"
                        type="text"
                        required
                        className="form-input mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
                      />
                    </div>

                    <div className="grid grid-cols-1 mb-5">
                      <label className="font-semibold">
                        Are you a returning member?{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="p-4 bg-grey border-2 border-gray-300 rounded-md">
                        <label className="block mb-2">
                          <input
                            type="radio"
                            name="isReturningMember"
                            value="Yes"
                            required
                            className="form-radio text-green-600 border-green-600 rounded-md mr-2"
                          />
                          Yes
                        </label>
                        <label className="block mb-2">
                          <input
                            type="radio"
                            name="isReturningMember"
                            value="No"
                            required
                            className="form-radio text-green-600 border-green-600 rounded-md mr-2"
                          />
                          No
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 mb-5">
                      <label className="font-semibold">
                        Will you be in-person at Waterloo in Winter 2026?{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="p-4 bg-grey border-2 border-gray-300 rounded-md">
                        <label className="block mb-2">
                          <input
                            type="radio"
                            name="inPerson"
                            value="Yes"
                            required
                            className="form-radio text-green-600 border-green-600 rounded-md mr-2"
                          />
                          Yes
                        </label>
                        <label className="block mb-2">
                          <input
                            type="radio"
                            name="inPerson"
                            value="No"
                            required
                            className="form-radio text-green-600 border-green-600 rounded-md mr-2"
                          />
                          No
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 mb-5">
                      <label htmlFor="interests" className="font-semibold">
                        What are your interests and hobbies? Tell us something
                        interesting about yourself!
                      </label>
                      <div className="text-gray-500 text-sm">
                        This is for us to get to know you, and does not have an
                        impact on your application :)
                      </div>
                      <textarea
                        id="interests"
                        name="interests"
                        className="form-textarea mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
                        rows={4}
                      ></textarea>
                    </div>

                    <div className="grid grid-cols-1 mb-5">
                      <label className="font-semibold">
                        How did you hear about Electrium Mobility?{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="p-4 bg-grey border-2 border-gray-300 rounded-md">
                        {SELECT_HEARD_SOURCE.map((source) => (
                          <label key={source} className="block mb-2">
                            <input
                              type="radio"
                              name="heardSource"
                              value={source}
                              required
                              className="form-radio text-green-600 border-green-600 rounded-md mr-2"
                            />
                            {source}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 mb-5">
                      <label htmlFor="role" className="font-semibold">
                        What role are you interested in?{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="text-gray-500 text-sm">
                        You can learn more about what the various roles do{" "}
                        <Link
                          to="/responsibilities"
                          target="_blank"
                          className="text-green-600 font-bold"
                        >
                          here
                        </Link>
                        .
                      </div>
                      <select
                        id="role"
                        name="role"
                        required
                        className="form-select mt-2 text-charcoal-600 border border-charcoal-300 rounded-md px-4 py-3"
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                      >
                        <option value="">-Select option-</option>
                        {SELECT_ROLES.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Render role-specific questions based on selection */}
                    {renderRoleQuestions()}

                    <div className="grid grid-cols-1 mb-5">
                      <label htmlFor="friendReferral" className="font-semibold">
                        If you're applying with a friend, please put their full
                        name below.
                      </label>
                      <input
                        id="friendReferral"
                        name="friendReferral"
                        type="text"
                        className="form-input mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
                      />
                    </div>

                    <div className="grid grid-cols-1 mb-5">
                      <label className="font-semibold">
                        Please rank the projects you're interested in. (1 is
                        most interested and 6 is least interested){" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="text-gray-500 text-sm">
                        Feel free to add your own project idea under "Other".
                      </div>

                      {SELECT_PROJECTS.map((project, index) => (
                        <div key={project} className="flex items-center mt-2">
                          <select
                            name={`project_rank_${index}`}
                            required
                            className="form-select text-charcoal-600 border border-charcoal-600 rounded-md px-4 py-3 mr-4 w-24"
                          >
                            <option value="">-Rank-</option>
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                          <span>{project}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 mb-5">
                      <label htmlFor="comments" className="font-semibold">
                        Any additional comments or questions?
                      </label>
                      <textarea
                        id="comments"
                        name="comments"
                        className="form-textarea mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
                        rows={4}
                      ></textarea>
                    </div>

                    <div className="grid grid-cols-1 mb-5">
                      <label htmlFor="commitment" className="font-semibold">
                        Lastly, how many hours per week can you dedicate to
                        contributing to our group (enter a number)?{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="commitment"
                        name="commitment"
                        type="number"
                        min="1"
                        required
                        className="form-input mt-2 text-charcoal-600 border border-charcoal-300 rounded-md w-full py-3 px-4"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className={`btn p-2 w-full inline-block align-middle bg-green-600 hover:bg-green-700 border-green-600 hover:border-green-700 text-white rounded-md ${
                        submitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {submitting ? "Submitting..." : "Submit Application"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ApplicationForm;
