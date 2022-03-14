import React from 'react'


const AusnetFooter = ({ childComponents }: any) => {
    let labels: any = ['Privacy',
        'Terms of Use',
        'Sitemap',
        'Copyright'
    ]
    let socialIcons: any = ['fa-youtube',
        'fa-linkedin-in',
        'fa-twitter',
        'fa-facebook-f'
    ]
    return (
        <div>
            <div className="footerMain p-5">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="getIn">Get in touch</div>
                        <div className="cantFind">Can’t find what you’re looking for? Or want to talk to us?</div>
                        <div className="getIn mt-4"> 
                        <i className="fa-solid fa-arrow-right mr-2"></i>Contact us</div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 links">
                        <div className='row'>
                            <div className="col-12">
                        {labels.map((label: any) => {
                            return <div key={label} className="labelBlock">
                                <a className="labels mb-3 ml-3 font-14">{label}</a>
                            </div>
                        })}
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="socialBox">
                            <div className="socialIcon"><i className="fa-brands fa-youtube"></i></div>
                            <div className="socialIcon"><i className="fa-brands fa-linkedin-in"></i></div>
                            <div className="socialIcon"><i className="fa-brands fa-twitter"></i></div>
                            <div className="socialIcon"><i className="fa-brands fa-facebook-f"></i></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 ausnet">
                        <h3 className='float-right'>Ausnet</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default AusnetFooter