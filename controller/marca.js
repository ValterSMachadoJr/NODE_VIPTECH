const {Marca, sequelize} = require("../bd");


let controller = { };

controller.criar = async (marca) =>{
  try {
    return await Marca.create({
     marca, 
   });
  } catch (erro){
      throw erro;
  }
};

controller.listar = async () => {
  try {
    return await Marca.findAll();

  } catch (erro){
    throw erro;
 }
};


controller.buscarPorId = async (id_marca) => {
  try {
    return await Marca.findByPk(id_marca);
  } catch (erro){
    throw erro;
  }
 };


 controller.atualizar = async (id_marca, {marca}) => {
  try {
    return await Marca.update (
      { 
        marca,   
      },
     {
       where: {
         id_marca,
      },
     }
    );
  } catch (erro) {
    throw erro;
  }
};


controller.remover = async (id_marca) => {
  try {
    return await Marca.destroy({
       where: {
          id_marca,
       },
    });

  } catch (erro) {
    throw erro;
  }

};


module.exports = controller;