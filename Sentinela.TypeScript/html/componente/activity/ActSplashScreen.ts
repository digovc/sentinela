module Sentinela
{
    // #region Importações
    // #endregion Importações

    // #region Enumerados
    // #endregion Enumerados

    export class ActSplashScreen extends ActSentinelaBase
    {
        // #region Constantes
        // #endregion Constantes

        // #region Atributos
        // #endregion Atributos

        // #region Construtores

        constructor()
        {
            super(ActSplashScreen.name);
        }

        // #endregion Construtores

        // #region Métodos

        private fecharSplash(): void
        {
            PagPrincipal.i.fecharSplash();
        }

        protected inicializar(): void
        {
            super.inicializar();

            window.setTimeout((() => this.fecharSplash()), 1500);
        }

        // #endregion Métodos

        // #region Eventos
        // #endregion Eventos
    }
}