using DigoFramework;
using NetZ.Web;
using NetZ.Web.Server;
using System.Collections.Generic;

namespace Sentinela
{
    internal sealed class AppSentinela : AppWebBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private static AppSentinela _i;

        public new static AppSentinela i
        {
            get
            {
                if (_i != null)
                {
                    return _i;
                }

                _i = new AppSentinela();

                return _i;
            }
        }

        #endregion Atributos

        #region Construtores

        private AppSentinela() : base("Sentinela")
        {
        }

        #endregion Construtores

        #region Métodos

        protected override ConfigWebBase getObjConfig()
        {
            return new ConfigSentinela();
        }

        protected override TemaBase getObjTema()
        {
            return new Design.TemaSentinela();
        }

        protected override void inicializarLstSrv(List<ServerBase> lstSrv)
        {
            lstSrv.Add(new Server.SrvSentinelaHttp());
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}