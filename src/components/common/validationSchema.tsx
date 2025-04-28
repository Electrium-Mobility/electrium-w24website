import * as Yup from 'yup';

const baseRoleQuestionsSchema = Yup.object({
    role: Yup.string().required('Role selection is required'),
});

// Base validation schema for common fields
const baseSchema = Yup.object().shape({
    firstName: Yup.string()
        .matches(/^[A-Za-z\s'-]+$/, "First Name must contain only letters")
        .required("First Name is required"),
    lastName: Yup.string()
        .matches(/^[A-Za-z\s'-]+$/, "Last Name must contain only letters")
        .required("Last Name is required"),
    program: Yup.string().required('Program is required'),
    term: Yup.string().required('Term is required'),
    stream: Yup.string().required('Stream selection is required'),
    uwaterlooEmail: Yup.string()
        .matches(/^[a-zA-Z0-9._%+-]+@uwaterloo\.ca$/, "Must be a valid @uwaterloo.ca email")
        .required("UWaterloo Email is required"),
    personalEmail: Yup.string().email('Invalid email').required('Personal Email is required'),
    discordUsername: Yup.string().required('Discord Username is required'),
    isReturningMember: Yup.string().required('Please select an option'),
    inPerson: Yup.string().required('Please select an option'),
    interests: Yup.string(),
    heardSource: Yup.string().required('Please select an option'),
    friendReferral: Yup.string(),
    electriumProjects: Yup.array()
        .of(Yup.number().min(1).max(6))
        .min(1, 'Please rank at least one project')
        .required('Project rankings are required'),
    comments: Yup.string(),
    commitment: Yup.number()
        .typeError("Please enter a valid number")
        .min(1, "Commitment must be at least 1 hour per week")
        .required("Please enter a number"),
    roleQuestions: Yup.object({
        role: Yup.string().required('Role selection is required'),
    }),
});

// Hard-coded role-specific validation schemas
const roleSchemas = {
    Mechanical: Yup.object().shape({
        hopeToLearn: Yup.string().required('This field is required'),
        wouldYouRather: Yup.string(),
        'skillEvaluationMechanical-Machining': Yup.string().required('This field is required'),
        'skillEvaluationMechanical-Solidworks': Yup.string().required('This field is required')
    }),
    Firmware: Yup.object().shape({
        hopeToLearn: Yup.string().required('This field is required'),
        whyCrossRoad: Yup.string(),
        'skillEvaluationFirmware-VESC': Yup.string().required('This field is required'),
        'skillEvaluationFirmware-Arduino IDE': Yup.string().required('This field is required')
    }),
    Electrical: Yup.object().shape({
        hopeToLearn: Yup.string().required('This field is required'),
        fixWiring: Yup.string(),
        'skillEvaluationElectrical-KiCAD': Yup.string().required('This field is required'),
        'skillEvaluationElectrical-Soldering': Yup.string().required('This field is required')
    }),
    'Web Development': Yup.object().shape({
        hopeToLearn: Yup.string().required('This field is required'),
        worstWebsite: Yup.string(),
        'skillEvaluationWebDev-TypeScript': Yup.string().required('This field is required'),
        'skillEvaluationWebDev-React.js': Yup.string().required('This field is required'),
        'skillEvaluationWebDev-Next.js': Yup.string().required('This field is required'),
        'skillEvaluationWebDev-SQL/NoSQL Database': Yup.string().required('This field is required'),
        'skillEvaluationWebDev-General Programming skills': Yup.string().required('This field is required'),
    }),
    Management: Yup.object().shape({
        hopeToLearn: Yup.string().required('This field is required'),
        worstCourse: Yup.string(),
    }),
    Marketing: Yup.object().shape({
        softwareExp: Yup.array()
            .of(Yup.string())
            .min(1, "Please select at least one option")
            .required("This field is required"),
        relatedExperience: Yup.string(),
        relatedSoftSkills: Yup.string(),
        discordEmoji: Yup.string(),
        'fieldsInterestedMarketing-Graphic design': Yup.string().required('This field is required'),
        'fieldsInterestedMarketing-Photography/ videography': Yup.string().required('This field is required'),
        'fieldsInterestedMarketing-Photo/ video editing': Yup.string().required('This field is required'),
        'fieldsInterestedMarketing-Communicate with followers': Yup.string().required('This field is required'),
        'fieldsInterestedMarketing-3D modeling': Yup.string().required('This field is required'),
    }),
    Finance: Yup.object().shape({
        relatedExperience: Yup.string(),
        relatedSoftSkills: Yup.string(),
        sponsorEmail: Yup.string(),
        otherRole: Yup.string().required('This field is required'),
        'fieldsInterestedFinance-Outreach to sponsors': Yup.string().required('This field is required'),
        'fieldsInterestedFinance-Present to endowment funds': Yup.string().required('This field is required'),
        'fieldsInterestedFinance-Draft endowment fund proposals/ slides': Yup.string().required('This field is required'),
        'fieldsInterestedFinance-Set budget/ handle reimbursements': Yup.string().required('This field is required'),
        'fieldsInterestedFinance-Plan/ execute fundraisers': Yup.string().required('This field is required'),
    }),
    Lead: Yup.object().shape({
        WhyLead: Yup.string().required('This field is required'),
    }),
};

const getValidationSchema = (role) => {
    let extendedRoleQuestionsSchema = baseRoleQuestionsSchema;

    if (role && roleSchemas[role]) {
        extendedRoleQuestionsSchema = baseRoleQuestionsSchema.concat(roleSchemas[role]);
    }

    return baseSchema.shape({
        roleQuestions: extendedRoleQuestionsSchema,
    });
};

export default getValidationSchema;