const $ = document.querySelector.bind(document);
class Content {
  constructor(props) {
    console.log('content init');
    this.selectors = {
      companyMark: 'i[class="company_mark"]',
      companyName: 'div[class="company_name"]',
      icu: 'div#icu',
    };
    this._init.call(this);
  }

  _init() {
    this._removeInjection();
    this._inject();      
  }
  
  _generateFlag() {
    console.log('_generateFlag')
    const logo = browser.extension.getURL('./assets/iculogo.svg');
    const flag = `
      <div id="icu" class="icu-wrapper"> 
        <img src="${logo}" width="24" height="24" alt="996icu" class="icu-logo"/>
        <span class="icu-title">996ICU</span>
      </div>
    `;
   // const frag = document.createDocumentFragment();
    const div = document.createElement('div');
    div.innerHTML = flag;
    return div;
  } 
  
  _inject() {
    console.log('_inject');
    const logo = this._generateFlag();
    const parent = $(this.selectors.companyName);
    parent.appendChild(logo)
  }

  _removeInjection() {
    const isExit = $(this.selectors.icu);
    if(isExit) {
      document.querySelector(this.selectors.companyName).removeChild(isExit);
    }
  }
}
const content = new Content();