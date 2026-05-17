import React from 'react'
import AuthLayout from '../components/Layouts/AuthLayout'
import FormSignUp from '../components/Fragments/FormSignUp'

function signIn() {
  return (
    <AuthLayout>
        <FormSignUp />
    </AuthLayout>
  );
}

export default signIn;