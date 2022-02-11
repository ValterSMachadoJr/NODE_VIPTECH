const {Router} = require ("express");
const router = Router();
const { criar, listar, buscarPorId, atualizar, remover} = require ("../controller/produto.js")

// req = contém os dados da requisicao, que estao chegando atraves da HTTP

//devolver uma lista ou um objeto
router.get("/:id_produto?", async (req, res) => {
    try {
        const {id_produto} = req.params;
        let resposta;
        
        if (id_produto){
            resposta = await buscarPorId(id_produto);
        } else{
            resposta = await listar();
        }
        res.send(resposta);
    } catch(erro) { 
        console.log(erro);
        res.status(500).send({ erro});
    }
});


//criar um novo recurso




router.post('/', async (req, res) => {
    try{
        const {nome, id_cor, id_marca, valor, imagem} = req.body;
        const produtoCriado = await criar(nome, id_cor, id_marca, valor, imagem); 
    
        res.send(produtoCriado);  // resposta para o usuario - utilizando o res
    } catch (erro){
        res.status(500).send({erro}); // mandando o erro - erro interno (500)
    }
    
});

router.post('/', async (req, res) =>  {   
    try {
        const produtoCriado = await criar ();
  
    } catch (erro) {}
  });
  

// Atualizar um recurso existente
router.put('/:id_produto', async (req, res) =>  {
    try{

    let id_produto = req.params.id_produto;
    let dados = req.body;

    await atualizar(id_produto, dados);
    const resultado = await buscarPorId(id_produto);

    res.send(resultado);
  } catch (erro) {
      res.status(500).send({ erro});
  }
});
//remover um recurso existente
router.delete('/:id_produto', async (req, res) =>  {
    try {
      await remover(req.params.id_produto);
       res.send();
    } catch (erro) {
      console.log(erro);
      res.status(500).send({erro});
 
    }
     
 });


module.exports = router;
