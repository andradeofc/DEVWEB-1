import { HttpService } from "./HttpService";
 
class EstabelecimentoService extends HttpService {
    constructor() {
        super("estabelecimentos")
    }
}
 
export const estabelecimento = new EstabelecimentoService()
