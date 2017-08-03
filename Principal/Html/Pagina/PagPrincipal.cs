using NetZ.Web;
using NetZ.Web.DataBase.Dominio;
using NetZ.Web.Html;
using NetZ.Web.Html.Pagina;
using NetZ.Web.Server.Arquivo.Css;
using Sentinela.Html.Componente.Activity;
using Web.UiManager;

namespace Sentinela.Html.Pagina
{
    [HtmlExport(true)]
    internal sealed class PagPrincipal : PagMobile
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        #endregion Atributos

        #region Construtores

        public PagPrincipal() : base(AppSentinela.i.strNome)
        {
        }

        #endregion Construtores

        #region Métodos

        protected override void addJs(LstTag<JavaScriptTag> lstJs)
        {
            base.addJs(lstJs);

            lstJs.Add(new JavaScriptTag(AppWebBase.DIR_JS + "sentinela/dominio/ServidorDominio.js", 201));
            lstJs.Add(new JavaScriptTag(typeof(AppSentinela)));
            lstJs.Add(new JavaScriptTag(typeof(DominioWebBase)));
        }

        protected override void addLayoutFixo(JavaScriptTag tagJs)
        {
            base.addLayoutFixo(tagJs);

            tagJs.addLayoutFixo(typeof(ActServidorCadastro));
            tagJs.addLayoutFixo(typeof(ActServidorDetalhe));
        }

        protected override bool getBooJsAutoInicializavel()
        {
            return true;
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            new ActSplashScreen().setPai(this);

            new ActHome().setPai(this);
        }

        protected override void setCss(CssArquivoBase css)
        {
            base.setCss(css);

            this.addCss(css.setBottom(0));
            this.addCss(css.setLeft(0));
            this.addCss(css.setPosition("fixed"));
            this.addCss(css.setRight(0));
            this.addCss(css.setTop(0));
            this.addCss(css.setColor(AppSentinela.i.objTema.corFonte));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}