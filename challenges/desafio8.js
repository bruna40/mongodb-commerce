db.produtos.deleteMany({ curtidas: { $lte: 50 } });
db.produtos.find({}, { nome: 1, _id: 0 });