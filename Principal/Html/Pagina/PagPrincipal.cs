using NetZ.Web.Html;
using NetZ.Web.Html.Pagina;
using NetZ.Web.Server.Arquivo.Css;
using Sentinela.Html.Activity;

namespace Sentinela.Html.Pagina
{
    internal sealed class PagPrincipal : PagMobile
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private ActHome _actHome;
        private ActLogin _actLogin;
        private ActSplashScreen _actSplashScreen;
        private ActServidorCadastro _actSrvCadastro;
        private ActServidorDetalhe _actSrvDetalhe;

        private ActHome actHome
        {
            get
            {
                if (_actHome != null)
                {
                    return _actHome;
                }

                _actHome = new ActHome();

                return _actHome;
            }
        }

        private ActLogin actLogin
        {
            get
            {
                if (_actLogin != null)
                {
                    return _actLogin;
                }

                _actLogin = new ActLogin();

                return _actLogin;
            }
        }

        private ActSplashScreen actSplashScreen
        {
            get
            {
                if (_actSplashScreen != null)
                {
                    return _actSplashScreen;
                }

                _actSplashScreen = new ActSplashScreen();

                return _actSplashScreen;
            }
        }

        private ActServidorCadastro actSrvCadastro
        {
            get
            {
                if (_actSrvCadastro != null)
                {
                    return _actSrvCadastro;
                }

                _actSrvCadastro = new ActServidorCadastro();

                return _actSrvCadastro;
            }
        }

        private ActServidorDetalhe actSrvDetalhe
        {
            get
            {
                if (_actSrvDetalhe != null)
                {
                    return _actSrvDetalhe;
                }

                _actSrvDetalhe = new ActServidorDetalhe();

                return _actSrvDetalhe;
            }
        }

        #endregion Atributos

        #region Construtores

        internal PagPrincipal() : base(AppSentinela.i.strNome)
        {
        }

        #endregion Construtores

        #region Métodos

        protected override void addJs(LstTag<JavaScriptTag> lstJs)
        {
            base.addJs(lstJs);

            lstJs.Add(new JavaScriptTag(typeof(AppSentinela)));
        }

        protected override bool getBooJs()
        {
            return true;
        }

        protected override void montarLayout()
        {
            base.montarLayout();

            this.actHome.setPai(this);
            this.actLogin.setPai(this);
            this.actSplashScreen.setPai(this);
            this.actSrvCadastro.setPai(this);
            this.actSrvDetalhe.setPai(this);
        }

        protected override void setCss(CssArquivo css)
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