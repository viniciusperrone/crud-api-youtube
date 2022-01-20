import { Router, Request, Response } from 'express';
import { ProductController } from '../controllers/ProductsController';

const router = Router();

const productController = new ProductController();

router.post('/cadastrar-produtos', productController.create);
router.get('/listar-produtos', productController.read);
router.put('/atualizar-produtos/:id', productController.update);
router.delete('/deletar-produtos/:id', productController.delete);

export default router;