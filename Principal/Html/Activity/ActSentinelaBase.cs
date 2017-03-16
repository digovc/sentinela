using NetZ.Web.Html;
using NetZ.Web.Html.Activity;
using NetZ.Web.Server.Arquivo.Css;

namespace Sentinela.Html.Activity
{
    internal abstract class ActSentinelaBase : ActivityBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void addJs(LstTag<JavaScriptTag> lstJs)
        {
            base.addJs(lstJs);

            lstJs.Add(new JavaScriptTag(typeof(ActSentinelaBase), 199));
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.addCss(css.setBackgroundGradiente("#03515c", "#0d756c"));
            this.addCss(css.setDisplay("none"));
            this.addCss(css.setHeight(100, "%"));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}