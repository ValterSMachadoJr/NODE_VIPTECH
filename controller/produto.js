const {Produto, Cor, Marca, sequelize} = require("../bd");


let controller = { };



controller.criar = async (nome, id_cor, id_marca, valor, imagem) =>{
  

  try {
    return await Produto.create({
     nome,
     id_cor,
     id_marca,
     valor,
     imagem    
   });
  
  } catch (erro){ 
         throw erro;
  }
};

controller.listar = async () => {
  try {
    return await Produto.findAll({
    attributes: ["id_produto", "nome", "id_cor", "id_marca", "valor", "imagem", "data_cadastro"],
    order: [["id_produto"]]
    
    });
   } catch (erro){
    throw erro;
  }
};



controller.buscarPorId = async (id_produto) => {
  try {
    return await Produto.findByPk(id_produto);
  } catch (erro){
    throw erro;
  }
 };

 controller.atualizar = async (id_produto, {nome, id_cor, id_marca, valor, imagem }) => {
  try {
    return await Produto.update (
      { 
        nome,
        id_cor,
        id_marca,
        valor,
        imagem


      },
     {
       where: {
         id_produto,
      },
     }
    );
  } catch (erro) {
    throw erro;
  }
};


controller.remover = async (id_produto) => {
  try {
    return await Produto.destroy({
       where: {
          id_produto,
       },
    });

  } catch (erro) {
    throw erro;
  }

};


module.exports = controller;