import React, {  useState } from 'react';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import OAuth2Login from 'react-simple-oauth2-login';


const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

async function loginUser() {
    return (
        <OAuth2Login
        authorizationUrl="http://localhost:8000/o/applications/2/"
        responseType="token"
        clientId="CRFJUn94EBELD1B0pobe8JHLxPViBPmhii6nDP2M"
        redirectUri="http://localhost:3000/oauth-callback"
        onSuccess={onSuccess}
        onFailure={onFailure}/>
    )
   }

export default function Login() {
    const [loginState,setLoginState]=useState(fieldsState);
    const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setIsLoading(true);
        loginUser()
        .then((response) => {
            console.log(response);
            setIsLoading(false);
          })
          .catch(() => {
            setErrorMessage("Unable to sign up user");
            setIsLoading(false);
          });
      }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
    <div className="-space-y-px">
    {errorMessage && (
          <div role="alert">
            <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
              Danger
            </div>
            <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <p>{errorMessage}</p>
            </div>
          </div>
        )}
        {
            fields.map(field=>
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={loginState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                />
            
            )
        }
    </div>

    <FormExtra/>
    <FormAction handleSubmit={handleSubmit} disabled={isLoading}
          isLoading={isLoading} text="Login"/>

  </form>
  )
}




// export default function Login(){
//     const [loginState,setLoginState]=useState(fieldsState);

//     const handleChange=(e)=>{
//         setLoginState({...loginState,[e.target.id]:e.target.value})
//     }

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         authenticateUser();
//     }

//     //Handle Login API Integration here
//     const authenticateUser = () =>{

//     }

//     return (
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//         <div className="-space-y-px">
//             {
//                 fields.map(field=>
//                         <Input
//                             key={field.id}
//                             handleChange={handleChange}
//                             value={loginState[field.id]}
//                             labelText={field.labelText}
//                             labelFor={field.labelFor}
//                             id={field.id}
//                             name={field.name}
//                             type={field.type}
//                             isRequired={field.isRequired}
//                             placeholder={field.placeholder}
//                     />
                
//                 )
//             }
//         </div>

//         <FormExtra/>
//         <FormAction handleSubmit={handleSubmit} text="Login"/>

//       </form>
//     )
// }