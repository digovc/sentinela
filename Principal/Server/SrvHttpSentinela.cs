using NetZ.Web;
using NetZ.Web.Server;
using Web.UiManager;

namespace Sentinela.Server
{
    internal sealed class SrvHttpSentinela : SrvHttpBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        public override Resposta responder(Solicitacao objSolicitacao)
        {
            return base.responder(objSolicitacao) ?? this.responderLocal(objSolicitacao);
        }

        protected override UiExportBase getObjUiManager()
        {
            return new UiExport();
        }

        private Resposta responderLocal(Solicitacao objSolicitacao)
        {
            return this.responderArquivoEstatico(objSolicitacao, ("/" + AppWebBase.DIR_HTML_PAGINA + "pag_principal.html"));
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}