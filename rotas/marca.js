const {Router} = require ("express");
const router = Router();
const { criar, listar, buscarPorId, atualizar, remover } = require ("../controller/marca.js")



//devolver uma lista ou um objeto
router.get("/:id_marca?", async (req, res) => {
    try {
        const {id_marca} = req.params;
        let resposta;
        
        if (id_marca){
         resposta = await buscarPorId(id_marca);
       } else{
           resposta = await listar();
       }
       res.send(resposta);
    } catch { (erro)
     console.log(erro);
     res.status(500).send({ erro});
    }
 });
 


//criar um novo recurso


router.post('/', async (req, res) => {    // req = contém os dados da requisicao, que estao chegando atraves da HTTP
    try{
       const {marca} = req.body;
        const marcaCriado = await criar(marca);  
       res.send(marcaCriado);  // resposta para o usuario - utilizando o res
    } catch (erro){
        res.status(500).send({erro}); // mandando o erro - erro interno (500)
    }
   
});




router.post("/", async (req, res) =>  {   
  try {
      const marcaCriado = await criar ();

  } catch (erro) {}
});

// Atualizar um recurso existente

router.put("/:id_marca", async (req, res) =>  {
    try{

    let id_marca = req.params.id_marca;
    let dados = req.body;

    await atualizar(id_marca, dados);
    const resultado = await buscarPorId(id_marca);

    res.send(resultado);
  } catch (erro) {
      res.status(500).send({ erro});
  }
});

//remover um recurso existente
router.delete("/:id_marca", async (req, res) =>  {
    try {
      await remover(req.params.id_marca);
       res.send();
    } catch (erro) {
      console.log(erro);
      res.status(500).send({erro});
 
    }
     
 });



module.exports = router;
