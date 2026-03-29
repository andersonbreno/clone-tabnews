function status(request, response) {
  response.status(200).json({ chave: "Esse aqui é o  valor" });
}

export default status;
