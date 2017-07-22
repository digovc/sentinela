using NetZ.Web.Server.Arquivo.Css;

namespace Sentinela.Html.Componente.Activity
{
    internal class ActHome : ActSentinelaBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void inicializar()
        {
            base.inicializar();

            this.strId = this.GetType().Name;
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.addCss(css.setDisplay("none"));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}