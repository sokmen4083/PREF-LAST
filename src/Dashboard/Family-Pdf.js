import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import UserService from '../service/UserService';

async function checkUser() {
  const user = await this.props.authService.getUser();
  this.setState({ user });
  return user;
}

export class FamilyPdf extends Component {
  constructor(props) {
		super(props);
    this.sendToPrint = this.sendToPrint.bind(this);
    this.generatePDF = this.generatePDF.bind(this);
    this.checkUser = checkUser.bind(this);
    this.state = {files:{}};
  }

  sendToPrint(){
	  return window.print();
  }

  generatePDF(){ 
    const input = document.getElementById('family-pdf');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;   
  }

  async componentDidMount() {
    const oktaUser = await this.checkUser();
    let fileContent = await UserService.loadUserFile(oktaUser.email);
    this.setState({fileContent});
  }  
  
  render() {
    return (
          <div>
            <div id="family-pdf">
                <div id="user-information">
                    <p id="user-name">............</p>
                    <p id="user-Id">..............................</p>
                    <p id="user-adress">.....................................</p>
                </div>

                <div id="sem-adres">Einschreiben Staatssekretariat für Migration Quellenweg 6 3003 Bern-Wabern</div>

                <div id="user-place">..........</div>
                ,den
                <div id="user-date">...............</div>

                <p>
                    Gesuch um Familienasyl im Sinne des Art. 51 AsylG für die Ehefrau {this.state.files.wifesName},
                    geboren am {this.state.files.wifesBirthday}, für den Sohn, {this.state.files.firstChildName},
                    geboren am {this.state.files.firstChildBirthday}, für die
                    Tochter,{this.state.files.secondChildName}, geboren am {this.state.files.secondChildBirthday}, für
                    die Tochter, {this.state.files.thirdChildName}, geboren am {this.state.files.thirdChildBirthday},
                    und für den Sohn {this.state.files.forthChildName}, geboren am
                    {this.state.files.forthChildBirthday}, alle türkische Staatsangehörige
                    <span id="user-name">................</span>, geboren am
                    <span id="user-birthday">..............</span>, anerkannter Flüchtling, türkischer Staatsangehöriger
                </p>

                <p>Sehr geehrte Damen und Herren</p>

                <p>
                    Am <span id="user-comeDate">.............</span> habe ich in der Schweiz einen Asylantrag gestellt.
                    Schliesslich wurde ich am <span id="user-asylDate">...............</span> als Flüchtling anerkannt.
                    Danach wurde ich dem Kanton <span id="user-canton">..........</span> zugeteilt, wo ich zurzeit
                    wohnhaft bin. Jedoch ist meine Familie noch in der <span id="user-country">............</span> und
                    sie ist in grosser Gefahr. Denn es wird nicht lange dauern bis die
                    <span id="user-country">...........</span> Regierung meinen Aufenthalt in der Schweiz ausfindig
                    macht. In diesem Fall würde man wahrscheinlich meiner Familie eine Ausreisesperre anordnen. Ähnliche
                    Fälle sind sicherlich auch Ihnen bekannt.
                </p>

                <p><span id="user-country">.............</span> Adresse:</p>
                <p>{this.state.files.adress}</p>

                <p>
                    Ich ersuche Sie deshalb, die Einreise meiner Familienangehörigen in die Schweiz im Sinne des Art. 51
                    Asyl zu genehmigen. Folgende Unterlagen lege ich diesem Brief bei :
                </p>

                <ul>
                    <li>Auszug aus dem Personenstandsregister</li>
                    <li>Aufenthaltsbescheinigung</li>
                    <li>Kopie des Familienbuches</li>
                    <li>Kopien der Identitätskarten</li>
                    <li>Kopien der Reisepässe</li>
                </ul>
            </div>

            <div>
                <p><input type="button" value="PRINT" id="print" onClick={this.sendToPrint} /></p>
                <p><input type="button" value="Download PDF" onClick={this.generatePDF} /></p>
            </div>
        </div>
    );
  }
}