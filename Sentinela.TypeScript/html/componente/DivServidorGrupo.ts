/// <reference path="../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../../Web.TypeScript/html/Div.ts"/>

module Sentinela
{
    // #region Importações

    import ComponenteHtml = Web.ComponenteHtml;
    import Div = Web.Div;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivServidorGrupo extends ComponenteHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divConteudo: Div;
        private _divTitulo: Div;

        private get divConteudo(): Div
        {
            if (this._divConteudo != null)
            {
                return this._divConteudo;
            }

            this._divConteudo = new Div(this.strId + "_divConteudo");

            return this._divConteudo;
        }

        private get divTitulo(): Div
        {
            if (this._divTitulo != null)
            {
                return this._divTitulo;
            }

            this._divTitulo = new Div(this.strId + "_divTitulo");

            return this._divTitulo;
        }

        // #endregion Atributos

        // #region Construtor
        // #endregion Construtor

        // #region Métodos
        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}