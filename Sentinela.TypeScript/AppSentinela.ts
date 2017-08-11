/// <reference path="../Web.TypeScript/AppWebBase.ts"/>
/// <reference path="../Web.TypeScript/Utils.ts"/>

module Sentinela
{
    // #region Importações

    import AppWebBase = Web.AppWebBase;
    import Utils = Web.Utils;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class AppSentinela extends AppWebBase
    {
        // #region Constantes

        private static get STR_JSN_LISTA_APARELHO(): string { return "jsn-lista-aparelho" };

        // #endregion Constantes

        // #region Atributos

        protected static _i: AppSentinela;

        public static get i(): AppSentinela
        {
            if (AppSentinela._i != null)
            {
                return AppSentinela._i;
            }

            AppSentinela._i = new AppSentinela();

            return AppSentinela._i;
        }

        private _arrObjServidor: Array<ServidorDominio>;

        public get arrObjServidor(): Array<ServidorDominio>
        {
            if (this._arrObjServidor != null)
            {
                return this._arrObjServidor;
            }

            this._arrObjServidor = this.getArrObjServidor();

            return this._arrObjServidor;
        }

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos

        private getArrObjServidor(): Array<ServidorDominio>
        {
            var arrObjServidorResultado = new Array<ServidorDominio>();

            var jsnArrObjServidor = window.localStorage.getItem(AppSentinela.STR_JSN_LISTA_APARELHO);

            if (Utils.getBooStrVazia(jsnArrObjServidor))
            {
                window.localStorage.setItem(AppSentinela.STR_JSN_LISTA_APARELHO, JSON.stringify(arrObjServidorResultado));

                return arrObjServidorResultado;
            }

            jsnArrObjServidor = JSON.parse(jsnArrObjServidor);

            for (var i = 0; i < jsnArrObjServidor.length; i++)
            {
                var objServidor = new ServidorDominio();

                objServidor.copiarDados(jsnArrObjServidor[i]);

                arrObjServidorResultado.push(objServidor);
            }

            return arrObjServidorResultado;
        }

        public salvar(objServidor: ServidorDominio): void
        {
            this.validar(objServidor);

            AppSentinela.i.arrObjServidor.push(objServidor);

            window.localStorage.setItem(AppSentinela.STR_JSN_LISTA_APARELHO, JSON.stringify(AppSentinela.i.arrObjServidor));
        }

        private validar(objServidor: ServidorDominio): void
        {
            if (objServidor == null)
            {
                throw new Error("O servidor não pode estar nulo.");
            }

            AppSentinela.i.arrObjServidor.forEach(o => this.validarItem(o, objServidor));
        }

        private validarItem(objServidor: ServidorDominio, objServidorNovo: ServidorDominio): void
        {
            if (objServidor.strNome == objServidorNovo.strNome)
            {
                throw new Error("Já existe um servidor com este nome.");
            }

            if (objServidor.url == objServidorNovo.url)
            {
                throw new Error("Já existe um servidor com este endereço (URL).");
            }
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}