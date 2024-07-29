import * as Yup from 'yup';

// Base validation schema for common fields
const baseSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    program: Yup.string().required('Program is required'),
    term: Yup.string().required('Term is required'),
    uwaterlooEmail: Yup.string().email('Invalid email').required('UWaterloo Email is required'),
    personalEmail: Yup.string().email('Invalid email').required('Personal Email is required'),
    discordUsername: Yup.string().required('Discord Username is required'),
    isReturningMember: Yup.string().required('Please select an option'),
    inPerson: Yup.string().required('Please select an option'),
    interests: Yup.string(),
    heardSource: Yup.string().required('Please select an option'),
    friendReferral: Yup.string(),
    electriumProjects: Yup.array().of(Yup.string()).min(1, 'Please select at least one project').required('Please select at least one project'),
    comments: Yup.string(),
});

// Hard-coded role-specific validation schemas
const roleSchemas = {
    Mechanical: Yup.object().shape({
        hopeToLearn: Yup.string().required('This field is required'),
        wouldYouRather: Yup.string(),
    }),
    Firmware: Yup.object().shape({
        hopeToLearn: Yup.string().required('This field is required'),
        whyCrossRoad: Yup.string(),
    }),
    Electrical: Yup.object().shape({
        hopeToLearn: Yup.string().required('This field is required'),
        fixWiring: Yup.string(),
    }),
    WebDevelopment: Yup.object().shape({
        hopeToLearn: Yup.string().required('This field is required'),
        worstWebsite: Yup.string(),
    }),
    Management: Yup.object().shape({
        hopeToLearn: Yup.string().required('This field is required'),
        worstCourse: Yup.string(),
    }),
    Marketing: Yup.object().shape({
        fieldsInterestedMarketing: Yup.array().of(Yup.string().required('This field is required')).required('This field is required'),
        softwareExp: Yup.array().of(Yup.string().required('This field is required')).required('This field is required'),
        relatedExperience: Yup.string(),
        relatedSoftSkills: Yup.string(),
        resume: Yup.mixed(),
        designPost: Yup.string(),
        discordEmoji: Yup.string(),
    }),
    Finance: Yup.object().shape({
        fieldsInterestedMarketing: Yup.array().of(Yup.string().required('This field is required')).required('This field is required'),
        relatedExperience: Yup.string(),
        relatedSoftSkills: Yup.string(),
        resume: Yup.mixed().required('This field is required'),
        sponsorEmail: Yup.string(),
        otherRole: Yup.string().required('This field is required'),
    }),
};

const ValidationSchema = (role) => {
    const roleSchema = roleSchemas[role] || Yup.object().shape({});
    return baseSchema.concat(roleSchema);
};

export default ValidationSchema;
