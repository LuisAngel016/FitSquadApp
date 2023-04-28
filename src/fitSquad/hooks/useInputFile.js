import { useRef, useState } from 'react';
import Swal from 'sweetalert2';


export const useInputFile = () => {
  
  const [selectedFile, setSelectedFile] = useState();

  const fileInputRef = useRef();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
  
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
      event.target.value = ''; // Limpiar el valor del input para evitar que se muestre dos veces
    } else {
      Swal.fire("Error al subir archivo","Por favor seleccione un archivo en formato PDF", "error");
    }
  };

  const handleFileSubmit = ( event ) => {
    event.preventDefault();
    if (selectedFile) {

      console.log('Archivo enviado');
      Swal.fire("Archivo enviado","El archivo se envió correctamnente", "success");

    } else {
      Swal.fire("Error al enviar archivo","Por favor seleccione un archivo antes de enviarlo", "error");
    }
  }

  
  const handleFileDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    fileInputRef.current.value = '';// actualizar el estado con el nombre del archivo
    handleFileUpload({ target: { files: [file] } });
  };


  return {
    //* Propiedades
    selectedFile,
    setSelectedFile,
    fileInputRef,
    
    //* Métodos
    handleFileSubmit,
    handleFileUpload,
    handleFileDrop,
  }
};

