import * as yup from "yup";

export const validationSchema = yup.object({
  word: yup.string().required("Whoops, can’t be empty…"),
});
