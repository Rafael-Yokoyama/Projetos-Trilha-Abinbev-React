

import api from "./api";

const CadastrarService = {
  PostSignNow: (signNow: any) => api.post(`/register `,{
      email: signNow.email,
      password: signNow.password

  }),

  PostSign: (sign: any) => api.post(`/login `,{
    email: sign.email,
    password: sign.password

}),

  
}

export default CadastrarService