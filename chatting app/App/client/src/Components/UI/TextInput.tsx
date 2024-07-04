
// import { useField } from 'formik';


// interface TextInputProps {
//   passwordFiled?: boolean;
//   label: string;
//   name: string;
//   type: string;
//   placeholder: string;

// }

// export default function TextInput({ passwordFiled, label, name, type, placeholder }: TextInputProps) {
//   const [
//     field, { error, touched }] = useField({ name: name, type: type });
//   const [showText, setShowText] = useState(false);

//   const style = 'w-full outline-none border border-slate-300 focus:border-blue-500 px-2 py-2 rounded-md font-main';
//   const color = "#747d8c";
//   return (

//   )
// }
// TextInput.defaultProps = {
//   passwordFiled: false
// }



// <div className='main_wrapper'>
// {!passwordFiled ? <div className="wrapper">
//   <label htmlFor='email' className='font-primary'>{label}</label>
//   <input
//     className={style}
//     {...field}
//     name={name}
//     type={type}
//   />
// </div> : <div className='wrapper relative mt-3'>
//   <label htmlFor='email' className='font-primary'>{label}</label>
//   <input
//     type={showText ? "text" : "password"}
//     className={style}
//   />
//   <div onClick={() => setShowText((state) => !state)} className="password_controller cursor-pointer absolute right-3 top-10">
//     {showText ? <MdVisibilityOff color={color} /> : <MdVisibility color={color} />}
//   </div>
// </div>}
// </div>


import React, { FunctionComponent } from 'react';
import { useField } from 'formik';
// import styles from './styles.module.scss';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
interface Props {
  name: string;
  type: string;
  placeholder: string;
  passwordFiled?: boolean;
  labelText: string;
  setShowText?: any;
  onChange: (e: React.ChangeEvent<any>) => void;
}

const TextInput: FunctionComponent<Props> = (props) => {
  const color = "#747d8c";
  const [
    field,
    { error, touched },
  ] = useField({
    name: props.name,
    type: props.name,
  });
  const { labelText, passwordFiled, setShowText, type } = props;
  return (
    <div className='main_wrapper'>
      {!passwordFiled ? <div className="wrapper">
        <label htmlFor='email' className='font-primary'>{labelText}</label>
        <input
          className={`w-full outline-none border border-slate-300 focus:border-blue-500 px-2 py-2 rounded-md font-primary ${error && touched && "border-red-500"}`}
          {...field} {...props} />
        {error && touched && <div
          className='font-primary text-red-400'
        >{error}</div>}
      </div> : <div className="wrapper relative">
        <label htmlFor='email' className='font-primary'>{labelText}</label>
        <input
          className={`w-full outline-none border border-slate-300 focus:border-blue-500 px-2 py-2 rounded-md font-primary ${error && touched && "border-red-500"}`}
          {...field} {...props} />
        <div onClick={() => setShowText((state: any) => !state)} className="password_controller cursor-pointer absolute right-3 top-10">
          {type === "text" ? <MdVisibilityOff color={color} /> : <MdVisibility color={color} />}
        </div>
        {error && touched && <div
          className='font-primary text-red-400'
        // className={styles.error}
        >{error}</div>}
      </div>}
    </div>
  );
};
TextInput.defaultProps = {
  passwordFiled: false,
}
export default TextInput;