import React, { Component } from 'react';
import { Jumbotron, Form, Row, Col, Button} from 'react-bootstrap';
import jsPDF from 'jspdf';
import $ from 'jquery';
import { withTranslation } from 'react-i18next'



 class Family extends Component 
{

  constructor(props) {
      super(props);
      var today = new Date(),
            date = (today.getDate() + '/' + (today.getMonth() + 1) +  '/' + today.getFullYear()) ;
      this.myChangeHandler = this.myChangeHandler.bind(this);
      this.state = {
        date: date,
        username: '',
        usersurname: '',
        userid: Number,
        userbid: Number,
        userbirthday: Date,
        userstreetname: '',
        userhomenumber: Number,
        userpostcode: Number,
        userplace: '',
        usercanton: '',
        userdateofcametoswitzerland: Date,
        userdateofsubstitution: Date,
        usercountry: '',
        useradressincountry: '',
        userwifesname: '',
        userwifessurname:'',
        userwifesbirthday: Date,
        userfirstchildname: '',
        userfirstchildbirthday: Date,
        usersecondchildsname: '',
        usersecondchildbirthday: Date,
        values: [],
        valuesbirthday: [],
      };
  }
  createUI(){
    const { t } = this.props;
    return this.state.values.map((el, i) => 
        <div key={i}>
          <Form.Group controlId="formBasicEmail">
          <Form.Label>{t('your')} {i+1}. {t('childName')}</Form.Label>
         <Form.Control type="text" value={el||''} placeholder={t('child')} name="userfirstchildname" onChange={this.handleNameChange.bind(this, i)} />
         </Form.Group>
         <Form.Group controlId="formBasicEmail">
          <Form.Label>{t('your')} {i+1}. {t('childBirthday')}</Form.Label>
         <Form.Control type="date" value={el||''}  onChange={this.handleBirthdayChange.bind(this, i)} />
         </Form.Group>
        </div>
                 
    )
 }
 

 createUIListName(){
  return this.state.values.map((el, i) => 
      <div key={i}>
       <li  value={el||''} onChange={this.handleNameChange.bind(this, i)}> <mark> {this.state.values[i]} </mark> 
       <span value={el||''} onChange={this.handleBirthdayChange.bind(this, i)}> geboren am <mark> {this.state.valuesbirthday[i]}</mark></span>
       </li>
      </div>         
  )
}


handleNameChange(i, event) {
  let values = [...this.state.values];
  values[i] = event.target.value;
  this.setState({ values });
  console.log("values" , values)
 
}
handleBirthdayChange(i, event) {
  let valuesbirthday = [...this.state.values];
  valuesbirthday[i] = event.target.value;
  this.setState({ valuesbirthday });
  console.log("valuesbirthday" , valuesbirthday)   
}


 myChangeHandler(i, event) {
  console.log(i,event);
  if(event){
    let values = [...this.state.values];
    values[i] = event.target.value;
    this.setState({ values });
    console.log("values" , values)
   }else{
    let nam = i.target.name;
    let val = i.target.value;
    console.log(nam ,val);
    this.setState({[nam]: val})
   } 
 }
 
 addClick(){
   this.setState(prevState => ({ values: [...prevState.values, '']}))
 }
 
 

  sendToPrint(){
      var divContents = document.getElementById("family-pdf").innerHTML; 
      var a = window.open('', '', 'height=500, width=500'); 
      a.document.write(divContents); 
      a.print(); 
  }

  generatePDF(){  
      var doc = new jsPDF();
var elementHTML = $('#family-pdf').html();
var specialElementHandlers = {
    '#elementH': function (element, renderer) {
        return true;
    }
};
doc.fromHTML(elementHTML, 15, 15, {
    'width': 170,
    'elementHandlers': specialElementHandlers
});
// Save the PDF
doc.save('My-Document.pdf');
}

