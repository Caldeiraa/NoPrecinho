import React from 'react'

 function cadastroProdMer() {
    return (
        <div class="conteudo">
            <div class="container">
                <div class="row"/>
                    <div class="col-md">
                        <div class="box-prod">
                            <a class="box-prod" href="">Foto</a>
                        </div>
                    </div>
                    <div class="col-md infoPrd">
                        <label for="" class="form-label fs-4 mt-3">Nome Completo:</label>
                        <input name="" type="text" class="form-control rounded-4 mb-5 border border-black"/>
                        <label for="" class="form-label fs-4 mt-3">Tipo:</label>
                        <input name="" type="text" class="form-control rounded-4 mb-5 border border-black"/>
                        <label for="" class="form-label fs-4 mt-3">Preço:</label>
                        <input name="" type="text" class="form-control rounded-4 mb-5 border border-black"/>
                    </div>
                    <div class="col-md infoPrd">
                        <label for="" class="form-label fs-4 mt-3">Marca:</label>
                        <input name="" type="text" class="form-control rounded-4 border mb-5 border-black"/>
                        <label for="" class="form-label fs-4 mt-3">Peso(Kg):</label>
                        <input name="" type="text" class="form-control rounded-4 border mb-5 border-black"/>
                        <label for="" class="form-label fs-4 mt-3">Categoria:</label>
                        <select class="form-select form-select-md rounded-4 border border-black mb-5" aria-label="Medium select example">
                            <option selected>Selecione uma categoria:</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <button type="submit" class="btn border border-black rounded-4 fs-4">Cadastrar-se</button>
            <div/>
        </div>
  )
}
export default cadastroProdMer