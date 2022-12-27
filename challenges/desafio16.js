db.produtos.updateOne({
    nome: {
      $eq: "Big Mac",
    },
  }, {
    $currentDate: {
      ultimaModificacao: true,
    },
  });
  
  db.produtos.find({
    nome: { $eq: "Big Mac" },
  },
   {
    nome: 1,
    _id: 0,
  });