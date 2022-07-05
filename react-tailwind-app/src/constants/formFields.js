const loginFields=[
    {
        labelText:"Phone Number",
        labelFor:"phone-number",
        id:"phone-number",
        name:"phone",
        type:"tel",
        autoComplete:"phobne",
        isRequired:true,
        placeholder:"Phone Number"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]

const signupFields=[
    {
        labelText:"First Name",
        labelFor:"firstname",
        id:"firstname",
        name:"firstname",
        type:"text",
        autoComplete:"firstname",
        isRequired:true,
        placeholder:"First Name"   
    },
    {
        labelText:"Last Name",
        labelFor:"lastname",
        id:"lastname",
        name:"lastname",
        type:"text",
        autoComplete:"lastname",
        isRequired:true,
        placeholder:"Last Name"   
    },
    {
        labelText:"Phone Number",
        labelFor:"phone-number",
        id:"phone-number",
        name:"phone",
        type:"tel",
        autoComplete:"Phone Number",
        isRequired:true,
        placeholder:"Phone Number"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirm-password",
        isRequired:true,
        placeholder:"Confirm Password"   
    }
]

export {loginFields,signupFields}