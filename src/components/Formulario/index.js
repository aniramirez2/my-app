import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useNavigation } from 'react-router-dom';

const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'El nombre de usuario debe tener al menos 3 caracteres')
      .max(15, 'El nombre de usuario no debe tener más de 15 caracteres')
      .required('El nombre de usuario es obligatorio'),
    age: Yup.number()
      .positive('La edad debe ser un número positivo')
      .integer('La edad debe ser un número entero')
      .required('La edad es obligatoria'),
    email: Yup.string()
      .email('El correo debe ser válido')
      .required('El correo es obligatorio'),
    password: Yup.string()
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .required('La contraseña es obligatoria'),
    phone: Yup.string()
      .matches(/^[0-9]+$/, 'El teléfono debe contener solo números')
      .min(10, 'El teléfono debe tener al menos 10 caracteres')
      .max(10, 'El teléfono no debe tener más de 10 caracteres')
      .required('El teléfono es obligatorio'),
  });

  const initialValues = {
    username: '',
    age: '',
    email: '',
    password: '',
    phone: '',
  };

  export const Formulario = () => {
    const [usuario, setUsuario] = useState('');
    const navigation = useNavigate();

    const handleButton = () => {
      console.log("entré");
      navigation('/products')
    };

    useEffect(() => {
        //axios.get(url/id) devuelve objeto response
        // setUsuario(response)
        //initialValues.username = usuario.name

    }, [])

    const sendToApi = (user) => {
        //axios.post(URL, user)
    }

    const validateExistedUser = (user) => {
        // preguntar al raay o a la api si ya existe este nombre o este correo
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, { setSubmitting }) => {
            console.log("mostrando los valores del formik", values);
            sendToApi(values);
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
        }
      })

    return (
      <div>
        <h1>Formulario de registro</h1>
        
        <form onSubmit={formik.handleSubmit}>
            <input type="text" name="username" placeholder="Nombre de usuario" {...formik.getFieldProps('username')} />
            {formik.touched.username && formik.errors.username && <div>{formik.errors.username}</div>}

            <input type="number" name="age" placeholder="Edad" {...formik.getFieldProps('age')} />
            {formik.touched.age && formik.errors.age && <div>{formik.errors.age}</div>}

            <input type="email" name="email" placeholder="Correo electrónico" {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}

            <input type="password" name="password" placeholder="Contraseña" {...formik.getFieldProps('password')} />
            {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}

            <input type="text" name="phone" placeholder="Teléfono" {...formik.getFieldProps('phone')} />
            {formik.touched.phone && formik.errors.phone && <div>{formik.errors.phone}</div>}
            <button type="submit" disabled={formik.isSubmitting}>
            Registrarse
            </button>

            <button type='button' onClick={() => handleButton()}>Ir a otra página</button>
        </form>
      </div>
    );
  }
  