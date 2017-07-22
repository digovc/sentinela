/// <reference path="../Web.TypeScript/AppWebBase.ts"/>

module Sentinela
{
    // #region Importações

    import AppWebBase = Web.AppWebBase;

    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class AppSentinela extends AppWebBase
    {
        // #region Constantes
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

        // #endregion Atributos

        // #region Construtores
        // #endregion Construtores

        // #region Métodos
        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}