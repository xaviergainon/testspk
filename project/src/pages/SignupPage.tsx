import React, { useState } from 'react';
import { Input } from '../components/forms/Input';
import { Button } from '../components/forms/Button';
import { Gift, Users } from 'lucide-react';
import { signup } from '../lib/api';
import { SignupInput, signupSchema } from '../lib/validation';

export const SignupPage: React.FC = () => {
  const [form, setForm] = useState<SignupInput>({
    name: '',
    email: '',
    referralCode: ''
  });
  const [errors, setErrors] = useState<Partial<SignupInput>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      // Client-side validation
      signupSchema.parse(form);

      // Submit to API
      const result = await signup(form);

      if (result.error) {
        throw new Error(result.error);
      }

      // Redirect to dashboard or show success message
      console.log('Successfully signed up with ID:', result.data?.userId);
    } catch (error) {
      if (error.name === 'ZodError') {
        const newErrors: Partial<SignupInput> = {};
        error.errors.forEach((err) => {
          const path = err.path[0] as keyof SignupInput;
          newErrors[path] = err.message;
        });
        setErrors(newErrors);
      } else {
        setErrors({
          email: error.message || 'Une erreur est survenue lors de l\'inscription'
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* ... Rest of the component remains the same ... */}
    </div>
  );
}