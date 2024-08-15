import React from "react";
import { TextInput, Pressable, View, StyleSheet } from "react-native";
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
});

const SignInForm = () => {
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="gray"
        onChangeText={formik.handleChange("username")}
        value={formik.values.username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
        onChangeText={formik.handleChange("password")}
        value={formik.values.password}
      />
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text color="primary" fontSize="subheading" fontWeight="bold">
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
