var express = require('express');
var router = express.Router();

var RepairController = require('../controllers/repair')

router.get('/repairs/', (req,res,next)=>{
    if(req.query.ano){
        RepairController.getByAno(req.query.ano)
            .then(dados=>{
                res.status(200).json(dados)
            }).catch(erro=>{
                res.status(500).json(erro);
            });
    }
    else if (req.query.marca){
        RepairController.getByMarca(req.query.marca)
            .then(dados=>{
                res.status(200).json(dados)
            }).catch(erro=>{
                res.status(500).json(erro);
            });
    }
    else{
        RepairController.getAll()
            .then(dados=>{
                res.status(200).json(dados)
            }).catch(erro=>{
                res.status(500).json(erro);
            });
    }
});

router.get('/repairs/matriculas', (req,res,next) => {
    RepairController.getMatriculas()
        .then(dados=>{
            res.status(200).json(dados);
        }).catch(erro=>{
            res.status(500).json(erro);
        });
});


router.get('/repairs/interv', (req,res,next) => {
    RepairController.getIntervencoes()
        .then(dados=>{
            res.status(200).json(dados);
        }).catch(erro=>{
            res.status(500).json(erro);
        });
});


router.get('/repairs/:id', (req,res,next)=>{
    RepairController.getById(req.params.id)
        .then(dados=>{
            res.status(200).json(dados);
        }).catch(erro=>{
            res.status(500).json(erro);
        });
});

router.post('/repairs', (req,res,next)=>{
    RepairController.addRepair(req.body)
        .then(repair=>{
            res.status(200).json(repair);
        }).catch(erro=>{
            res.status(500).json(erro);
        });
});

router.delete('/repairs/:id', (req,res,next)=>{
    RepairController.deleteRepair(req.params.id)
        .then(repair=>{
            res.status(200).json(repair);
        }).catch(erro=>{
            res.status(500).json(erro);
        });
});


module.exports = router;