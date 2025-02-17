import React, { useState } from 'react';
import { models, Report, Embed, service, Page } from 'powerbi-client';
import { PowerBIEmbed } from 'powerbi-client-react';
import './PBReport.css';

function PBReport() {

	// PowerBI Report object (to be received via callback)
	const [report, setReport] = useState<Report>();

  return (
    <div>
      <PowerBIEmbed
	      embedConfig = {{
          type: 'report',   // Supported types: report, dashboard, tile, visual and qna
          id: 'ffd96ae6-d380-4b0a-b892-9b10c1ccb332',
          embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=ffd96ae6-d380-4b0a-b892-9b10c1ccb332&groupId=c01c3203-966c-4a73-a8a9-50b6f9cc8bc8&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlfX0%3d',
          accessToken: 'H4sIAAAAAAAEAB2TRav1BgBE_8vbphC3wreI2417drlxdy397310f2DgzMw_P1b69FOa__z900JePMlG5_dGWk28CSZuoZSsrubMchh6c80XbZNM7cdD4BEqRWhVoyj6u5UMaJtdVObiZNV9KTmaZ2RSLdZWGoC7v-VpkHv1BQfhqFa8eUMZXSgSqpIdUA7wgcQw1suAUl5JyD48LunGSIhDaOHdSqSew8iXWizRIDZUNlEOJWHaLORs1zN9HDXhC2PZW4qXRjWl0Rb0PcaUpsdWG5hFNIYA3LjtlTge_rCz2DK-WOsMSY2SXKMRvcETevXRWsf9fG6PR-WIFVnuvWLFQw_oXBPVguUNnPpV7x2ftCZ2cvnNMGZE_0rwxPeqWpWWHqN3vI7DVu7mmkp3xT2Ju2Y2aKpXvLmX4CWPQAst2yoM0c_XYTolMGSzIDaIGzS0ycioyC2pbwdS4WvselKj01SRiN8po0rN0Sp9W-OYtDTP3GFzRGSXRkR3u2hwEWm53ppEgU7dBFejqWcGwTGMIrsZyLsMRrsfR_oy8ga7Kav3hWMuIRR_HKKheNQN0AXqTrR6YcvfusD7FFmOD9Y5CKxnxy8oPhgnRW7q8oc70THeACHxiVwMYfGkDqbk8bmM2QXD6LXwPM7Ay1gssQA0xsLiE-LIfZgPlSohIBfedyrA77a3Fb00lHEaomdvlCGTYVQyeCXRyEUN58lPwCnsCXogbU3ZDfnCxzF7kQkZCmyqRi3m_p-fv3649Zn3SSue3-nypIgjUwKRW2fkMx9b1JlFIihzY-_4awHBvdSAqYDKH4g7rQHddX54nPTLqPvj7UHrrFLMxYXEfcPP4gLupfkwHZwfTJ_VcW0zDYLRb05pEAdnbuJmKw9LbHVOEZCVY5ksCTYGRip2z3Za3FOU5yYPnnDD-CovS4YzMKrjopiiNekqLkGqa705q-vD5K3UW7EbSqtCATRxg4yFiFjXkp_EShrt7yfjCeS7bL9VZsTiXLeoVkyLyRgK0sfFX7dy-Px2hLWygCjO8AP9EVUuIyCmqxhRQt-XT3O-BHw1cb9PnKFrbF-bpwocfd5fKnmaK4d9RwXd1NG2Y7G5LAACU0foNr7-_K_5metiVYJfy5k19GyzN8sKzgJuDrGLCC_zP-U21Zjux1r8YsHeUzCg55yjm5gNW6RGb7qZc5jbZ20pTNU8YGYsz8n4vTIpM_Un_Y6cnXiiNL5QftkpQkLGnjxIqF_DZV4OQHrO3cPnyMM5y5WGjL_5l5NgZbbB-KCUTpQz-y4AtRt_b8DIuAA5ByTWxixs-Vs7U3zso6JDFqJzYxVdeFcejWVzlDOxDtyUrSMZ9utjsgy3ovyNy9WWPjJaw9pGp4XclJ_5ENFaetC7WTqSKjn2zfN8Box0vfQjlQ3RNVEXuwa0fOnt3ABp3-O07hlwSBOaRCnwQZ2u5rN-zb41JhMPwqCsZTFyaaOrnNFJgRxqvp5DSBYl_Y62ptngINj4tWLNJbmL_av53_8A4Mx6U64FAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19',
          tokenType: models.TokenType.Embed,
          settings: {
            panes: {
                filters: {
                    expanded: false,
                    visible: false
                }
            },
            background: models.BackgroundType.Transparent,
          }
	      }}
        eventHandlers = { 
          new Map([
            ['loaded', function () {console.log('Report loaded');}],
            ['rendered', function () {console.log('Report rendered');}],
            ['error', function (event?:service.ICustomEvent<any>) {
              if (event) {console.error(event.detail);}
            }]
          ])
        }
		
        cssClassName = { "report-style-class" }

        getEmbeddedComponent = { (embeddedReport) => {
          setReport(embeddedReport as Report);
        }}
      />
    </div>
  );
}

export default PBReport;
