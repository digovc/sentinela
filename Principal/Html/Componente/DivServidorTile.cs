using NetZ.Web.Html;
using NetZ.Web.Html.Componente;
using NetZ.Web.Server.Arquivo.Css;

namespace Sentinela.Html.Componente
{
    internal class DivServidorTile : ComponenteHtml
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private Div _divStatus;
        private Div _divTitulo;

        private Div divStatus
        {
            get
            {
                if (_divStatus != null)
                {
                    return _divStatus;
                }

                _divStatus = new Div();

                return _divStatus;
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

        protected override void inicializar()
        {
            base.inicializar();

            this.strId = "_div_id";
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.divTitulo.setPai(this);

            this.divStatus.setPai(this);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.addCss(css.setBorderBottom(1, "solid", "white"));
            this.addCss(css.setPaddingBottom(10));
            this.addCss(css.setPaddingTop(10));
            this.addCss(css.setPosition("relative"));

            this.divStatus.addCss(css.setBackgroundColor("#4CAF50"));
            this.divStatus.addCss(css.setBorder(3, "solid", "#81C784"));
            this.divStatus.addCss(css.setBorderRadius(50, "%"));
            this.divStatus.addCss(css.setHeight(20));
            this.divStatus.addCss(css.setPosition("absolute"));
            this.divStatus.addCss(css.setRight(0));
            this.divStatus.addCss(css.setTop(5));
            this.divStatus.addCss(css.setWidth(20));

            this.divTitulo.addCss(css.setFontSize(20));
        }

        protected override void setStrId(string strId)
        {
            base.setStrId(strId);

            this.divStatus.strId = (strId + "_divStatus");
            this.divTitulo.strId = (strId + "_divTitulo");
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}