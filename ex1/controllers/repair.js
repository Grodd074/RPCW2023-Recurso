var RepairModel = require('../models/repair')

// Repair list
module.exports.getAll = () => {
    return RepairModel.find()
        .then(dados => {
            return dados
        }) 
        .catch(erro => {
            return erro
        })
}

module.exports.getById = (id) => {
    return RepairModel.findOne({_id: id})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getByAno = (ano) => {
    return RepairModel.find({"data":{$regex:ano}})
        .then(dados=>{
            return dados;
        })
        .catch(err=>{
            return err;
        });
};

module.exports.getByMarca = (marca) => {
    return RepairModel.find({"viatura.marca":marca})
        .then(dados=>{
            return dados;
        })
        .catch(err=>{
            return err;
        });
};

module.exports.getMatriculas = () => {
    return RepairModel.distinct("viatura.matricula").sort()
        .then(matriculas=>{
            return matriculas;
        }).catch(err=>{
            return err;
        });
};

module.exports.getIntervencoes = () => {
    return RepairModel.distinct("intervencoes").sort()
        .then(intervs=>{
            return intervs;
        }).catch(err=>{
            return err;
        });
};

module.exports.addRepair = (repair) => {
    return RepairModel.create(contract)
        .then(repair=>{
            return repair;
        }).catch(err=>{
            return err;
        });
};

module.exports.deleteRepair = (id) => {
    return RepairModel.deleteOne({_id:id})
        .then(repair=>{
            return repair;
        }).catch(err=>{
            return err;
        });
};