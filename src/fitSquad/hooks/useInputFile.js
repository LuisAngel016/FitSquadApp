import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import { onClearIsLoadingFile, onClearSelectUser, onSetIsloadingFile } from '../../store';


export const useInputFile = () => {

  const { isLoadingFile } = useSelector( state => state.fitSquad );
  const dispatch = useDispatch();

  const navigate = useNavigate();
  
  const fileInputRef = useRef();
  
  console.log({isLoadingFile});

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      dispatch( onSetIsloadingFile(file));

      event.target.value = ''; // Limpiar el valor del input para evitar que se muestre dos veces
    } else {
      Swal.fire("Error al subir archivo","Por favor seleccione un archivo en formato PDF", "error");
    }
  };

  const handleFileSubmit = ( event ) => {
    event.preventDefault();
    if (isLoadingFile) {

      console.log('Archivo enviado');
      Swal.fire("Archivo enviado","El archivo se envió correctamnente", "success");
      dispatch( onClearIsLoadingFile() );
      dispatch( onClearSelectUser() )
      navigate('');

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
    isLoadingFile,
    fileInputRef,
    
    //* Métodos
    handleFileSubmit,
    handleFileUpload,
    handleFileDrop,
  }
};

