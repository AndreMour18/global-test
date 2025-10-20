import * as yup from "yup";

export const validationSchema = yup.object({
  word: yup
    .string()
    .required("Digite uma palavra antes de buscar.")
    .max(50, "A palavra deve ter no máximo 50 caracteres.")
    .matches(
      /^[a-zA-Z\s-]+$/,
      "Apenas letras, espaços e hífens são permitidos."
    ),
});
