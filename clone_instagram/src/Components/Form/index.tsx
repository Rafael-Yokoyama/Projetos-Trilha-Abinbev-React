
import React, { useEffect, useRef, useState } from 'react';

import axios from 'axios'

const Form  = () => {

  
  return (
      <div className="form">
        <p>Faça uma postagem aqui</p>
        <input type="text" placeholder="Cole a url da imagem" />
        <input type="text" placeholder="Digite uma descrição" />
        <button>Postar!</button>
      </div>
  );
}

export default Form;