import React from 'react';
import '../buttons/Button.css';

// const Button = ({title,name}) => {
//   return (
//     <div className='button'>
//        <button type='submit' className='discover-button'><a href="#" name={name}>{title}</a></button>
//     </div>
//   )
// }

const Button = ({ title, name, onClick }) => {
  return (
    <div className="button">
      <button type="button" className="discover-button" name={name} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};
export default Button
