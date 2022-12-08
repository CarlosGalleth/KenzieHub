import * as yup from "yup";
export function formCreateSchema() {
  return yup.object().shape({
    title: yup.string().required("Nome obrigatório"),
    status: yup.string(),
  });
}
export function formPatchSchema() {
  return yup.object().shape({
    title: yup.string(),
    status: yup.string().required(""),
  });
}
