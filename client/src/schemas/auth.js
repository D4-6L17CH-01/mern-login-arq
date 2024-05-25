import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Por favor ingrese un email valido",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe tener por lo menos 6 caracteres",
  }),
});

export const registerSchema = z
  .object({
    username: z
      .string({
        required_error: "Nombre de usuario requerido",
      })
      .min(3, {
        message: "Nombre de usuario debe tener por lo menos 3 caracteres",
      }),
    email: z.string().email({
      message: "Por favor ingrese un email valido",
    }),
    password: z.string().min(6, {
      message: "La contraseña debe tener por lo menos 6 caracteres",
    }),
    confirmPassword: z.string().min(6, {
      message: "La contraseña debe tener por lo menos 6 caracteres",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });
