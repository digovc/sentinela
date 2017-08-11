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

    export class DivServidorTile extends ComponenteHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _divStatus: Div;
        private _divTitulo: Div;

        private get divStatus(): Div
        {
            if (this._divStatus != null)
            {
                return this._divStatus;
            }

            this._divStatus = new Div(this.strId + "_divStatus");

            return this._divStatus;
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