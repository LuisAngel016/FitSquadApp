import { useState } from 'react';


export const useFormIU = () => {

    const [activeEmail, setActiveEmail] = useState(false);
    const [activePassword, setActivePassword] = useState(false);

    const handleClickInputEmail = () => {
      setActiveEmail(true);
    };

    const handleClickInputPassword = () => {
      setActivePassword(true);
    };

    const focusInput = function ( event ) {
      event.target.parentElement.children[1].className = "label active";
    //   event.target.parentElement.children[0].className = event.parentElement.children[0].className.replace("error", "");
    };

    const blurInput = function (event) {
      if (event.target.value <= 0) {
        event.target.parentElement.children[1].className = "label";
        // event.target.parentElement.children[0].className = event.parentElement.children[0].className + " error";
      }
    };
  

    return {
        //* Propiedades
        activeEmail,
        activePassword,

        //* Métodos
        handleClickInputEmail,
        handleClickInputPassword,
        focusInput,
        blurInput,
    }
}
