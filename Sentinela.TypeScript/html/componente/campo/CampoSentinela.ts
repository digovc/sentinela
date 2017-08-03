/// <reference path="../../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../../../Web.TypeScript/html/Input.ts"/>

module Sentinela
{
    // #region Importações

    import ComponenteHtml = Web.ComponenteHtml;
    import Input = Web.Input;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class CampoSentinela extends ComponenteHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _txt: Input;

        public get txt(): Input
        {
            if (this._txt != null)
            {
                return this._txt;
            }

            this._txt = new Input(this.strId + "_txt");

            return this._txt;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        protected inicializar(): void
        {
            super.inicializar();

            this.txt.iniciar();
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}