import { useState } from 'react';

interface ValidationRule {
  required?: boolean;
  email?: boolean;
  minLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

interface ValidationRules {
  [key: string]: ValidationRule;
}

interface ValidationErrors {
  [key: string]: string;
}

export function useFormValidation(rules: ValidationRules) {
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateField = (name: string, value: string): string | null => {
    const rule = rules[name];
    if (!rule) return null;

    if (rule.required && !value.trim()) {
      return `${name} is required`;
    }

    if (rule.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address';
    }

    if (rule.minLength && value.length < rule.minLength) {
      return `${name} must be at least ${rule.minLength} characters`;
    }

    if (rule.pattern && value && !rule.pattern.test(value)) {
      return `${name} format is invalid`;
    }

    if (rule.custom) {
      return rule.custom(value);
    }

    return null;
  };

  const validateForm = (formData: { [key: string]: string }): boolean => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    Object.keys(rules).forEach(fieldName => {
      const error = validateField(fieldName, formData[fieldName] || '');
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const clearErrors = () => setErrors({});

  const clearFieldError = (fieldName: string) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
  };

  return {
    errors,
    validateForm,
    validateField,
    clearErrors,
    clearFieldError
  };
}