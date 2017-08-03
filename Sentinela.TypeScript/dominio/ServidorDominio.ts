/// <reference path="../../Web.TypeScript/database/dominio/DominioWebBase.ts"/>

module Sentinela
{
    // #region Importações

    import DominioWebBase = Web.DominioWebBase;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ServidorDominio extends DominioWebBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos

        private _strGrupo: string;
        private _url: string;

        public get strGrupo(): string
        {
            return this._strGrupo;
        }

        public set strGrupo(strGrupo: string)
        {
            this._strGrupo = strGrupo;
        }

        public get url(): string
        {
            return this._url;
        }

        public set url(url: string)
        {
            this._url = url;
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