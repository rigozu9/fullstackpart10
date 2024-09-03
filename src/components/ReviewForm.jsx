import { TextInput, Pressable, View, StyleSheet } from "react-native";
import { useState } from 'react';
import Text from "./Text";
import * as yup from "yup";
import { useFormik } from "formik";
import useCreateReview from '../hooks/useCreateReview';

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
    owner: yup
      .string()
      .required('Repository owner name is required'),
    name: yup
      .string()
      .required('Repository name is required'),
    rating: yup
      .number()
      .required('Rating is required')
      .min(0, 'Rating must be at least 0')
      .max(100, 'Rating must be at most 100'),
    review: yup
      .string(),
  });

  export const ReviewFormContainer = ({ onSubmit, error }) => {
    const formik = useFormik({
      initialValues: { owner: "", name: "", rating: "", review: "" },
      validationSchema,
      onSubmit,
    });
  
    return (
      <View style={styles.container}>
        <TextInput
          style={[
            styles.input,
            formik.touched.owner && formik.errors.owner && styles.inputError,
          ]}
          placeholder="Repository owner name"
          placeholderTextColor="gray"
          onChangeText={formik.handleChange("owner")}
          value={formik.values.owner}
        />
        {formik.touched.owner && formik.errors.owner && (
          <Text style={styles.errorMessage}>{formik.errors.owner}</Text>
        )}
  
        <TextInput
          style={[
            styles.input,
            formik.touched.name && formik.errors.name && styles.inputError,
          ]}
          placeholder="Repository name"
          placeholderTextColor="gray"
          onChangeText={formik.handleChange("name")}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <Text style={styles.errorMessage}>{formik.errors.name}</Text>
        )}
  
        <TextInput
          style={[
            styles.input,
            formik.touched.rating && formik.errors.rating && styles.inputError,
          ]}
          placeholder="Rating between 0 and 100"
          placeholderTextColor="gray"
          keyboardType="numeric"
          onChangeText={formik.handleChange("rating")}
          value={formik.values.rating}
        />
        {formik.touched.rating && formik.errors.rating && (
          <Text style={styles.errorMessage}>{formik.errors.rating}</Text>
        )}
  
        <TextInput
          style={[
            styles.input,
            formik.touched.review && formik.errors.review && styles.inputError,
          ]}
          placeholder="Review"
          placeholderTextColor="gray"
          multiline
          onChangeText={formik.handleChange("review")}
          value={formik.values.review}
        />
        {formik.touched.review && formik.errors.review && (
          <Text style={styles.errorMessage}>{formik.errors.review}</Text>
        )}
  
        {error && (
          <Text style={styles.errorMessage}>{error}</Text>
        )}
  
        <Pressable style={styles.button} onPress={formik.handleSubmit}>
          <Text color="primary" fontSize="subheading" fontWeight="bold">
            Create a review
          </Text>
        </Pressable>
      </View>
    );
};

  const CreateReview = () => {
    const [createReview] = useCreateReview();
    const [error, setError] = useState(null); // State to hold error messages

  
    const handleSubmit = async (values) => {
      const { owner, name, rating, review } = values;
  
      try {
        await createReview({ owner, name, rating, review });
        setError(null);
      } catch (e) {
        setError(e.message);
      }
    };
  
    return <ReviewFormContainer onSubmit={handleSubmit} error={error} />;
};

export default CreateReview