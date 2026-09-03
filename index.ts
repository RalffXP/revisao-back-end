import express from "express";
import { ICarro } from "./ICarro";

const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello, World!");
});

app.post('/carro', (req, res) => {
      const resultado = ICarro.safeParse(req.body);

      if (!resultado.success) {
        return res.status(400).json({ error: resultado.error.flatten() });
      }

      else{
        res.status(201).json({ message: "Carro criado com sucesso!", data: resultado.data });
      }

}); 



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
