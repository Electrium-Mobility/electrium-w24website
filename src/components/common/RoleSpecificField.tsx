import { useState, useEffect } from 'react';
import { useFormik, Form, Field, useFormikContext } from "formik";
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

interface Question {
  name: string;
  question: string;
  type?: string;
  options?: string[];
  required?: boolean;
}

interface RoleSpecificQuestion {
  id: string;
  role: string;
  questions: Question[];
}

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

const RoleSpecificField = ({ name, subName, label, caption, options, required, ...props }) => {
  const [roleQuestions, setRoleQuestions] = useState<RoleSpecificQuestion[]>([]);
  const [selectedRole, setSelectedRole] = useState("");
  const { setFieldValue, setFormikState } = useFormikContext();

  useValues(name, props);
  
  useEffect(() => {
    const roleData = roleSpecificQuestions.find(role => role.role === selectedRole);
    if (roleData) {
      setRoleQuestions([roleData]);
      const newValidationSchema = getValidationSchema(selectedRole);
      setFormikState(prevState => ({
        ...prevState,
        validationSchema: newValidationSchema,
      }));
    } else {
      setRoleQuestions([]); // Clear if no role is selected
      const newValidationSchema = getValidationSchema("");
      setFormikState(prevState => ({
        ...prevState,
        validationSchema: newValidationSchema,
      }));
    }
  }, [selectedRole, setFormikState]);

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedRole(value);
    setFieldValue(subName, value);
  };

  const MAX_SIZE = 100000000; // 100MB
  const validateImage = (values: { image?: File }) => {
    if (values.image && values.image.size > MAX_SIZE) {
      return { image: "Max file size exceeded." };
    }
  };

  const formik = useFormik<{ image?: File }>({
    initialValues: {}, // formik hook would include entire partner config
    onSubmit: (values) => console.log(values), // make request to service(s)
    validate: validateImage, // validate file type, size, etc.
    validationSchema: getValidationSchema(selectedRole), // Add this line
  });
  //console.log('required:', required);
  //console.log('subName:', subName);
  //console.log('required?.[subName]:', required?.[subName]);

  return (
    <Form>
      <div className="grid grid-cols-1 mb-5">
        <div className="grid grid-cols-1 mb-5">
          <label htmlFor={subName} className="font-semibold">
            {label} {required && <span className="text-red-600">*</span>}
          </label>
          <label htmlFor={subName} className="text-gray-500 text-sm">{caption}</label>
          <Field
              as="select"
              name={name}
              onChange={handleRoleChange}
            value={selectedRole}
            className="form-select mt-2 text-charcoal-600 border border-charcoal-300 rounded-md px-4 py-3 focus:outline-none focus:ring-green-700 focus:border-green-700"
          >
            <option value="">{"-Select option-"}</option>
            {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Field>
        </div>
        {roleQuestions.length > 0 && roleQuestions[0].questions.map((question, index) => (
          <div key={index} className="grid grid-cols-1 mb-5">
            {question.type === 'text' && <TextField name={question.name} caption={question.caption} label={question.question} image={question.image} required={question.required}/>}
            {question.type === 'radio' && <RadioField name={question.name} label={question.question} caption={question.caption} options={question.options} image={question.image} required={question.required}/>}
            {question.type === 'dropdown' && <DropdownField name={question.name} label={question.question} caption={question.caption} options={question.options} image={question.image} required={question.required}/>}
            {question.type === 'checkbox' && <CheckboxField name={question.name} label={question.question} caption={question.caption} options={question.options} image={question.image} required={question.required}/>}
            {question.type === 'upload' && 
                <UploadField
                    name={question.name}
                    caption={question.caption}
                    label={question.question} 
                    data={formik.values}
                    errors={formik.errors}
                    setFieldValue={formik.setFieldValue}
                    required={question.required}
                />
            }
            {question.type === 'radioTable' && 
                <RadioTableField
                    name={question.name}
                    label={question.question}
                    caption={question.caption}
                    rowOptions={question.rowOptions}
                    columnOptions={question.columnOptions}
                    image={question.image}
                    required={question.required}
                />
            }
          </div>
        ))}
      </div>
    </Form>
  );
};

export const RoleSpecificSubField = withSubForm(RoleSpecificField);
