using NetZ.Web;
using NetZ.Web.Html;
using NetZ.Web.Html.Activity;
using NetZ.Web.Server.Arquivo.Css;
using Sentinela.Html.Componente.Mobile;

namespace Sentinela.Html.Activity
{
    internal abstract class ActSentinelaBase : ActivityBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private ActionBarSentinela _acb;
        private Div _divLogo;

        protected ActionBarSentinela acb
        {
            get
            {
                if (_acb != null)
                {
                    return _acb;
                }

                _acb = new ActionBarSentinela();

                return _acb;
            }
        }

        private Div divLogo
        {
            get
            {
                if (_divLogo != null)
                {
                    return _divLogo;
                }

                _divLogo = new Div();

                return _divLogo;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override void addJs(LstTag<JavaScriptTag> lstJs)
        {
            base.addJs(lstJs);

            lstJs.Add(new JavaScriptTag(typeof(ActSentinelaBase), 199));
        }

        protected virtual bool getBooMostrarLogo()
        {
            return false;
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.acb.setPai(this);

            this.montarLayoutDivLogo();
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.addCss(css.setBackgroundGradiente("#03515c", "#0d756c"));
            this.addCss(css.setDisplay("none"));
            this.addCss(css.setHeight(100, "%"));
            this.addCss(css.setPaddingLeft(20));
            this.addCss(css.setPaddingRight(20));
            this.addCss(css.setPaddingTop(75));

            this.setCssDivLogo(css);
        }

        private void montarLayoutDivLogo()
        {
            if (!this.getBooMostrarLogo())
            {
                return;
            }

            this.divLogo.setPai(this);
        }

        private void setCssDivLogo(CssArquivo css)
        {
            if (!this.getBooMostrarLogo())
            {
                return;
            }

            this.divLogo.addCss(css.setBackgroundImage(AppWebBase.DIR_MEDIA_SVG + "sentinela-logo.svg"));
            this.divLogo.addCss(css.setBackgroundPosition("center bottom"));
            this.divLogo.addCss(css.setBackgroundRepeat("no-repeat"));
            this.divLogo.addCss(css.setBackgroundSize("75%"));
            this.divLogo.addCss(css.setHeight(75, "%"));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}