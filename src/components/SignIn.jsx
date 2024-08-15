import React from "react";
import { TextInput, Pressable, View, StyleSheet } from "react-native";
import * as yup from "yup";
import Text from "./Text";
import { useFormik } from "formik";

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
        .required('Username is required'),
    password: yup
        .string()
        .required('Password is required'),
});

const SignInForm = () => {
    const formik = useFormik({
      initialValues: { username: "", password: "" },
      validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
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
          <Text style={styles.errorMessage} >{formik.errors.username}</Text>
        )}
        <TextInput
          style={[
            styles.input,
            formik.touched.password && formik.errors.password && styles.inputError,
          ]}
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry
          onChangeText={formik.handleChange("password")}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={styles.errorMessage}> {formik.errors.password}</Text>
        )}
        <Pressable style={styles.button} onPress={formik.handleSubmit}>
          <Text color="primary" fontSize="subheading" fontWeight="bold">
            Sign in
          </Text>
        </Pressable>
      </View>
    );
  };
  
  export default SignInForm;