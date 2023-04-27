import { useState } from "react";
import Swal from "sweetalert2";


export const useInputFile = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
  
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      Swal.fire("Error al subir archivo","Por favor seleccione un archivo en formato PDF", "error");
    }
  };

  const handleFileSubmit = () => {
    if (selectedFile) {

      console.log('Archivo enviado');

    } else {
      Swal.fire("Error al enviar archivo","Por favor seleccione un archivo antes de enviarlo", "error");
    }
  };
  

  return {
    handleFileSubmit,
    handleFileUpload
  }
}
