import { useState, useEffect } from 'react';
import { useFormik, Field, useFormikContext } from "formik";
import { withSubForm } from "./withSubForm";
import { useValues } from "./useVal";

import TextField from './TextField'; 
import RadioField from './RadioField';
import DropdownField from './DropdownField';
import CheckboxField from './CheckboxField';
import UploadField from './UploadField';
import RadioTableField from './RadioTableField';

import roleSpecificJson from '../constants/role-specific-questions.json';
import getValidationSchema from './validationSchema';

// Define proper types for our form values and role-specific questions
interface FormValues {
  roleQuestions: {
    role: string;
    [key: string]: any;
  };
  [key: string]: any;
}

interface Question {
  name: string;
  question: string;
  type?: string;
  options?: string[];
  caption?: string;
  image?: string;
  rowOptions?: string[];
  columnOptions?: string[];
  required?: boolean;
}

interface RoleSpecificQuestion {
  id: string;
  role: string;
  questions: Question[];
}

// Parse role-specific questions data
const roleSpecificQuestions: RoleSpecificQuestion[] = roleSpecificJson.map(item => ({
  id: item.id,
  role: item.role,
  questions: item.questions.map(q => ({
    name: q.name,
    question: q.question,
    caption: q.caption,
    image: q.image,
    type: q.type,
    required: q.required,
    options: q.options,
    rowOptions: q.rowOptions,
    columnOptions: q.columnOptions
  }))
}));

interface RoleSpecificFieldProps {
  setValidation: (schema: any) => void;
  name: string;
  subName: string;
  label: string;
  caption?: React.ReactNode;
  options: string[];
  required?: boolean;
  values?: Record<string, any>;
}

const RoleSpecificField = ({
  setValidation, 
  name, 
  subName, 
  label, 
  caption, 
  options, 
  required, 
  ...props 
}: RoleSpecificFieldProps) => {
  const [roleQuestions, setRoleQuestions] = useState<RoleSpecificQuestion[]>([]);
  const [selectedRole, setSelectedRole] = useState("");
  
  // Use proper typing for Formik context
  const { 
    setFieldValue, 
    setFormikState, 
    errors, 
    touched, 
    setErrors 
  } = useFormikContext<FormValues>();

  useValues(name, props);
  
  useEffect(() => {
    // Safely check and clear errors when role changes
    if (errors && 
        typeof errors === 'object' && 
        'roleQuestions' in errors && 
        errors.roleQuestions && 
        typeof errors.roleQuestions === 'object') {
      
      // Keep only the role error, clear others
      setErrors({ 
        ...errors, 
        roleQuestions: { 
          role: errors.roleQuestions.role 
        } 
      });
    }
    
    // Find the selected role's questions
    const roleData = roleSpecificQuestions.find(role => role.role === selectedRole);
    if (roleData) {
      setRoleQuestions([roleData]);
      const newValidationSchema = getValidationSchema(selectedRole);
      
      // Update the validation schema in Formik
      setFormikState(prevState => ({
        ...prevState,
        validationSchema: newValidationSchema,
      }));
      
      // Update the parent component's validation reference
      setValidation(newValidationSchema);
    } else {
      // Clear if no role is selected
      setRoleQuestions([]);
      const newValidationSchema = getValidationSchema("");
      setFormikState(prevState => ({
        ...prevState,
        validationSchema: newValidationSchema,
      }));
      setValidation(newValidationSchema);
    }
  }, [selectedRole, setFormikState, setErrors, errors]);

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedRole(value);
    setFieldValue(`${name}.role`, value, true);
    
    // Clear any role-specific field values when the role changes
    if (props.values) {
      const fieldsToReset = { ...props.values };
      if ('role' in fieldsToReset) {
        delete fieldsToReset.role;
      }
      
      Object.keys(fieldsToReset).forEach(key => {
        setFieldValue(`${name}.${key}`, '', false);
      });
    }
  };

  // Handle file validation
  const validateImage = (values: { image?: File }) => {
    const MAX_SIZE = 10 * 1024 * 1024; // 10MB
    if (values.image && values.image.size > MAX_SIZE) {
      return { image: "Max file size exceeded (10MB limit)." };
    }
    return {};
  };

  const formik = useFormik<{ image?: File }>({
    initialValues: {}, 
    onSubmit: () => {}, 
    validate: validateImage,
  });

  // Safely check if there's an error for roleQuestions.role
  const hasRoleError = (): boolean => {
    return !!(
      touched && 
      touched.roleQuestions && 
      touched.roleQuestions.role && 
      errors && 
      errors.roleQuestions && 
      errors.roleQuestions.role
    );
  };

  // Safely get the role error message
  const getRoleErrorMessage = (): string => {
    if (errors && errors.roleQuestions && errors.roleQuestions.role) {
      return errors.roleQuestions.role as string;
    }
    return '';
  };

  return (
    <div>
      <div className="grid grid-cols-1 mb-5">
        <div className="grid grid-cols-1 mb-5">
          <label htmlFor={`${name}.role`} className="font-semibold">
            {label} {required && <span className="text-red-600">*</span>}
          </label>
          <label htmlFor={`${name}.role`} className="text-gray-500 text-sm">{caption}</label>
          <Field
            as="select"
            id={`${name}.role`}
            name={`${name}.role`}
            onChange={handleRoleChange}
            value={selectedRole}
            className={`form-select mt-2 text-charcoal-600 border ${
              hasRoleError() ? 'border-red-500' : 'border-charcoal-300'
            } rounded-md px-4 py-3 focus:outline-none focus:ring-green-700 focus:border-green-700`}
          >
            <option value="">{"-Select option-"}</option>
            {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Field>
          {hasRoleError() && (
            <div className="text-red-500 text-sm mt-1">{getRoleErrorMessage()}</div>
          )}
        </div>
        
        {roleQuestions.length > 0 && roleQuestions[0].questions.map((question, index) => (
          <div key={index} className="grid grid-cols-1 mb-5">
            {question.type === 'text' && (
              <TextField 
                name={`${name}.${question.name}`} 
                caption={question.caption} 
                label={question.question} 
                image={question.image} 
                required={question.required}
              />
            )}
            
            {question.type === 'radio' && (
              <RadioField 
                name={`${name}.${question.name}`} 
                label={question.question} 
                caption={question.caption} 
                options={question.options} 
                image={question.image} 
                required={question.required}
              />
            )}
            
            {question.type === 'checkbox' && (
              <CheckboxField 
                name={`${name}.${question.name}`} 
                label={question.question} 
                caption={question.caption} 
                options={question.options} 
                required={question.required}
              />
            )}
            
            {question.type === 'upload' && (
              <UploadField
                name={`${name}.${question.name}`}
                caption={question.caption}
                label={question.question} 
                data={formik.values}
                errors={formik.errors}
                setFieldValue={formik.setFieldValue}
                required={question.required}
              />
            )}
            
            {question.type === 'radioTable' && (
              <RadioTableField
                name={`${name}.${question.name}`}
                label={question.question}
                caption={question.caption}
                rowOptions={question.rowOptions}
                columnOptions={question.columnOptions}
                required={question.required}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const RoleSpecificSubField = withSubForm(RoleSpecificField);