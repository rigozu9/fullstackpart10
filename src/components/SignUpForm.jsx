import { TextInput, Pressable, View, StyleSheet } from "react-native";
import { useState } from 'react';
import Text from "./Text";
import * as yup from "yup";
import { useFormik } from "formik";
import useSignUp from '../hooks/useSignUp';

const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    input: {
      height: 50,
      color: "silver",
      borderColor: "silver",
      borderWidth: 1,
      borderRadius: 4,
      marginBottom: 15,
      paddingLeft: 10,
    },
    button: {
      backgroundColor: "silver",
      borderRadius: 6,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
    },
    inputError: {
        borderColor: "red",
    },
    errorMessage: {
        color: "red",
        paddingBottom: 10
    }
});

const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(5, 'Username must be at least 5 characters')
      .max(30, 'Username cannot be longer than 30 characters')
      .required('Username is a required string with a length between 5 and 30'),
    password: yup
      .string()
      .min(5, 'Password must be at least 5 characters')
      .max(50, 'Password cannot be longer than 50 characters')
      .required('Password is a required string with a length between 5 and 50'),
    confirmed_password: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Password confirmation is required'),
  });

export const SignUpContainer = ({ onSubmit, error }) => {
    const formik = useFormik({
      initialValues: { username: "", password: "", confirmed_password: "" },
      validationSchema,
      onSubmit,
    });
  
    return (
      <View style={styles.container}>
        <TextInput
          style={[
            styles.input,
            formik.touched.username && formik.errors.username && styles.inputError,
          ]}
          placeholder="Username"
          placeholderTextColor="gray"
          onChangeText={formik.handleChange("username")}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username && (
          <Text style={styles.errorMessage}>{formik.errors.username}</Text>
        )}
  
        <TextInput
          style={[
            styles.input,
            formik.touched.password && formik.errors.password && styles.inputError,
          ]}
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry={true}
          onChangeText={formik.handleChange("password")}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={styles.errorMessage}>{formik.errors.password}</Text>
        )}
  
        <TextInput
          style={[
            styles.input,
            formik.touched.confirmed_password && formik.errors.confirmed_password && styles.inputError,
          ]}
          placeholder="Password confirmation"
          placeholderTextColor="gray"
          secureTextEntry={true}
          onChangeText={formik.handleChange("confirmed_password")}
          value={formik.values.confirmed_password}
        />
        {formik.touched.confirmed_password && formik.errors.confirmed_password && (
          <Text style={styles.errorMessage}>{formik.errors.confirmed_password}</Text>
        )}
  
        {error && (
          <Text style={styles.errorMessage}>{error}</Text>
        )}
  
        <Pressable style={styles.button} onPress={formik.handleSubmit}>
          <Text color="primary" fontSize="subheading" fontWeight="bold">
            Sign Up
          </Text>
        </Pressable>
      </View>
    );
};

const SignUp = () => {
    const [createUser] = useSignUp();
    const [error, setError] = useState(null);
  
    const handleSubmit = async (values) => {
      const { username, password } = values;
  
      try {
        await createUser({ username, password });
        setError(null);
      } catch (e) {
        setError(e.message);
      }
    };
  
    return <SignUpContainer onSubmit={handleSubmit} error={error} />;
  };
  
  export default SignUp;