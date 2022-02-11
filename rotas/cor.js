const {Router} = require ("express");
const { removeListener } = require("process");
const router = Router();
const { criar, listar, buscarPorId, atualizar, remover } = require ("../controller/cor.js")

//devolver uma lista ou um objeto
router.get("/:id_cor?", async (req, res) => {
   try {
       const {id_cor} = req.params;
       let resposta;
       
       if (id_cor){
        resposta = await buscarPorId(id_cor);
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
       const {cor} = req.body;
        const corCriado = await criar(cor);  
       res.send(corCriado);  // resposta para o usuario - utilizando o res
    } catch (erro){
        res.status(500).send({erro}); // mandando o erro - erro interno (500)
    }
   
});



router.post("/", async (req, res) =>  {   
  try {
      const corCriado = await criar ();

  } catch (erro) {}
});


// Atualizar um recurso existente

router.put("/:id_cor", async (req, res) =>  {
    try{

    let id_cor = req.params.id_cor;
    let dados = req.body;

    await atualizar(id_cor, dados);
    const resultado = await buscarPorId(id_cor);

    res.send(resultado);
  } catch (erro) {
      res.status(500).send({ erro});
  }
});


//remover um recurso existente
router.delete("/:id_cor", async (req, res) =>  {
   try {
     await remover(req.params.id_cor);
      res.send();
   } catch (erro) {
     console.log(erro);
     res.status(500).send({erro});

   }
    
});



module.exports = router;
