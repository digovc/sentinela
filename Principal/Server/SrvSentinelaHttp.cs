using NetZ.Web.Server;
using Sentinela.Html.Pagina;

namespace Sentinela.Server
{
    internal sealed class SrvSentinelaHttp : SrvHttpBase
    {
        #region Constantes

        #endregion Constantes

        #region Atributos

        private PagSentinelaPrincipal _pagSentinelaPrincipal;

        private PagSentinelaPrincipal pagSentinelaPrincipal
        {
            get
            {
                if (_pagSentinelaPrincipal != null)
                {
                    return _pagSentinelaPrincipal;
                }

                _pagSentinelaPrincipal = new PagSentinelaPrincipal();

                return _pagSentinelaPrincipal;
            }
        }

        #endregion Atributos

        #region Construtores

        #endregion Construtores

        #region Métodos

        public override Resposta responder(Solicitacao objSolicitacao)
        {
            return base.responder(objSolicitacao) ?? this.responderLocal(objSolicitacao);
        }

        private Resposta responderLocal(Solicitacao objSolicitacao)
        {
            if (objSolicitacao == null)
            {
                return null;
            }

            return new Resposta(objSolicitacao).addHtml(this.pagSentinelaPrincipal);
        }

        #endregion Métodos

        #region Eventos

        #endregion Eventos
    }
}