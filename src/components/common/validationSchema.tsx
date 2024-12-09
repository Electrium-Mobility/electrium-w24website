import * as Yup from 'yup';


const baseRoleQuestionsSchema = Yup.object({
    role: Yup.string()
        .required('Role selection is required')
        .notOneOf([''], 'Role selection cannot be empty'),
});

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
    electriumProjects: Yup.array().of(Yup.string()).min(10, 'Please rank all projects').required('Please rank all projects'), // The number has to be cha
    comments: Yup.string(),
    commitment: Yup.string().required('Please enter a number'),
    roleQuestions: baseRoleQuestionsSchema,
});

// Hard-coded role-specific validation schemas
const roleSchemas = {
    Mechanical: Yup.object().shape({
        hopeToLearn: Yup.string().required('This field is required'),
        wouldYouRather: Yup.string(),
        'skillEvaluationMechanical-Machining': Yup.string().required('This field is required'),//TypeScript syntax doesn't support it
        'skillEvaluationMechanical-Solidworks': Yup.string().required('This field is required') //TypeScript syntax doesn't support it
    }),
    Firmware: Yup.object().shape({
        hopeToLearn: Yup.string().required('This field is required'),
        whyCrossRoad: Yup.string(),
        'skillEvaluationFirmware-VESC': Yup.string().required('This field is required'), //TypeScript syntax doesn't support it
        'skillEvaluationFirmware-Arduino IDE': Yup.string().required('This field is required') //TypeScript syntax doesn't support it
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


const getValidationSchema = (role) => {
    let roleSpecificSchema =  Yup.object({});
    let extendedRoleQuestionsSchema =  baseRoleQuestionsSchema;

    if (role)  {
        roleSpecificSchema = roleSchemas[role];
        extendedRoleQuestionsSchema = baseRoleQuestionsSchema.concat(roleSchemas[role]);

    }
    
    return baseSchema.shape({
        roleQuestions: extendedRoleQuestionsSchema,
        
    });
    
};


export default getValidationSchema;
