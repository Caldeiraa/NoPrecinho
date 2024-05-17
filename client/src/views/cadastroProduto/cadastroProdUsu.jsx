import React from 'react'

function CadastroProdUsu() {
    return (
        <div class="conteudo">
            <div id='cadastro' className="container">
                <form>
                    <div class="row">
                        <div class="col-md">
                            <div class="box-prod">
                                <a class="box-prod" href=""><input type="file" /></a>
                            </div>
                        </div>
                        <div class="col-md">
                            <label for="" class="form-label fs-4 mt-3">Nome Completo:</label>
                            <input name="" type="text" class="form-control rounded-4 mb-5 border border-black" />
                            <label for="" class="form-label fs-4 mt-3">Tipo:</label>
                            <input name="" type="text" class="form-control rounded-4 mb-5 border border-black" />
                            <label for="" class="form-label fs-4 mt-3">Preço:</label>
                            <input name="" type="text" class="form-control rounded-4 mb-5 border border-black" />
                        </div>
                        <div class="col-md">
                            <label for="" class="form-label fs-4 mt-3">Marca:</label>
                            <input name="" type="text" class="form-control rounded-4 border mb-5 border-black" />
                            <label for="" class="form-label fs-4 mt-3">Peso(Kg):</label>
                            <input name="" type="text" class="form-control rounded-4 border mb-5 border-black" />
                            <label for="" class="form-label fs-4 mt-3">Descrição:</label>
                            <textarea class="form-control border mb-5 border-black rounded-4" aria-label="With textarea" rows="5" cols="50" placeholder="Insira informações como localização e detalhes do produto"></textarea>

                        </div>
                    </div>
                    <button type="submit" class="btn border border-black rounded-4 fs-4 float-end">Cadastrar</button>
                </form>
            </div>
            
        </div>
    )
}

export default CadastroProdUsu