  render() {
    const { t } = this.props;
    return (
      <Jumbotron>
        <Row>
          <Col>
        <h1>{t('familyUnion')}</h1>
        <p>
        {t('familyText')}
        </p>
        
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>{t('fillForm')}</Form.Label>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>{t('yourFirstName')}</Form.Label>
            <Form.Control type="text" placeholder={t('pleaseName')} name="username"  onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>{t('yourLastName')}</Form.Label>
            <Form.Control type="text" placeholder={t('pleaseLastName')} name="usersurname"  onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>{t('numberOfN')}</Form.Label>
            <Form.Control type="number" placeholder={t('pleaseNNumber')} name="userid"  onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>{t('numberOfB')}</Form.Label>
            <Form.Control type="number" placeholder={t('pleaseBNumber')} name="userbid"  onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>{t('birthday')}</Form.Label>
            <Form.Control type="date" name="userbirthday" onChange={this.myChangeHandler} />
          </Form.Group>

          <Form.Label>{t('adress')} {t('adressInSw')}</Form.Label>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <Form.Control type="text" placeholder={t('street')} name="userstreetname"  onChange={this.myChangeHandler}/>
              </Form.Label>
              <Form.Label>
                <Form.Control type="number" placeholder={t('home')} name="userhomenumber"  onChange={this.myChangeHandler}/>
              </Form.Label>
              <Form.Label>
                <Form.Control type="number" placeholder={t('postCode')} name="userpostcode"  onChange={this.myChangeHandler}/>
              </Form.Label>
              <Form.Label>
                <Form.Control type="text" placeholder={t('place')} name="userplace"  onChange={this.myChangeHandler}/>
              </Form.Label>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
            <Form.Label>{t('kantonName')}</Form.Label>
            <Form.Control type="text" name="usercanton"  onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>{t('came')}</Form.Label>
            <Form.Control type="date" name="userdateofcametoswitzerland"  onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>{t('substitution')}</Form.Label>
            <Form.Control type="date" placeholder="please enter your wife's name" name="userdateofsubstitution"  onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>{t('country')}</Form.Label>
            <Form.Control type="text" name="usercountry"  onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>{t('adress')} in {t('country')}</Form.Label>
            <Form.Control type="text" placeholder={t('adress')} name="useradressincountry" onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>{t('wifeName')}</Form.Label>
            <Form.Control type="text" placeholder={t('wifeName')} name="userwifesname"  onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>{t('wifeSurname')}</Form.Label>
            <Form.Control type="text" placeholder={t('wifeSurname')} name="userwifessurname"  onChange={this.myChangeHandler}/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>{t('wifeBirthday')}</Form.Label>
            <Form.Control type="date" name="userwifesbirthday" onChange={this.myChangeHandler} />
          </Form.Group>
        </Form>
        
      <form>
          {this.createUI()}
      <Button variant="warning" onClick={this.addClick.bind(this)}> {t('addkinder')} </Button>
      </form>
        </Col>
        <Col>
       
        <div id="family-pdf">
            
            <div id="user-information">
                <p id="user-name"><mark>{this.state.username !== ""? this.state.username:"........"}</mark> <mark>{this.state.usersurname !== ""? this.state.usersurname:"........"} </mark> </p>
                <p id="user-Id"> (N <mark>{this.state.userid !== ""? this.state.userid:"........"}</mark> , Pers.-Nr.<mark>{this.state.userbid !== ""? this.state.userbid:"........"}</mark> ) </p>
                   <p id="user-adress"> <mark>{this.state.userstreetname !== ""? this.state.userstreetname:"........"}</mark> <mark>{this.state.userhomenumber !== ""? this.state.userhomenumber:"........"}</mark>  , 
                                    <mark>{this.state.userpostcode !== ""? this.state.userpostcode:"........"}</mark>  <mark>{this.state.userplace !== ""? this.state.userplace:"........"}</mark>
                   </p>
            </div>
            <br></br> 
            <br></br> 
            
            <div id="sem-adres">
              <div>Einschreiben </div>
              <div>Staatssekretariat für Migration</div>
              <div>Quellenweg 6 </div>
                    3003 Bern-Wabern
              <div id="user-place"> <mark>{this.state.userplace !== ""? this.state.userplace:"........"}</mark> ,den <span id="today">{this.state.date}</span></div>
             </div>    

           <br></br>
           <br></br> 
           <br></br> 
           <br></br> 
           <br></br> 
           <br></br> 
           <div>
              <p>
                Gesuch um Familienasyl im Sinne des Art. 51 AsylG für die Ehefrau    
                 <span> <mark>{this.state.userwifesname !== ""? this.state.userwifesname:"........"}</mark>  <mark>{this.state.userwifessurname !== ""? this.state.userwifessurname:"........"}</mark> </span> ,  
                geboren am <span> <mark>{this.state.userwifesbirthday !== ""? this.state.userwifesbirthday:"........"}</mark> </span> 
                für die Kinder,
                 <ul onSubmit={this.handleSubmit}>
                     {this.createUIListName()} 
                 </ul>
                 , für die alle türkische Staatsangehörige
                <span id="user-name"> <mark>{this.state.username !== ""? this.state.username:"........"}</mark> <mark>{this.state.usersurname !== ""? this.state.usersurname:"........"}</mark> </span>, geboren am
                <span id="user-birthday"> <mark>{this.state.userbirthday !== ""? this.state.userbirthday:"........"}</mark> </span>, anerkannter Flüchtling, 
                türkischer Staatsangehöriger
              </p>
            

            <p>Sehr geehrte Damen und Herren</p>

            <p>
                Am <span id="user-comeDate"> <mark>{this.state.userdateofcametoswitzerland !== ""? this.state.userdateofcametoswitzerland:"........"}</mark> </span> habe ich in der Schweiz einen Asylantrag gestellt.
                Schliesslich wurde ich am <span id="user-asylDate"> <mark>{this.state.userdateofsubstitution !== ""? this.state.userdateofsubstitution:"........"}</mark> </span> als Flüchtling anerkannt.
                Danach wurde ich dem Kanton <span id="user-canton"> <mark>{this.state.usercanton !== ""? this.state.usercanton:"........"}</mark> </span> zugeteilt, wo ich zurzeit
                wohnhaft bin. Jedoch ist meine Familie noch in der <span id="user-country"> <mark>{this.state.usercountry !== ""? this.state.usercountry:"........"}</mark> </span> und
                sie ist in grosser Gefahr. Denn es wird nicht lange dauern bis die
                <span id="user-country"> <mark>{this.state.usercountry !== ""? this.state.usercountry:"........"}</mark> </span> Regierung meinen Aufenthalt in der Schweiz ausfindig
                macht. In diesem Fall würde man wahrscheinlich meiner Familie eine Ausreisesperre anordnen. Ähnliche
                Fälle sind sicherlich auch Ihnen bekannt.
            </p>

            <p><span id="user-country"> <mark>{this.state.usercountry !== ""? this.state.usercountry:"........"}</mark> </span> Adresse: <mark>{this.state.useradressincountry !== ""? this.state.useradressincountry:"........"}</mark>
          </p>
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
        </div>
        </Col>
               <div>
                 <p><Button onClick={this.sendToPrint} >{t('print')}</Button></p>
                <p><Button variant="success" onClick={this.generatePDF} >{t('download')}</Button></p>
             </div>

            <img id="image" alt=""/>
        
        
       </Row>
      </Jumbotron>   
    );
  }
}
export default withTranslation()(Family);