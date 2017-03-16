using NetZ.Web.Html;
using NetZ.Web.Server.Arquivo.Css;

namespace Sentinela.Html.Activity
{
    internal class ActSplashScreen : ActSentinelaBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divInfo;
        private Div _divLogo;

        private Div _divTitulo;

        private Div divInfo
        {
            get
            {
                if (_divInfo != null)
                {
                    return _divInfo;
                }

                _divInfo = new Div();

                return _divInfo;
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

        private Div divTitulo
        {
            get
            {
                if (_divTitulo != null)
                {
                    return _divTitulo;
                }

                _divTitulo = new Div();

                return _divTitulo;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        protected override bool getBooJs()
        {
            return true;
        }

        protected override void inicializar()
        {
            base.inicializar();

            this.divInfo.strConteudo = string.Format("Versão: {0}", AppSentinela.i.strVersao);
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divLogo.setPai(this);
            this.divTitulo.setPai(this);
            this.divInfo.setPai(this);
        }

        protected override void setCss(CssArquivo css)
        {
            base.setCss(css);

            this.divLogo.addCss(css.setHeight(50, "%"));

            this.divInfo.addCss(css.setBottom(0));
            this.divInfo.addCss(css.setLineHeight(35));
            this.divInfo.addCss(css.setPosition("absolute"));
            this.divInfo.addCss(css.setTextAlign("center"));
            this.divInfo.addCss(css.setWidth(100, "%"));

            this.divTitulo.addCss(css.setHeight(75));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}