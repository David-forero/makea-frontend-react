import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';
import { useAuthContext } from "../../context/AuthContext";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignIn = () => {
  const navigate = useNavigate();
  const { signIn } = useAuthContext();

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().max(50).required("Usuario es requerido"),
      password: Yup.string().max(100).required("Contraseña es requerida"),
      phone: Yup.string().max(100).required("Contraseña es requerida"),
    }),
    onSubmit: (data) => {
      signIn(data, navigate);
    },
  });
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-10 w-auto" src={logo} alt="Makea logo" />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Inicia sesión para hacer compras</h2>
    </div>
  
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form  onSubmit={formik.handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">Correo</label>
          <div className="mt-2">
            <input onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                type="email"
                name="email" className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${formik.errors.password ? 'border-red-600 border-solid border-2' : ''}`}/>
          </div>
        </div>
  
        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium leading-6 text-gray-900">Clave</label>
           
          </div>
          <div className="mt-2">
            <input   onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                type="password"
                name="password" className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${formik.errors.password ? 'border-red-600 border-solid border-2' : ''}`}/>
          </div>
        </div>
  
        <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Iniciar session</button>
        </div>
      </form>
  
      <p className="mt-10 text-center text-sm text-gray-500">
        Eres nuevo? {" "}
        <p onClick={() => navigate('/auth/signup')} className="inline cursor-pointer font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Crea una cuenta</p>
      </p>
    </div>
  </div>
  )
}

export default SignIn