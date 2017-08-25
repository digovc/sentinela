/// <reference path="../../../Web.TypeScript/html/componente/ComponenteHtml.ts"/>
/// <reference path="../../../Web.TypeScript/html/Div.ts"/>
/// <reference path="../../../Web.TypeScript/Utils.ts"/>

module Sentinela
{
    // #region Importações

    import ComponenteHtml = Web.ComponenteHtml;
    import Div = Web.Div;
    import Utils = Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class DivServidorTile extends ComponenteHtml
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _actHome: ActHome;
        private _divStatus: Div;
        private _divTitulo: Div;
        private _objServidor: ServidorDominio;

        private get actHome(): ActHome
        {
            return this._actHome;
        }

        private set actHome(actHome: ActHome)
        {
            this._actHome = actHome;
        }

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

        private get objServidor(): ServidorDominio
        {
            return this._objServidor;
        }

        private set objServidor(objServidor: ServidorDominio)
        {
            this._objServidor = objServidor;
        }

        // #endregion Atributos

        // #region Construtor

        constructor(actHome: ActHome, objServidor: ServidorDominio)
        {
            super(null);

            this.actHome = actHome;
            this.objServidor = objServidor;
            this.strId = (DivServidorTile.name + "_" + this.intObjetoId);
        }

        // #endregion Construtor

        // #region Métodos

        protected montarLayout(): void
        {
            super.montarLayout();

            this.divTitulo.strConteudo = this.objServidor.strNome;
        }

        protected montarLayoutFixo(strLayoutFixo: string): string
        {
            strLayoutFixo = super.montarLayoutFixo(strLayoutFixo);

            strLayoutFixo = Utils.replaceAll(strLayoutFixo, "_div_id", this.strId);

            return strLayoutFixo;
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}