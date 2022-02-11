const {Cor} = require("../bd");


let controller = { };

controller.criar = async (cor) =>{
  try {
    return await Cor.create({
     cor, 
   });
  } catch (erro){
      throw erro;
  }
};

controller.listar = async () => {
  try {
    return await Cor.findAll();

  } catch (erro){
    throw erro;
 }
};

controller.buscarPorId = async (id_cor) => {
 try {
   return await Cor.findByPk(id_cor);
 } catch (erro){
   throw erro;
 }
};





controller.atualizar = async (id_cor, {cor}) => {
  try {
    return await Cor.update (
      { 
        cor,   
      },
     {
       where: {
         id_cor,
      },
     }
    );
  } catch (erro) {
    throw erro;
  }
};

controller.remover = async (id_cor) => {
   try {
     return await Cor.destroy({
        where: {
           id_cor,
        },
     });

   } catch (erro) {
     throw erro;
   }

};



module.exports = controller;